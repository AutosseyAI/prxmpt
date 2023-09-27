<div id="top" align="center">
  <h1>𝕡𝕣𝕩𝕞𝕡𝕥</h1>
  <a href="https://npmjs.com/package/@autossey/prxmpt">
    <img alt="NPM" src="https://img.shields.io/npm/v/@autossey/prxmpt.svg">
  </a>
  <a href="https://github.com/AutosseyAI/prxmpt">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/AutosseyAI/prxmpt.svg">
  </a>
</div>

<br />

<blockquote align="center"><i>-- Prompt Crafting with JSX --</i></blockquote>

<div align="center">
  <a href="https://www.npmjs.com/package/@autossey/prxmpt">npm</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://github.com/AutosseyAI/prxmpt/issues/new">Issues</a>
</div>

<br />
<br />

Prxmpt is like _"Tailwind for Prompt Engineering"_. It provides a set of utilities for formatting strings with JSX.

Prxmpt is designed for shaping the input to LLMs, and includes powerful elements such as [\<priority\>](#priority) for managing tokens. However, Prxmpt also provides both Markdown and HTML elements, making it perfect for formatting LLM outputs for end users as well.

<h2 id="why-jsx"><div align="right"><a href="#top">🔝</a></div>Why JSX?</h2>

1. 📖 **Readability** - JSX gives us more control over whitespace, enabling more readable code.
2. 🎛️ **Control** - With built-in props such as `hide`, we can easily control the text we display without ternaries.
3. 📦 **Reusability** - Prxmpt components take props just like normal JSX components, making them easy to reuse.

```tsx
const text = (
  <lined>
    <text>This is the first line.</text>
    <text hide={hideLine2}>Here's a second line.</text>
    <empty />
    <text>
      This is a longer line, so we'll wrap the text tag.
      We can even start another line here, and a space will be added.
    </text>
  </lined>
);
```

<details>
  <summary><i>Result (<code>hideLine2=false</code>)</i></summary>

  ```
  This is the first line.
  Here's a second line.

  This is a long line, so we'll wrap the text tag. We can even start another line here, and a space will be added.
  ```
</details>

<details>
  <summary><i>Result (<code>hideLine2=true</code>)</i></summary>

  ```
  This is the first line.

  This is a long line, so we'll wrap the text tag. We can even start another line here, and a space will be added.
  ```
</details>

Compare this to an equivalent using template literals:

```ts
const text = `This is the first line.${hideLine2 ? "\nHere's a second line." : ""}\n\nThis is a longer line, so by this point we're off the page. We can even start another line here, but I wouldn't recommend it.`;
```

<h2 id="installation"><div align="right"><a href="#top">🔝</a></div>Installation</h2>

<details open>
  <summary>
    <a href="https://www.npmjs.com/package/@autossey/prxmpt">
      <img src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white" alt="NPM" />
    </a>
  </summary>

```sh
npm install @autossey/prxmpt
```

</details>

<details open>
  <summary>
    <a href="https://yarnpkg.com/package/@autossey/prxmpt">
      <img src="https://img.shields.io/badge/yarn-2C8EBB?logo=yarn&logoColor=white" alt="Yarn" />
    </a>
  </summary>

```sh
yarn add @autossey/prxmpt
```

</details>

<details open>
  <summary>
    <img src="https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white" alt="PNPM" />
  </summary>

```sh
pnpm add @autossey/prxmpt
```

</details>

<details open>
  <summary>
    <img src="https://img.shields.io/badge/bun-EE81C3?logo=bun&logoColor=white" alt="Bun" />
  </summary>

```sh
bun add @autossey/prxmpt
```

</details>

<h2 id="getting-started"><div align="right"><a href="#top">🔝</a></div>Getting Started</h2>

<details open>
  <summary><b>Automatic Mode</b></summary>

Prxmpt provides a base `tsconfig.json` that you can extend:

```json
{
  "extends": "@autossey/prxmpt"
}
```

Alternatively, you can simply add the following fields to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "@autossey/prxmpt"
  }
}
```

You should be able to use Prxmpt elements now, without importing:

```tsx
export const MyComponent = () => (
  <text>Hello, World!</text>
);
```

> If using Prxmpt with React, add the following line at the top of each file that uses Prxmpt instead:
> ```tsx
> /** @jsxImportSource @autossey/prxmpt */
>
> export const MyComponent = () => (
>   <text>Hello, World!</text>
> );
> ```

</details>

<details>
  <summary><b>Classic Mode</b></summary>

To use Prxmpt in classic mode, you'll need to set the following fields in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "Prxmpt.createElement",
    "jsxFragmentFactory": "Prxmpt.Fragment"
  }
}
```
Additionally, you'll need to import `Prxmpt` in each file you use it:

```tsx
import Prxmpt from "@autossey/prxmpt";

export const MyComponent = () => (
  <text>Hello, World!</text>
);
```

</details>

<h2 id="examples"><div align="right"><a href="#top">🔝</a></div>Examples</h2>

Several examples are provided in the [examples](https://github.com/AutosseyAI/prxmpt/tree/main/examples) directory:

**Element Usage Examples:**
- [kitchen sink](https://github.com/AutosseyAI/prxmpt/blob/main/examples/kitchen-sink/source/Prompt.tsx) (Showcases many elements)
- [priority](https://github.com/AutosseyAI/prxmpt/tree/main/examples/priority/) (A few examples of the `<priority>` element)

**Setup Examples:**
- [bun](https://github.com/AutosseyAI/prxmpt/tree/main/examples/bun/)
- [bun (classic mode)](https://github.com/AutosseyAI/prxmpt/tree/main/examples/bun-classic/)
- [Next.js](https://github.com/AutosseyAI/prxmpt/tree/main/examples/next/)
- [swc](https://github.com/AutosseyAI/prxmpt/tree/main/examples/swc/)
- [swc (classic mode)](https://github.com/AutosseyAI/prxmpt/tree/main/examples/swc-classic/)
- [ts-node](https://github.com/AutosseyAI/prxmpt/tree/main/examples/ts-node/)
- [ts-node (classic mode)](https://github.com/AutosseyAI/prxmpt/tree/main/examples/ts-node-classic/)
- [tsc](https://github.com/AutosseyAI/prxmpt/tree/main/examples/tsc/)
- [tsc (classic mode)](https://github.com/AutosseyAI/prxmpt/tree/main/examples/tsc-classic/)

For examples of how to use specific elements, the [tests](https://github.com/AutosseyAI/prxmpt/tree/main/test/) show more usecases.

<h2 id="elements"><div align="right"><a href="#top">🔝</a></div>Elements</h2>

- [Text Elements](#text-elements)
    - [`<text>`](#text)
  - [Characters](#characters)
    - [`<empty>`](#empty)
    - [`<space>`](#space)
    - [`<tab>`](#tab)
    - [`<ellipsis>`](#ellipsis)
    - [`<na>` (n/a)](#na)
  - [Brackets](#brackets)
    - [`<parens>` (Parenthesis)](#parenthesis)
    - [`<square>` (Square Bracket)](#square-bracket)
    - [`<curly>` (Square Bracket)](#curly-bracket)
    - [`<angle>` (Angle Bracket)](#angle-bracket)
  - [Quotes](#quotes)
    - [`<sq>` (Single Quote)](#single-quote)
    - [`<dq>` (Double Quote)](#double-quote)
    - [`<bq>` (Back Quote)](#back-quote)
    - [`<tsq>` (Triple Single Quote)](#triple-single-quote)
    - [`<tdq>` (Triple Double Quote)](#triple-double-quote)
    - [`<tbq>` (Triple Back Quote)](#triple-back-quote)
  - [Comments](#comments)
    - [`<comment type="slash">`](#slash-comment)
    - [`<comment type="hash">`](#hash-comment)
    - [`<comment type="dash">`](#dash-comment)
    - [`<comment type="html">`](#html-comment)
  - [Sentences](#sentences)
    - [`<state>`](#state)
    - [`<ask>`](#ask)
    - [`<exclaim>`](#exclaim)
  - [Miscellaneous](#miscellaneous-text)
    - [`<kv>` (Key-Value Pair)](#key-value-pair)
- [HTML Elements](#html-elements)
    - [`<tag>`](#tag)
  - [Breaks](#breaks)
    - [`<br>` (Line Break)](#line-break)
    - [`<hr>` (Horizontal Rule)](#horizontal-rule)
  - [Linking](#linking)
    - [`<a>` (Anchor)](#anchor)
    - [`<img>` (Image)](#image)
  - [Headings](#headings)
    - [`<h1>`](#h1)
    - [`<h2>`](#h2)
    - [`<h3>`](#h3)
    - [`<h4>`](#h4)
    - [`<h5>`](#h5)
    - [`<h6>`](#h6) 
  - [Lists](#lists)
    - [`<ul>` (Unordered List)](#unordered-list)
    - [`<ol>` (Ordered List)](#ordered-list)
    - [`<cl>` (Checkbox List)](#checkbox-list)
    - [`<dl>` (Definition List)](#definition-list)
  - [Styling](#styling)
    - [`<i>` (Italic)](#italic)
    - [`<b>` (Bold)](#bold)
    - [`<s>` (Strikethrough)](#strikethrough)
    - [`<code>` (Code)](#code)
  - [Miscellaneous](#miscellaneous-html)
    - [`<span>`](#span)
    - [`<p>`](#paragraph)
    - [`<blockquote>`](#blockquote)
    - [`<q>`](#quote)
    - [`<pre>`](#pre)
- [Serialization Elements](#serialization-elements)
  - [Primitives](#primitives)
    - [`<num>`](#num)
  - [Dates](#dates)
    - [`<datetime>`](#datetime)
    - [`<date>`](#date)
    - [`<time>`](#time)
    - [`<year>`](#year)
    - [`<month>`](#month)
    - [`<day>`](#day)
    - [`<hour>`](#hour)
    - [`<minute>`](#minute)
    - [`<second>`](#second)
    - [`<millisecond>`](#millisecond)
    - [`<duration>`](#duration)
  - [Objects](#objects)
    - [`<json>`](#json)
    - [`<yaml>`](#yaml)
- [Utility Elements](#utility-elements)
  - [Casing](#casing)
    - [`<upper>`](#upper)
    - [`<lower>`](#lower)
    - [`<capital>`](#capital)
    - [`<title>`](#title)
  - [Joins](#joins)
    - [`<lined>`](#lined)
    - [`<spaced>`](#spaced)
    - [`<csl>` (Comma Separated List)](#csl)
    - [`<union>`](#union)
    - [`<sectioned>`](#sectioned)
  - [Sets](#sets)
    - [`<and>`](#and)
    - [`<andor>`](#andor)
    - [`<or>`](#or)
    - [`<nor>`](#nor)
  - [Affixes](#affixes)
    - [`<trim>`](#trim)
    - [`<frame>`](#frame)
  - [Limiters](#limiters)
    - [`<cap>`](#cap)
    - [`<priority>`](#priority)

<h2 id="exports"><div align="right"><a href="#top">🔝</a></div>Exports</h2>

The following functions are also exported from Prxmpt:

- [Rendering](#rendering)
  - [`createElement`](#createelement)
  - [`render`](#render)
- [Children](#children)
  - [`hasChildren`](#haschildren)
  - [`isChildren`](#ischildren)
- [Splitters](#splitters)
  - [`split`](#split)
  - [`paragraphs`](#paragraphs)
  - [`lines`](#lines)
  - [`spaces`](#spaces)
  - [`words`](#words)
  - [`commas`](#commas)
  - [`chars`](#chars)

<h2 id="text-elements"><div align="right"><a href="#elements">🔝</a></div>Text Elements</h2>

#### Text
_`<text>`_

Text is the base Prxmpt element. It returns its children as a string:


```tsx
const string = <text>Hello, World!</text>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  Hello, World!
  ```
</details>

Text can also be hidden with the `hide` prop:

```tsx
const string = <text>Hello<text hide>, World</hide>!</text>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  Hello!
  ```
</details>

<details open>
  <summary><h5>Props</h5></summary>

Since `<text>` is the base of most other elements, the props it provides can be used with most other elements.

Prxmpt treats children as an array of strings, which means `<text>` can also provide several array functions for mapping, filtering, and joining children.

---
- **hide**
```tsx
/**
 * Prevent the Element from being rendered.
 * @default false
 */
hide?: boolean;
```
- **filter**
```tsx
/**
 * A function to filter children.
 * @default (node) => true
 */
filter?: (node: Prxmpt.Children, index: number, arr: Prxmpt.Children[]) => boolean;
```
- **map**
```tsx
/**
 * A function that maps each child to a new Element.
 * @default (node) => Prxmpt.render(node)
 */
map?: (node: Prxmpt.Children, index: number, arr: Prxmpt.Children[]) => Prxmpt.JSX.Element;
```
- **reverse**
```tsx
/**
 * Reverse the order of the children.
 */
reverse?: boolean;
```
- **join**
```tsx
/**
 * An Element to insert between each child.
 * @default ""
 */
join?: Prxmpt.Children;
```
- **repeat**
```tsx
/**
 * @default 1
 */
repeat?: number;
```
- **trim**
```tsx
/**
 * `true`: Trim whitespace from the beginning and end of the Element.
 * 
 * `"start"`: Trim whitespace from the beginning of the Element.
 * 
 * `"end"`: Trim whitespace from the end of the Element.
 * 
 * @default false
 */
trim?: boolean | TrimSide;
```
- **casing**
```tsx
/**
 * Convert the Element to a given casing.
 * @default undefined
 */
casing?: Casing;
```
- **prefix**
```tsx
/**
 * An Element to prepend to the element.
 * @default ""
 */
prefix?: Prxmpt.Children;
```
- **suffix**
```tsx
/**
 * An Element to append to the element.
 * @default ""
 */
suffix?: Prxmpt.Children;
```
- **indent**
```tsx
/**
 * Apply indentation to each line of the Element.
 * 
 * If `true`, indentation is applied using 2 spaces.
 * 
 * If a number is provided, that number of spaces is used.
 * 
 * If `"\t"` is provided, a single tab character is used.
 * 
 * @default false
 */
indent?: boolean | number | "\t";
```
- **block**
```tsx
/**
 * Append a newline to the end of the Element.
 * @default false
 */
block?: boolean;
```
---
</details>

<h3 id="characters"><div align="right"><a href="#elements">🔝</a></div>Characters</h3>

#### Empty
_`<empty>`_

The `<empty>` element returns an empty string:

```tsx
// ""
const string = <empty />;
```

`<empty>` is often useful as a child of elements that join their children on some delimiter.

```tsx
const string = (
  <lined>
    <text>Line 1</text>
    <empty />
    <text>Line 3</text>
  </lined>
);
```

<details open>
  <summary><i>Result</i></summary>

  ```
  Line 1

  Line 2
  ```
</details>

#### Space
_`<space>`_

The `<space>` element returns a space:

```tsx
// " "
const string = <space />;
```

#### Tab
_`<tab>`_

<details>
  <summary><h5>Props</h5></summary>

---
- **literal**
```tsx
/**
  * If true, use a literal tab character. Otherwise, use spaces.
  * @default false
  */
literal?: boolean;
```
- **width**
```tsx
/**
  * Number of characters per tab
  * @default 1 if `literal` is true, otherwise 2
  */
width?: number;
```
---
</details>

```tsx
// "    "
const string = <tab width={4} />
```

#### Ellipsis
_`<ellipsis>`_

```tsx
const string = <ellipsis />;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  ...
  ```
</details>

#### NA
_`<na>`_

```tsx
const string = <na />;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  n/a
  ```
</details>

<h3 id="brackets"><div align="right"><a href="#elements">🔝</a></div>Brackets</h3>

#### Parenthesis
_`<parens>`_

```tsx
const string = <parens>Hello, World!</parens>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  (Hello, World!)
  ```
</details>

#### Square Bracket
_`<square>`_

```tsx
const string = <square>Hello, World!</square>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  [Hello, World!]
  ```
</details>


#### Curly Bracket
_`<curly>`_

```tsx
const string = <curly>Hello, World!</curly>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  {Hello, World!}
  ```
</details>

#### Angle Bracket
_`<angle>`_

```tsx
const string = <angle>Hello, World!</angle>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  <Hello, World!>
  ```
</details>

<h3 id="quotes"><div align="right"><a href="#elements">🔝</a></div>Quotes</h3>

#### Single Quote
_`<sq>`_

```tsx
const string = <sq>Hello, World!</sq>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  'Hello, World!'
  ```
</details>

#### Double Quote
_`<dq>`_

```tsx
const string = <dq>Hello, World!</dq>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  "Hello, World!"
  ```
</details>

#### Back Quote
_`<bq>`_

```tsx
const string = <bq>Hello, World!</bq>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  `Hello, World!`
  ```
</details>

#### Triple Single Quote
_`<tsq>`_

```tsx
const string = <tsq>Hello, World!</tsq>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  '''
  Hello, World!
  '''
  ```
</details>

#### Triple Double Quote
_`<tdq>`_

```tsx
const string = <tdq>Hello, World!</tdq>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  """
  Hello, World!
  """
  ```
</details>

#### Triple Back Quote
_`<tbq>`_

```tsx
const tbq = <tbq>Hello, World!</tbq>;
```

<details open>
  <summary><i>Result</i></summary>
  <pre>```<br/>Hello, World!<br/>```</pre>
</details>

<h3 id="comments"><div align="right"><a href="#elements">🔝</a></div>Comments</h3>

#### Slash Comment
_`<comment type="slash">`_

```tsx
const slash = <comment type="slash">Hello, World!</comment>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  // Hello, World!
  ```
</details>

#### Hash Comment
_`<comment type="hash">`_

```tsx
const hash = <comment type="hash">Hello, World!</comment>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  # Hello, World!
  ```
</details>

#### Dash Comment
_`<comment type="dash">`_

```tsx
const dash = <comment type="dash">Hello, World!</comment>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  -- Hello, World!
  ```
</details>

#### HTML Comment
_`<comment type="html">`_

```tsx
const html = <comment type="html">Hello, World!</comment>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  <!-- Hello, World! -->
  ```
</details>

<h3 id="sentences"><div align="right"><a href="#elements">🔝</a></div>Sentences</h3>

#### State
_`<state>`_

```tsx
const state = <state>Hello, World!</state>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  Hello, World.
  ```
</details>

#### Ask
_`<ask>`_

```tsx
const ask = <ask>Hello, World!</ask>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  Hello, World?
  ```
</details>

#### Exclaim
_`<exclaim>`_

```tsx
const exclaim = <exclaim>Hello, World!</exclaim>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  Hello, World!
  ```
</details>

<h3 id="miscellaneous-text"><div align="right"><a href="#elements">🔝</a></div>Miscellaneous</h3>

#### Key-Value Pair
_`<kv>`_

<details>
  <summary><h5>Props</h5></summary>

---
- **key**
```tsx
/**
  * A key to render.
  */
key: Prxmpt.Children;
```

- **keyCase**
```tsx
/**
  * Case to apply to the key.
  * @default undefined
  */
keyCase?: "upper" | "lower" | "capital" | "title";
```

- **wrap**
```tsx
/**
 * Override the default behavior for wrapping the value.
 * @default undefined
 */
wrap?: boolean;
```

- **noSpace**
```tsx
/**
 * If true, do not add a space between the key and value.
 * Only applies when not wrapping.
 * @default false
 */
noSpace?: boolean;
```
---

</details>

```tsx
const string = <kv key="Hello">World</kv>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  Hello: World
  ```
</details>

When the children contain multiple lines, the value is rendered starting on a newline by default:

```tsx
const worlds = (
  <tdq join={"\n"}>
    <text>World1</text>
    <text>World2</text>
    <text>World3</text>
  </tdq>
);

const string = <kv key="Hello">{worlds}</kv>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  Hello:
  """
  World1
  World2
  World3
  """
  ```
</details>

<h2 id="html-elements"><div align="right"><a href="#elements">🔝</a></div>HTML Elements</h2>

HTML elements are built on top of the `<tag>` element. Each html element has a boolean `html` prop that is set to false by default. When `html` is true, the element is rendered as HTML. Otherwise, the element is rendered as a Markdown equivalent.

Additionally, custom attributes can be set using the `attributes` prop.

#### Tag
_`<tag>`_

<details>
  <summary><h5>Props</h5></summary>

---
- **name**
```tsx
/**
 * Name of the tag.
 */
name: string;
```
- **noIndent**
```tsx
/**
 * @default false
 */
noIndent?: boolean;
```
- **wrap**
```tsx
/**
 * Defaults to true if the content contains a newline.
 */
wrap?: boolean;
```
---
</details>

```tsx
const tag = <tag name="mytag">Hello, World!</tag>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  <mytag>Hello, World!</mytag>
  ```
</details>


If no children are provided, the tag is rendered as a self-closing tag:

```tsx
const tag = <tag name="mytag" />;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  <mytag />
  ```
</details>

<h3 id="breaks"><div align="right"><a href="#elements">🔝</a></div>Breaks</h3>

#### Line Break
_`<br />`_

```tsx
// "\n"
const br = <br />;
```

```tsx
const br = <br html />;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  <br />
  ```
</details>

#### Horizontal Rule
_`<hr />`_

<details>
  <summary><h5>Props</h5></summary>

---
- **width**
```tsx
/**
 * @default 3
 */
width?: number;
```
- **char**
```tsx
/**
 * @default "-"
 */
char?: "-" | "_" | "=" | "*";
```
---
</details>

```tsx
const hr = <hr />;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  ---
  ```
</details>

```tsx
const hr = <hr />;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  <hr />
  ```
</details>

<h3 id="linking"><div align="right"><a href="#elements">🔝</a></div>Linking</h3>

#### Anchor
_`<a>`_

<details>
  <summary><h5>Props</h5></summary>

---
- **href**

```tsx
/**
 * The URL of the link.
 */
href: string;
```
- **title**
```tsx
/**
 * A title for the link.
 */
title?: string;
```
---
</details>

```tsx
const string = <a href="https://example.com" title="A Title">Hello, World!</a>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  [Hello, World!](https://example.com "A Title")
  ```
</details>

```tsx
const string = <a href="https://example.com" title="A Title" html>Hello, World!</a>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  <a href="https://example.com" title="A Title">Hello, World!</a>
  ```
</details>

#### Image
_`<img>`_

<details>
  <summary><h5>Props</h5></summary>

---
- **src**
```tsx
/**
 * The URL of the image.
 */
href: string;
```
- **title**
```tsx
/**
 * A title for the image.
 */
title?: string;
```
---
</details>

```tsx
const string = <img src="https://example.com" title="A Title">Hello, World!</img>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  ![Hello, World!](https://example.com "A Title")
  ```
</details>

```tsx
const string = <img src="https://example.com" title="A Title" html>Hello, World!</img>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  <img src="https://example.com" alt="Hello, World!" title="A Title" />
  ```
</details>

<h3 id="headings"><div align="right"><a href="#elements">🔝</a></div>Headings</h3>

#### H1
_`<h1>`_

```tsx
const string = <h1>Hello, World!</h1>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  # Hello, World!
  ```
</details>

```tsx
const string = <h1 html>Hello, World!</h1>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  <h1>Hello, World!</h1>
  ```
</details>

#### H2
_`<h2>`_

```tsx
const string = <h2>Hello, World!</h2>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  ## Hello, World!
  ```
</details>

```tsx
const string = <h2 html>Hello, World!</h2>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  <h2>Hello, World!</h2>
  ```
</details>

#### H3
_`<h3>`_

```tsx
const string = <h3>Hello, World!</h3>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  ### Hello, World!
  ```
</details>

```tsx
const string = <h3 html>Hello, World!</h3>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  <h3>Hello, World!</h3>
  ```
</details>

#### H4
_`<h4>`_

```tsx
const string = <h4>Hello, World!</h4>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  #### Hello, World!
  ```
</details>

```tsx
const string = <h4 html>Hello, World!</h4>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  <h4>Hello, World!</h4>
  ```
</details>

#### H5
_`<h5>`_

```tsx
const string = <h5>Hello, World!</h5>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  ##### Hello, World!
  ```
</details>

```tsx
const string = <h5 html>Hello, World!</h5>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  <h5>Hello, World!</h5>
  ```
</details>

#### H6
_`<h6>`_

```tsx
const string = <h6>Hello, World!</h6>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  ###### Hello, World!
  ```
</details>

```tsx
const string = <h6 html>Hello, World!</h6>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  <h6>Hello, World!</h6>
  ```
</details>

<h3 id="lists"><div align="right"><a href="#elements">🔝</a></div>Lists</h3>

#### Ordered List
_`<ol>`_

<details>
  <summary><h5>Props</h5></summary>

---
- **onlyMarkIfList**
```tsx
/**
  * Only include markers if the list contains more than one item.
  * @default false
  */
onlyMarkIfList?: boolean;
```
---
</details>

```tsx
const string = (
  <ol>
    <text>Hello</text>
    <text>World</text>
  </ol>
);
```

<details open>
  <summary><i>Result</i></summary>

  ```
  1. Hello
  2. World
  ```
</details>

#### Unordered List

<details>
  <summary><h5>Props</h5></summary>

---
- **onlyMarkIfList**
```tsx
/**
  * Only include markers if the list contains more than one item.
  * @default false
  */
onlyMarkIfList?: boolean;
```
---
</details>

```tsx
const string = (
  <ul>
    <text>Hello</text>
    <text>World</text>
  </ul>
);
```

<details open>
  <summary><i>Result</i></summary>

  ```
  - Hello
  - World
  ```
</details>

#### Checkbox list
_`<cl>`_

<details>
  <summary><h5>Props</h5></summary>

---
- **items**
```tsx
items: {
  /**
   * @default false
   */
  checked?: boolean;
  /**
   * Content to render after the checkbox.
   */
  content: Prxmpt.Children;
}[];
```
---
</details>

```tsx
const string = (
  <cl
    items={[
      { content: "Hello" },
      { content: "World", checked: true },
    ]}
  />
);
```

<details open>
  <summary><i>Result</i></summary>

  ```
  - [ ] Hello
  - [x] World
  ```
</details>

#### Definition List
_`<dl>`_

<details>
  <summary><h5>Props</h5></summary>

---
- **items**
```tsx
/**
 * The items to render.
 */
items: Record<string, Prxmpt.Children>;
```
- **termCase**
```tsx
/**
 * Casing to apply to each key.
 * @default undefined
 */
termCase?: "upper" | "lower" | "capital" | "title";
```
- **space**
```tsx
/**
 * Number of blank lined to insert between each item.
 * @default 0
 */
space?: number;
```
- **wrap**
```tsx
/**
 * Override the default behavior for wrapping values.
 * @default undefined
 */
wrap?: boolean;
```
---
</details>

```tsx
const string = (
  <dl
    items={{
      Hello: "World",
      Foo: "Bar"
    }}
  />
);
```

<details open>
  <summary><i>Result</i></summary>

  ```
  Hello: World
  Foo: Bar
  ```
</details>

<h3 id="styling"><div align="right"><a href="#elements">🔝</a></div>Styling</h3>

#### Italic

<details>
  <summary><h5>Props</h5></summary>

---
- **char**
```tsx
/**
 * @default "_"
 */
char?: "*" | "_";
```
---
</details>

```tsx
const string = <i>Hello, World!</i>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  _Hello, World!_
  ```
</details>

```tsx
const string = <i html>Hello, World!</i>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  <i>Hello, World!</i>
  ```
</details>

#### Bold

<details>
  <summary><h5>Props</h5></summary>

---
- **char**
```tsx
/**
 * @default "*"
 */
char?: "*" | "_";
```
---
</details>

```tsx
const string = <b>Hello, World!</b>;
```
<details open>
  <summary><i>Result</i></summary>

  ```
  **Hello, World!**
  ```
</details>

```tsx
const string = <b html>Hello, World!</b>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  <b>Hello, World!</b>
  ```
</details>

#### Strikethrough

```tsx
const string = <s>Hello, World!</s>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  ~~Hello, World!~~
  ```
</details>

```tsx
const string = <s html>Hello, World!</s>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  <s>Hello, World!</s>
  ```
</details>

#### Code

```tsx
const string = <code>Hello, World!</code>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  `Hello, World!`
  ```
</details>

```tsx
const string = <code html>Hello, World!</code>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  <code>Hello, World!</code>
  ```
</details>

<h3 id="miscellaneous-html"><div align="right"><a href="#elements">🔝</a></div>Miscellaneous</h3>

#### Span

Span simply renders its children, unless the `html` prop is provided.

```tsx
const string = <span>Hello, World!</span>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  Hello, World!
  ```
</details>

```tsx
const string = <span html>Hello, World!</span>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  <span>Hello, World!</span>
  ```
</details>

#### Paragraph

When rendered as text, the paragraph tag adds a newline at the end of the element:

```tsx
const string = <p>Hello, World!</p>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  Hello, World!

  ```
</details>

```tsx
const string = <p html>Hello, World!</p>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  <p>Hello, World!</p>
  ```
</details>

#### Blockquote

```tsx
const string = (
  <blockquote join={"\n"}>
    <text>Hello</text>
    <empty />
    <text>World!</text>
  </blockquote>
);
```

<details open>
  <summary><i>Result</i></summary>

  ```
  > Hello
  >
  > World!
  ```
</details>

```tsx
const string = <blockquote html>Hello, World!</blockquote>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  <blockquote>Hello, World!</blockquote>
  ```
</details>

#### Quote

The quote element returns a triple quote if the children contain a newline, otherwise it returns a single quote.

<details>
  <summary><h5>Props</h5></summary>

---
- **type**
```tsx
/**
 * @default "double"
 */
type?: "single" | "double" | "backtick";
```
---
</details>

```tsx
const string = <q>Hello, World!</q>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  "Hello, World!"
  ```
</details>

```tsx
const string = <q>Hello<br />World</q>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  """
  Hello, World!
  """
  ```
</details>


#### Pre

```tsx
const string = <pre>Hello, World!</pre>;
```

<details open>
  <summary><i>Result</i></summary>
  <pre>```<br />Hello, World!<br />```</pre>
</details>

```tsx
const string = <pre html>Hello, World!</pre>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  <pre>Hello, World!</pre>
  ```
</details>

<h2 id="serialization-elements"><div align="right"><a href="#elements">🔝</a></div>Serialization Elements</h2>

<h3 id="primitives"><div align="right"><a href="#elements">🔝</a></div>Primitives</h3>

#### Num

<details>
  <summary><h5>Props</h5></summary>

---
- **add**
```tsx
/**
 * Add a value to the number.
 */
add?: number;
```
- **min**
```tsx
/**
 * Minimum value. Applied after `add`.
 */
min?: number;
```
- **max**
```tsx
/**
 * Maximum value. Applied after `add`.
 */
max?: number;
```
- **fixed**
```tsx
/**
 * Number of decimal places.
 */
fixed?: number;
```
---
</details>

```tsx
const string = <num fixed={2}>1</num>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  1.00
  ```
</details>

```tsx
const string = <num min={1}>0</num>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  1
  ```
</details>

<h3 id="dates"><div align="right"><a href="#elements">🔝</a></div>Dates</h3>

#### Datetime

<details>
  <summary><h5>Props</h5></summary>

---
- **value**
```tsx
/**
 * @default Date.now()
 */
value?: Date | string | number;
```
- **dateFormat**
```tsx
/**
 * @default "short"
 */
dateFormat?: "long" | "medium" | "short" | "full";
```
- **timeFormat**
```tsx
/**
 * @default "short"
 */
timeFormat?: "long" | "medium" | "short" | "full";
```
---
</details>

```tsx
const string = <datetime />;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  September 23, 2023 at 5:17 PM
  ```
</details>

#### Date

<details>
  <summary><h5>Props</h5></summary>

---
- **value**
```tsx
/**
 * @default Date.now()
 */
value?: Date | string | number;
```
- **format**
```tsx
/**
 * @default "short"
 */
format?: "long" | "medium" | "short" | "full";
```
---
</details>

```tsx
const string = <date />;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  September 23, 2023
  ```
</details>

#### Time

<details>
  <summary><h5>Props</h5></summary>

---
- **value**
```tsx
/**
 * @default Date.now()
 */
value?: Date | string | number;
```
- **format**
```tsx
/**
 * @default "short"
 */
format?: "long" | "medium" | "short" | "full";
```
---
</details>

```tsx
const string = <time />;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  5:17 PM
  ```
</details>

#### Year

<details>
  <summary><h5>Props</h5></summary>

---
- **value**
```tsx
/**
 * @default Date.now()
 */
value?: Date | string | number;
```
---
</details>

```tsx
const string = <year />
```

<details open>
  <summary><i>Result</i></summary>

  ```
  2023
  ```
</details>

#### Month

<details>
  <summary><h5>Props</h5></summary>

---
- **value**
```tsx
/**
 * @default Date.now()
 */
value?: Date | string | number;
```
- **format**
```tsx
/**
 * @default "number"
 */
format?: "number" | "long" | "short" | "narrow";
```
---
</details>

```tsx
const string = <month />
```
<details open>
  <summary><i>Result</i></summary>

  ```
  8
  ```
</details>

```tsx
const string = <month format="long" />
```
<details open>
  <summary><i>Result</i></summary>

  ```
  September
  ```
</details>

```tsx
const string = <month format="short" />
```

<details open>
  <summary><i>Result</i></summary>

  ```
  Sep
  ```
</details>

```tsx
const string = <month format="narrow" />
```

<details open>
  <summary><i>Result</i></summary>

  ```
  S
  ```
</details>

#### Day

<details>
  <summary><h5>Props</h5></summary>

---
- **value**
```tsx
/**
 * @default Date.now()
 */
value?: Date | string | number;
```
- **format**
```tsx
/**
 * @default "number"
 */
format?: "number" | "long" | "short" | "narrow";
```
---
</details>

```tsx
const string = <day />
```

<details open>
  <summary><i>Result</i></summary>

  ```
  6
  ```
</details>

```tsx
const string = <day format="long" />
```

<details open>
  <summary><i>Result</i></summary>

  ```
  Saturday
  ```
</details>

```tsx
const string = <day format="short" />
```

<details open>
  <summary><i>Result</i></summary>

  ```
  Sat
  ```
</details>

```tsx
const string = <day format="narrow" />
```

<details open>
  <summary><i>Result</i></summary>

  ```
  S
  ```
</details>

#### Hour

<details>
  <summary><h5>Props</h5></summary>

---
- **value**
```tsx
/**
 * @default Date.now()
 */
value?: Date | string | number;
```
- **cycle**
```tsx
/**
 * @default "12"
 */
cycle?: "12" | "24";
```
---
</details>

```tsx
const string = <hour />
```

<details open>
  <summary><i>Result</i></summary>

  ```
  5
  ```
</details>

```tsx
const string = <hour cycle="24">
```

<details open>
  <summary><i>Result</i></summary>

  ```
  17
  ```
</details>

#### Minute

<details>
  <summary><h5>Props</h5></summary>

---
- **value**
```tsx
/**
 * @default Date.now()
 */
value?: Date | string | number;
```
---
</details>

```tsx
const string = <minute />
```

<details open>
  <summary><i>Result</i></summary>

  ```
  42
  ```
</details>

#### Second

<details>
  <summary><h5>Props</h5></summary>

---
- **value**
```tsx
/**
 * @default Date.now()
 */
value?: Date | string | number;
```
---
</details>

```tsx
const string = <second />
```

<details open>
  <summary><i>Result</i></summary>

  ```
  42
  ```
</details>

#### Millisecond

<details>
  <summary><h5>Props</h5></summary>

---
- **value**
```tsx
/**
 * @default Date.now()
 */
value?: Date | string | number;
```
---
</details>

```tsx
const string = <millisecond />
```

<details open>
  <summary><i>Result</i></summary>

  ```
  999
  ```
</details>

#### Duration

<details>
  <summary><h5>Props</h5></summary>

---
- **value**
```tsx
/**
 * The end of the duration.
 * @default Date.now()
 */
value?: Date | string | number;
```
- **since**
```tsx
/**
 * The start of the duration.
 */
since: Date | string | number;
```
---
</details>

```tsx
const string = <duration since={"September 2021"} />
```

<details open>
  <summary><i>Result</i></summary>

  ```
  2 years
  ```
</details>

<h3 id="objects"><div align="right"><a href="#elements">🔝</a></div>Objects</h3>

#### JSON

<details>
  <summary><h5>Props</h5></summary>

---
- **data**
```tsx
/**
 * The data to stringify.
 */
data: NestedOptionalJSONValue;
```
- **pretty**
```tsx
/**
 * @default false
 */
pretty?: boolean;
```
---
</details>

```tsx
const string = <json data={{ Hello: "World" }} pretty />;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  {
    "Hello": "World"
  }
  ```
</details>

#### YAML

<details>
  <summary><h5>Props</h5></summary>

---
- **data**
```tsx
/**
 * The data to stringify.
 */
data: NestedOptionalJSONValue;
```
- **noStartMarker**
```tsx
/**
 * @default false
 */
noStartMarker?: boolean;
```
- **sequenceIndent**
```tsx
/**
 * @default false
 */
sequenceIndent?: boolean;
```
---
</details>

```tsx
const string = <yaml data={{ hello: "world" }} />;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  ---
  hello: world
  ```
</details>

<h2 id="utility-elements"><div align="right"><a href="#elements">🔝</a></div>Utility Elements</h2>

<h3 id="casing"><div align="right"><a href="#elements">🔝</a></div>Casing</h3>

#### Upper

_`<upper>`_

```tsx
const string = <upper>Hello, World!</upper>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  HELLO, WORLD!
  ```
</details>

#### Lower

_`<lower>`_

```tsx
const string = <lower>Hello, World!</lower>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  hello, world!
  ```
</details>

#### Capital

_`<capital>`_

```tsx
const string = <capital>hello, world!</capital>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  Hello, world!
  ```
</details>

#### Title

_`<title>`_

```tsx
const string = <title>hello, world!</title>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  Hello, World!
  ```
</details>

<h3 id="affixes"><div align="right"><a href="#elements">🔝</a></div>Affixes</h3>

#### Trim

```tsx
// "Hello, World!"
const string = <trim>Hello, World! </trim>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  Hello, World!
  ```
</details>

#### Frame

<details>
  <summary><h5>Props</h5></summary>

---
- **with**
```tsx
/**
 * A value to apply to both `prefix` and `suffix`.
 */
with: Prxmpt.Children;
```
---
</details>

```tsx
const string = <frame with="--">Hello, World! </frame>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  -- Hello, World! --
  ```
</details>

<h3 id="joins"><div align="right"><a href="#elements">🔝</a></div>Joins</h3>

#### Lined
_`<lined>`_

```tsx
const string = (
  <lined>
    <text>Hello</text>
    <text>World!</text>
  </lined>
);
```

<details open>
  <summary><i>Result</i></summary>

  ```
  Hello
  World!
  ```
</details>

#### Spaced
_`<spaced>`_

```tsx
const string = (
  <spaced>
    <text>Hello</text>
    <text>World!</text>
  </spaced>
);
```

<details open>
  <summary><i>Result</i></summary>

  ```
  Hello World!
  ```
</details>

#### Comma-Separated List
_`<csl>`_

<details>
  <summary><h5>Props</h5></summary>

---
- **noSpace**
```tsx
/**
 * @default false
 */
noSpace?: boolean;
```
---
</details>

```tsx
const string = (
  <csl>
    <text>hello</text>
    <text>world</text>
  </csl>
);
```

<details open>
  <summary><i>Result</i></summary>

  ```
  hello, world
  ```
</details>

```tsx
const string = (
  <csl noSpace>
    <text>hello</text>
    <text>world</text>
  </csl>
);
```

<details open>
  <summary><i>Result</i></summary>

  ```
  hello,world
  ```
</details>

#### Union
_`<union>`_

<details>
  <summary><h5>Props</h5></summary>

---
- **noSpace**
```tsx
/**
 * @default false
 */
noSpace?: boolean;
```
---
</details>

```tsx
const string = (
  <union>
    <text>hello</text>
    <text>world</text>
  </union>
);
```

<details open>
  <summary><i>Result</i></summary>

  ```
  hello | world
  ```
</details>

```tsx
const string = (
  <union noSpace>
    <text>hello</text>
    <text>world</text>
  </union>
);
```

<details open>
  <summary><i>Result</i></summary>

  ```
  hello|world
  ```
</details>


#### Sectioned

<details>
  <summary><h5>Props</h5></summary>

---
- **divider**
```tsx
/**
 * @default "---"
 */
divider?: string;
```
- **frame**
```tsx
/**
 * Whether add dividers before and after the body.
 * @default false
 */
frame?: boolean;
```
---
</details>

```tsx
const string = (
  <sectioned>
    <text>Hello</text>
    <text>World!</text>
  </sectioned>
);
```

<details open>
  <summary><i>Result</i></summary>

  ```
  Hello
  ---
  World!
  ```
</details>

<h3 id="sets"><div align="right"><a href="#elements">🔝</a></div>Sets</h3>

Sets automatically adjust the separators used based on the number of children provided.

#### And
_`<and>`_

```tsx
const string = (
  <and>
    <text>a</text>
  </and>
);
```

<details open>
  <summary><i>Result</i></summary>

  ```
  a
  ```
</details>

```tsx
const string = (
  <and>
    <text>a</text>
    <text>b</text>
  </and>
);
```

<details open>
  <summary><i>Result</i></summary>

  ```
  a and b
  ```
</details>

```tsx
const string = (
  <and>
    <text>a</text>
    <text>b</text>
    <text>c</text>
  </and>
);
```

<details open>
  <summary><i>Result</i></summary>

  ```
  a, b, and c
  ```
</details>

#### And / Or
_`<andor>`_

```tsx
const string = (
  <andor>
    <text>a</text>
    <text>b</text>
    <text>c</text>
  </andor>
);
```

<details open>
  <summary><i>Result</i></summary>

  ```
  a, b, and/or c
  ```
</details>

#### Or
_`<or>`_

```tsx
const string = (
  <or>
    <text>a</text>
    <text>b</text>
    <text>c</text>
  </or>
);
```

<details open>
  <summary><i>Result</i></summary>

  ```
  a, b, or c
  ```
</details>

#### Nor
_`<nor>`_

```tsx
const string = (
  <nor>
    <text>a</text>
    <text>b</text>
    <text>c</text>
  </nor>
);
```

<details open>
  <summary><i>Result</i></summary>

  ```
  a, b, nor c
  ```
</details>

<h3 id="limiters"><div align="right"><a href="#elements">🔝</a></div>Limiters</h3>

#### Cap

The `<cap>` element allows you to limit the length of a string by providing a `splitter` function and a `max` number of "units" to allow.

<details>
  <summary><h5>Props</h5></summary>

---
- **max**
```tsx
/**
 * The maximum "units" to include.
 * @default Infinity
 */
max?: number;
```
- **splitter**
```tsx
/**
 * A function that splits a string into "units".
 * @default "chars"
 */
splitter?: "paragraphs" | "lines" | "spaces" | "words" | "commas" | "chars" | (string: string) => string[];
```
- **ellipsis**
```tsx
/**
 * A string to append to the end if the maximum is reached.
 * This string is included in the maximum count.
 * If `true`, "..." is used.
 * @default undefined
 */
ellipsis?: string | true;
```
---
</details>

```tsx
const string = <cap max={5}>Hello, World!</cap>;
```

<details open>
  <summary><i>Result</i></summary>

  ```
  Hello
  ```
</details>

#### Priority

The `<priority>` element is like a width-based [CSS media query](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) for strings.

Instead of providing a list of children, `<priority>` expects a list of items, each of which can have a priority. Higher priorities are rendered first (like `z-index` in CSS), and each item has a default priority of 0. Several strategies are provided as well for fine-tuning how items are prioritiezed.

Priority elements can also be nested, which enable extremely fine-grained control over which content is rendered. Several examples are provided in the [priority example directory](https://github.com/AutosseyAI/prxmpt/tree/main/examples/priority).

<details>
  <summary><h5>Props</h5></summary>

---
- **max**
```tsx
/**
 * The maximum "units" to include.
 * @default Infinity
 */
max?: number;
```
- **counter**
```tsx
/**
 * A function that returns the number of "units" in a string.
 * @default (string: string) => string.length
 */
counter?: (string: string) => number;
```
- **items**
```tsx
/**
 * The items to render, in order of priority.
 */
items: (Prxmpt.Children | {
  /**
   * The priority of this item. Higher priority items are included first.
   * @default 0
   */
  p?: number;
  /**
   * The content to render.
   */
  content: ((capacity: number) => Prxmpt.Children) | Prxmpt.Children;
})[];
```
- **strategy**

> The strategy to use when prioritizing items.<br />If multiple strategies are provided, subsequent strategies are tried in order to break ties.

`"priority"`:

_Prioritize items by the provided priority.<br />Once the maximum is reached, continue to check if remaining items fit._

`"order-asc"`:

_Prioritize items by the order provided.<br />Once the maximum is reached, continue to check if remaining items fit._

`"order-desc"`:

_Prioritize items in reverse of the order provided.<br />Once the maximum is reached, continue to check if remaining items fit._

`"size-asc"`:

_Prioritize items in size order, smallest to largest.<br />Use if you want to include as many items as possible._

`"size-desc"`:

_Prioritized items in size order, largest to smallest.<br />Use if you want to include as few items as possible._
```tsx
/**
 * @default ["priority", "order-asc"]
 */
strategy?: PriorityStrategy | PriorityStrategy[];
```
- **noSkip**
```tsx
/**
  * If `true`, do not skip items after the maximum is reached.
  * @default false
  */
noSkip?: boolean;
```
---
</details>

```tsx
const string = (
  <priority
    max={15}
    join={"\n"}
    items={[{
      p: 2
      content: "Test 1"
    }, {
      // p: 0 is the default
      content: "This is a a super long string that won't fit."
    }, {
      p: 1,
      content: "Test 3"
    }]} />
);
```

<details open>
  <summary><i>Result</i></summary>

  ```
  Test 1
  Test 3
  ```
</details>

<h2 id="exports"><div align="right"><a href="#elements">🔝</a></div>Exports</h2>

<h3 id="rendering"><div align="right"><a href="#elements">🔝</a></div>Rendering</h3>

#### `createElement`

```tsx
import { createElement } from "@autossey/prxmpt";

const string = createElement("text", {}, "Hello, World!");
```

<details open>
  <summary><i>Result</i></summary>

  ```
  Hello, World!
  ```
</details>

#### `render`

```tsx
import { render } from "@autossey/prxmpt";

const string = render(
  <text>Hello, World!</text>
);
```

<details open>
  <summary><i>Result</i></summary>

  ```
  Hello, World!
  ```
</details>

<h3 id="children"><div align="right"><a href="#elements">🔝</a></div>Children</h3>

#### `hasChildren`

Returns `true` if the provided props object has a `children` property.

```tsx
import { hasChildren } from "@autossey/prxmpt";

if(hasChildren({ children: "Hello, World!" })) {
  // ...
}
```

#### `isChildren`

Returns `true` if the provided value is a valid Prxmpt element child.

```tsx
import { isChildren } from "@autossey/prxmpt";

if(isChildren("Hello, World!")) {
  // ...
}
```

<h3 id="splitters"><div align="right"><a href="#elements">🔝</a></div>Splitters</h3>

#### `split`

Split `children` on `separator`. If `separator` is `undefined`, no splitting occurs.

```tsx
import { split } from "@autossey/prxmpt";

const children = (
  <lined>
    <text>Hello</text>
    <text>World!</text>
  </lined>
);

// ["Hello", "World!"]

const strings = split(children, "\n");
```

#### `paragraphs`

Split `children` on `"\n\n"`.

#### `lines`

Split `children` on `"\n"`.

#### `spaces`

Split `children` on whitespace.

#### `words`

Split `children` on word boundaries.

#### `commas`

Split `children` on `","`.

#### `characters`

Split `children` on `""`.

<br />

<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/clee?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/clee.svg"></a></h2>

- [as-typed-array](https://www.npmjs.com/package/as-typed-array): Make any value an array
- [types-json](https://www.npmjs.com/package/types-json): Type checking for JSON objects
- [yaml](https://www.npmjs.com/package/yaml): JavaScript parser and stringifier for YAML

<h3 id="dev-dependencies">Dev Dependencies</h3>

- [@autossey/eslint-config](https://www.npmjs.com/package/@autosoft/eslint-config): A base for projects that use ESLint.
- [@autosoft/tsconfig](https://www.npmjs.com/package/@autosoft/tsconfig): A collection of base TSConfigs for various types of projects.
- [@jest/globals](https://www.npmjs.com/package/@jest/globals)
- [@swc/core](https://www.npmjs.com/package/@swc/core): Super-fast alternative for babel
- [@swc/jest](https://www.npmjs.com/package/@swc/jest): Swc integration for jest
- [eslint](https://www.npmjs.com/package/eslint): An AST-based pattern checker for JavaScript.
- [jest](https://www.npmjs.com/package/jest): Delightful JavaScript Testing.

<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/@autossey/prxmpt.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT) - _The MIT License_

