#!/usr/bin/env -S node --loader ts-node/esm --no-warnings
import path from "node:path";
import enquirer from "enquirer";
import ts from "typescript";
import * as tjs from "typescript-json-schema";

const args = process.argv.slice(2);

if(args[0] === undefined) {
  throw new Error("Missing path");
} else {
  const relative = args[0];
  let props: any = undefined;
  let target: string | undefined = undefined;

  try {
    if(args[1]) {
      props = JSON.parse(args[1]);
    } else {
      throw new Error("Missing props");
    }
  } catch(e) {
    target = args[1];
  }

  function generateTemplateFromSchema(schema: tjs.Definition, prefix = "") {
    let template = "{\n";
    if(schema.properties) {
      for (const [key, value] of Object.entries(schema.properties)) {
        const fieldKey = `${prefix}${key}`;
        if(typeof value !== "boolean" && value.type === "object") {
          template += `  "${key}": ${generateTemplateFromSchema(value, `${fieldKey}.`)},\n`;
        } else {
          template += `  "${key}": "\${${fieldKey}}",\n`;
        }
      }
      template = template.slice(0, -2);  // Remove trailing comma and newline
      template += "\n}";
    }
    return template;
  }

  function isDefaultExport(node: ts.FunctionDeclaration | ts.ArrowFunction | ts.FunctionExpression) {
    return node.modifiers?.[0]?.kind === ts.SyntaxKind.ExportKeyword &&
      node.modifiers?.[1]?.kind === ts.SyntaxKind.DefaultKeyword;
  }

  async function run() {
    const absolute = path.join(process.cwd(), relative);

    if(props === undefined) {
      const program = ts.createProgram([absolute], { jsx: ts.JsxEmit.React });
      const checker = program.getTypeChecker();
      const sourceFile = program.getSourceFile(relative);
      if (!sourceFile) {
        throw new Error("Unable to open source file");
      }
      let schema: tjs.Definition | null = null;
      let propsName: string | undefined = undefined;
      function visit(node: ts.Node) {
        if(ts.isFunctionDeclaration(node) || ts.isArrowFunction(node) || ts.isFunctionExpression(node)) {
          if((isDefaultExport(node) && !target) || (target && node.name?.getText() === node.name?.getText())) {
            const signature = checker.getSignatureFromDeclaration(node);
            if(signature && signature.parameters.length > 0) {
              const firstParamSymbol = signature.parameters[0];
              if(firstParamSymbol?.valueDeclaration && ts.isParameter(firstParamSymbol.valueDeclaration)) {
                const typeNode = firstParamSymbol.valueDeclaration.type;
                if(typeNode && ts.isTypeReferenceNode(typeNode)) {
                  propsName = typeNode.typeName.getText();
                  const program = tjs.getProgramFromFiles([absolute], {
                    jsx: "react",
                    jsxFactory: "Prxmpt.createElement",
                    jsxFragmentFactory: "Prxmpt.Fragment",
                  });
                  schema = tjs.generateSchema(program, propsName, {
                    skipLibCheck: true,
                    ignoreErrors: true,
                    required: true
                  });
                }
              }
            }
          }
        }
        ts.forEachChild(node, visit);
      }
      ts.forEachChild(sourceFile, visit);
      if(schema && (schema as tjs.Definition).type === "object") {
        const template = generateTemplateFromSchema(schema);
        const result = await enquirer.prompt({
          type: "snippet",
          name: "props",
          message: propsName ?? "Props",
          required: true,
          template,
          result: (({ result }: { result: string; }) => JSON.parse(result)) as any
        }) as { props: any; };
        props = result.props;
      }
    }
    const module = await import(`${absolute}`);
    if(target) {
      const output = module[target](props ?? {});
      console.info(output);
    } else {
      const output = module.default(props ?? {});
      console.info(output);
    }
  }

  run();
}


