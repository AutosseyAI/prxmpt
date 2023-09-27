<div id="top" align="center">
  <h1 id="prxmpt">𝕡𝕣𝕩𝕞𝕡𝕥</h1>
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

Prxmpt is _"Tailwind for Prompt Engineering"_. It provides a set of utilities for composing strings with JSX.

Prxmpt is designed for shaping the input to LLMs, including powerful elements such as [priority](#priority) for managing tokens. However, Prxmpt also includes both Markdown and HTML elements, making it perfect for formatting LLM outputs as well.

<h2 id="why-jsx"><div align="right"><a href="#prxmpt">🔝</a></div>Why JSX?</h2>

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
    </text>
  </lined>
);
```

Compare this to an equivalent using template literals:

```ts
const text = `This is the first line.${hideLine2 ? "\nHere's a second line." : ""}\n\nThen, we'll add a third line here.`;
```

<h2 id="installation"><div align="right"><a href="#prxmpt">🔝</a></div>Installation</h2>

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

<h2 id="getting-started"><div align="right"><a href="#prxmpt">🔝</a></div>Getting Started</h2>

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

<h2 id="examples"><div align="right"><a href="#prxmpt">🔝</a></div>Examples</h2>

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

For examples of how to use specific elements, the [tests](https://github.com/AutosseyAI/prxmpt/tree/main/test/) showcase more usecases.

<h2 id="elements"><div align="right"><a href="#prxmpt">🔝</a></div>Elements</h2>

- [Text Elements](#text-elements)
    - [`<text>`](#text)
  - [Brackets](#brackets)
    - [`<parens>` (Parenthesis)](#parens)
    - [`<square>` (Square Bracket)](#square)
    - [`<curly>` (Square Bracket)](#curly)
    - [`<angle>` (Angle Bracket)](#angle)
  - [Quotes](#quotes)
    - [`<sq>` (Single Quote)](#sq)
    - [`<dq>` (Double Quote)](#dq)
    - [`<bq>` (Back Quote)](#bt)
    - [`<tsq>` (Triple Single Quote)](#tsq)
    - [`<tdq>` (Triple Double Quote)](#tdq)
    - [`<tbq>` (Triple Back Quote)](#tbt)
  - [Comments](#comments)
    - [`<comment type="slash">`](#comment-slash)
    - [`<comment type="hash">`](#comment-hash)
    - [`<comment type="dash">`](#comment-hash)
    - [`<comment type="html">`](#comment-hash)
  - [Sentences](#sentences)
    - [`<state>`](#state)
    - [`<ask>`](#ask)
    - [`<exclaim>`](#exclaim)
  - [Characters](#characters)
    - [`<empty>`](#empty)
    - [`<space>`](#space)
    - [`<tab>`](#tab)
    - [`<ellipsis>`](#ellipsis)
    - [`<na>` (n/a)](#na)
  - [Miscellaneous](#miscellaneous-text)
    - [`<kv>` (Key-Value Pair)](#kv)
- [HTML Elements](#html-elements)
    - [`<tag>`](#tag)
  - [Breaks](#breaks)
    - [`<br>` (Break)](#br)
    - [`<hr>` (Horizontal Rule)](#hr)
  - [Linking](#linking)
    - [`<a>` (Anchor)](#a)
    - [`<img>` (Image)](#img)
  - [Headings](#headings)
    - [`<h1>`](#h1)
    - [`<h2>`](#h2)
    - [`<h3>`](#h3)
    - [`<h4>`](#h4)
    - [`<h5>`](#h5)
    - [`<h6>`](#h6) 
  - [Lists](#lists)
    - [`<ul>` (Unordered List)](#ul)
    - [`<ol>` (Ordered List)](#ol)
    - [`<dl>` (Definition List)](#dl)
    - [`<cl>` (Checkbox List)](#cl)
  - [Styling](#styling)
    - [`<i>` (Italic)](#i)
    - [`<b>` (Bold)](#b)
    - [`<s>` (Strikethrough)](#s)
    - [`<code>` (Code)](#code)
  - [Miscellaneous](#miscellaneous-html)
    - [`<span>`](#span)
    - [`<p>`](#p)
    - [`<blockquote>`](#blockquote)
    - [`<q>`](#q)
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

<h2 id="exports"><div align="right"><a href="#prxmpt">🔝</a></div>Exports</h2>

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

Prxmpt elements operate on children, which resolve as an array of strings.

The `<text>` element is the base element in Prxmpt. It returns its children as a string:


```tsx
// "Hello, World!"

const string = <text>Hello, World!</text>;
```

##### Props

Since `<text>` is the base of most other elements, these props can be used with most other elements.

**hide**

```tsx
/**
 * Prevent the Element from being rendered.
 * @default false
 */
hide?: boolean;
```

**filter**
```
/**
 * A function to filter children.
 * @default (node) => true
 */
filter?: (node: Prxmpt.Children, index: number, arr: Prxmpt.Children[]) => boolean;
```

**map**
```
/**
 * A function that maps each child to a new Element.
 * @default (node) => Prxmpt.render(node)
 */
map?: (node: Prxmpt.Children, index: number, arr: Prxmpt.Children[]) => Prxmpt.JSX.Element;
```

**reverse**
```
/**
 * Reverse the order of the children.
 */
reverse?: boolean;
```

**join**
```
/**
 * An Element to insert between each child.
 * @default ""
 */
join?: Prxmpt.Children;
```

**repeat**
```
/**
 * @default 1
 */
repeat?: number;
```

**trim**
```
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

**casing**
```
/**
 * Convert the Element to a given casing.
 * @default undefined
 */
casing?: Casing;
```

**prefix**
```
/**
 * An Element to prepend to the element.
 * @default ""
 */
prefix?: Prxmpt.Children;
```

**suffix**
```
/**
 * An Element to append to the element.
 * @default ""
 */
suffix?: Prxmpt.Children;
```

**indent**
```
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

**block**
```
/**
 * Append a newline to the end of the Element.
 * @default false
 */
block?: boolean;
```

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
// "Line 1\n\nLine 3"

const string = (
  <lined>
    <text>Line 1</text>
    <empty />
    <text> Line 3</text>
  </lined>
);
```

#### Space
_`<space>`_

The `<space>` element returns a space:

```tsx
// " "

const string = <space />;
```

#### Tab
_`<tab>`_

##### Props

**width**
```
/**
  * Number of characters per tab
  * @default 1 if `literal` is true, otherwise 2
  */
width?: number;
```
**literal**
```
/**
  * @default false
  */
literal?: boolean;
```

##### Usage

```tsx
// "    "

const string = <tab width={4} />
```

#### Ellipsis
_`<ellipsis>`_

```tsx
// "..."

const string = <ellipsis />;
```

#### NA
_`<na>`_

```tsx
// "n/a"

const string = <na />;
```

<h3 id="brackets"><div align="right"><a href="#elements">🔝</a></div>Brackets</h3>

#### Parenthesis
_`<parens>`_

```tsx
// "(Hello, World!)"

const string = <parens>Hello, World!</parens>;
```

#### Square Bracket
_`<square>`_

```tsx
// "[Hello, World!]"

const string = <square>Hello, World!</square>;
```

#### Curly Bracket
_`<curly>`_

```tsx
// "{Hello, World!}"

const string = <curly>Hello, World!</curly>;
```

#### Angle Bracket
_`<angle>`_

```tsx
// "<Hello, World!>"

const string = <angle>Hello, World!</angle>;
```

<h3 id="quotes"><div align="right"><a href="#elements">🔝</a></div>Quotes</h3>

#### Single Quote
_`<sq>`_

```tsx
// "'Hello, World!'"

const string = <sq>Hello, World!</sq>;
```

#### Double Quote
_`<dq>`_

```tsx
// '"Hello, World!"'

const string = <dq>Hello, World!</dq>;
```

#### Back Quote
_`<bq>`_

```tsx
// "`Hello, World!`"

const string = <bq>Hello, World!</bq>;
```

#### Triple Single Quote
_`<tsq>`_

```tsx
// "'''\nHello, World!\n'''"

const string = <tsq>Hello, World!</tsq>;
```

#### Triple Double Quote
_`<tdq>`_

```tsx
// '"""\nHello, World!\n"""'

const string = <tdq>Hello, World!</tdq>;
```

#### Triple Back Quote
_`<tbq>`_

```tsx
// "```\nHello, World!\n```"

const tbq = <tbq>Hello, World!</tbq>;
```

<h3 id="comments"><div align="right"><a href="#elementst">🔝</a></div>Comments</h3>

#### Slash Comment
_`<comment type="slash">`_

```tsx
// "// Hello, World!"

const slash = <comment type="slash">Hello, World!</comment>;
```

#### Hash Comment
_`<comment type="hash">`_

```tsx
// "# Hello, World!"

const hash = <comment type="hash">Hello, World!</comment>;
```

#### Dash Comment
_`<comment type="dash">`_

```tsx
// "-- Hello, World!"

const dash = <comment type="dash">Hello, World!</comment>;
```

#### HTML Comment
_`<comment type="html">`_

```tsx
// "<!-- Hello, World! -->"

const html = <comment type="html">Hello, World!</comment>;
```

<h3 id="sentences"><div align="right"><a href="#elements">🔝</a></div>Sentences</h3>

#### State
_`<state>`_

```tsx
// "Hello, World."

const state = <state>Hello, World!</state>;
```

#### Ask
_`<ask>`_

```tsx
// "Hello, World?"

const ask = <ask>Hello, World!</ask>;
```

#### Exclaim
_`<exclaim>`_

```tsx
// "Hello, World!"

const exclaim = <exclaim>Hello, World!</exclaim>;
```

<h3 id="miscellaneous-text"><div align="right"><a href="#elements">🔝</a></div>Miscellaneous</h3>

#### Key-Value Pair
_`<kv>`_

##### Props

**key**
```tsx
/**
  * A key to render.
  */
key: Prxmpt.Children;
```

**keyCase**
```tsx
/**
  * Case to apply to the key.
  * @default undefined
  */
keyCase?: "upper" | "lower" | "capital" | "title";
```

**wrap**
```tsx
/**
 * Override the default behavior for wrapping the value.
 * @default undefined
 */
wrap?: boolean;
```

**noSpace**
```tsx
/**
 * If true, do not add a space between the key and value.
 * Only applies when not wrapping.
 * @default false
 */
noSpace?: boolean;
```

##### Usage

```tsx
// "Hello: World"

const kv = <kv key="Hello">World</kv>;
```

```tsx
// "Hello:\nWorld1\nWorld2\nWorld3"

const worlds = (
  <lined>
    <text>World1</text>
    <text>World2</text>
    <text>World3</text>
  </lined>
);

const kv = <kv key="Hello">{worlds}</kv>;
```

<h2 id="html-elements"><div align="right"><a href="#elements">🔝</a></div>HTML Elements</h2>

HTML elements are built on top of the `<tag>` element. Each html element has a boolean `html` prop that is set to false by default. When `html` is true, the element is rendered as HTML. Otherwise, the element is rendered as a Markdown equivalent.

Additionally, custom attributes can be set using the `attributes` prop.

#### Tag
_`<tag>`_

##### Props

**name**
```tsx
/**
 * Name of the tag.
 */
name: string;
```
**noIndent**
```tsx
/**
 * @default false
 */
noIndent?: boolean;
```
**wrap**
```tsx
/**
 * Defaults to true if the content contains a newline.
 */
wrap?: boolean;
```

##### Usage

```tsx
// "<mytag>Hello, World!</mytag>"

const tag = <tag name="mytag">Hello, World!</tag>;
```

If no children are provided, the tag is rendered as a self-closing tag:

```tsx
// "<mytag />"

const tag = <tag name="mytag" />;
```

<h3 id="breaks"><div align="right"><a href="#elements">🔝</a></div>Breaks</h3>

#### Line Break
_`<br />`_

```tsx
// "\n"

const br = <br />;

// "<br />"

const br = <br html />;
```

#### Horizontal Rule
_`<hr />`_

##### Props

**width**
```tsx
/**
 * @default 3
 */
width?: number;
```
**char**
```tsx
/**
 * @default "-"
 */
char?: "-" | "_" | "=" | "*";
```

##### Usage

```tsx
// "---"

const hr = <hr />;

// "<hr />"

const hr = <hr />;
```

<h3 id="linking"><div align="right"><a href="#elements">🔝</a></div>Linking</h3>

#### Anchor
_`<a>`_

##### Props

**href**

```tsx
/**
 * The URL of the link.
 */
href: string;
```
**title**
```tsx
/**
 * A title for the link.
 */
title?: string;
```

##### Usage

```tsx
// '[Hello, World!](https://example.com "A Title")'

const string = <a href="https://example.com" title="A Title">Hello, World!</a>;

// '<a href="https://example.com" title="A Title">Hello, World!</a>'

const string = <a href="https://example.com" title="A Title" html>Hello, World!</a>;
```

#### Image
_`<img>`_

##### Props

**src**
```tsx
/**
 * The URL of the image.
 */
href: string;
```
**title**
```tsx
/**
 * A title for the image.
 */
title?: string;
```

##### Usage

```tsx
// '![Hello, World!](https://example.com "A Title")'

const string = <img src="https://example.com" title="A Title">Hello, World!</img>;

// '<img src="https://example.com" alt="Hello, World!" title="A Title" />'

const string = <img src="https://example.com" title="A Title" html>Hello, World!</img>;
```

<h3 id="headings"><div align="right"><a href="#elements">🔝</a></div>Headings</h3>

#### H1
_`<h1>`_

```tsx
// "# Hello, World!"

const string = <h1>Hello, World!</h1>;

// "<h1>Hello, World!</h1>"

const string = <h1 html>Hello, World!</h1>;
```

#### H2
_`<h2>`_

```tsx
// "## Hello, World!"

const string = <h2>Hello, World!</h2>;

// "<h2>Hello, World!</h2>"

const string = <h2 html>Hello, World!</h2>;
```

#### H3
_`<h3>`_

```tsx
// "### Hello, World!"

const string = <h3>Hello, World!</h3>;

// "<h3>Hello, World!</h3>"

const string = <h3 html>Hello, World!</h3>;
```

#### H4
_`<h4>`_

```tsx
// "#### Hello, World!"

const string = <h4>Hello, World!</h4>;

// "<h4>Hello, World!</h4>"

const string = <h4 html>Hello, World!</h4>;
```

#### H5
_`<h5>`_

```tsx
// "##### Hello, World!"

const string = <h5>Hello, World!</h5>;

// "<h5>Hello, World!</h5>"

const string = <h5 html>Hello, World!</h5>;
```

#### H6
_`<h6>`_

```tsx
// "###### Hello, World!"

const string = <h6>Hello, World!</h6>;

// "<h6>Hello, World!</h6>"

const string = <h6 html>Hello, World!</h6>;
```

<h3 id="lists"><div align="right"><a href="#elements">🔝</a></div>Lists</h3>

#### Ordered List
_`<ol>`_

##### Props

**onlyMarkIfList**
```tsx
/**
  * Only include markers if the list contains more than one item.
  * @default false
  */
onlyMarkIfList?: boolean;
```

##### Usage

```tsx
// "1. Hello\n2. World"

const string = (
  <ol>
    <text>Hello</text>
    <text>World</text>
  </ol>
);
```

#### Unordered List

##### Props

**onlyMarkIfList**
```tsx
/**
  * Only include markers if the list contains more than one item.
  * @default false
  */
onlyMarkIfList?: boolean;
```

##### Usage

```tsx
// "- Hello\n- World"

const string = (
  <ul>
    <text>Hello</text>
    <text>World</text>
  </ul>
);
```

#### Checkbox list
_`<cl>`_

##### Props

**items**
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

##### Usage

```tsx
// "- [ ] Hello\n- [x] World"

const string = (
  <cl
    items={[
      { content: "Hello" },
      { content: "World", checked: true },
    ]}
  />
);
```

#### Definition List
_`<dl>`_

##### Props

**items**
```tsx
/**
 * The items to render.
 */
items: Record<string, Prxmpt.Children>;
```
**termCase**
```tsx
/**
 * Casing to apply to each key.
 * @default undefined
 */
termCase?: "upper" | "lower" | "capital" | "title";
```
**space**
```tsx
/**
 * Number of blank lined to insert between each item.
 * @default 0
 */
space?: number;
```
**wrap**
```tsx
/**
 * Override the default behavior for wrapping values.
 * @default undefined
 */
wrap?: boolean;
```

##### Usage

```tsx
// "Hello: World\nFoo: Bar"

const string = (
  <dl
    items={{
      Hello: "World",
      Foo: "Bar"
    }}
  />
);
```

<h3 id="styling"><div align="right"><a href="#elements">🔝</a></div>Styling</h3>

#### Italic

##### Props

**char**
```tsx
/**
 * @default "_"
 */
char?: "*" | "_";
```

##### Usage

```tsx
// "_Hello, World!_"

const string = <i>Hello, World!</i>;

// "<i>Hello, World!</i>"

const string = <i html>Hello, World!</i>;
```

#### Bold

##### Props

**char**
```tsx
/**
 * @default "*"
 */
char?: "*" | "_";
```

##### Usage

```tsx
// "**Hello, World!**"

const string = <b>Hello, World!</b>;

// "<b>Hello, World!</b>"

const string = <b html>Hello, World!</b>;
```

#### Strikethrough

```tsx
// "~~Hello, World!~~"

const string = <s>Hello, World!</s>;

// "<s>Hello, World!</s>"

const string = <s html>Hello, World!</s>;
```

#### Code

```tsx
// "`Hello, World!`"

const string = <code>Hello, World!</code>;

// "<code>Hello, World!</code>"

const string = <code html>Hello, World!</code>;
```

<h3 id="miscellaneous-html"><div align="right"><a href="#elements">🔝</a></div>Miscellaneous</h3>

#### Span

Span simply renders its children, unless the `html` prop is provided.

```tsx
// "Hello, World!"

const string = <span>Hello, World!</span>;

// "<span>Hello, World!</span>"

const string = <span html>Hello, World!</span>;
```

#### Paragraph

The paragraph tag adds a newline at the end of the element.

```tsx
// "Hello, World!\n"

const string = <p>Hello, World!</p>;

// "<p>Hello, World!</p>"

const string = <p html>Hello, World!</p>;
```

#### Blockquote

```tsx
// "> Hello\n>\n> World!"

const string = (
  <blockquote join={"\n"}>
    <text>Hello</text>
    <empty />
    <text>World!</text>
  </blockquote>
);

// "<blockquote>Hello, World!</blockquote>"

const string = <blockquote html>Hello, World!</blockquote>;
```

#### Quote

The quote element returns a triple quote if the children contain a newline, otherwise it returns a single quote.

##### Props

**type**
```tsx
/**
 * @default "double"
 */
type?: "single" | "double" | "backtick";
```

##### Usage

```tsx
// '"Hello, World!"'

const string = <q>Hello, World!</q>;

// '"""\nHello\nWorld\n"""'

const string = <q>Hello<br />World</q>;
```

#### Pre

```tsx
// "```\nHello, World!\n```"

const string = <pre>Hello, World!</pre>;

// "<pre>Hello, World!</pre>"

const string = <pre html>Hello, World!</pre>;
```

<h2 id="serialization-elements"><div align="right"><a href="#elements">🔝</a></div>Serialization Elements</h2>

<h3 id="primitives"><div align="right"><a href="#elements">🔝</a></div>Primitives</h3>

#### Num

##### Props

**add**
```tsx
/**
 * Add a value to the number.
 */
add?: number;
```
**min**
```tsx
/**
 * Minimum value. Applied after `add`.
 */
min?: number;
```
**max**
```tsx
/**
 * Maximum value. Applied after `add`.
 */
max?: number;
```
**fixed**
```tsx
/**
 * Number of decimal places.
 */
fixed?: number;
```

##### Usage
```tsx
// "1.00"

const string = <num fixed={2}>1</num>;

// "1"

const string = <num min={1}>0</num>;
```

<h3 id="dates"><div align="right"><a href="#elements">🔝</a></div>Dates</h3>

#### Datetime

##### Props

**value**
```tsx
/**
 * @default Date.now()
 */
value?: Date | string | number;
```
**dateFormat**
```tsx
/**
 * @default "short"
 */
dateFormat?: "long" | "medium" | "short" | "full";
```
**timeFormat**
```tsx
/**
 * @default "short"
 */
timeFormat?: "long" | "medium" | "short" | "full";
```

##### Usage
```tsx
// "September 23, 2023 at 5:17 PM"

const string = <datetime />;
```

#### Date

##### Props

**value**
```tsx
/**
 * @default Date.now()
 */
value?: Date | string | number;
```
**format**
```tsx
/**
 * @default "short"
 */
format?: "long" | "medium" | "short" | "full";
```

##### Usage
```tsx
// "September 23, 2023"

const string = <date />;
```

#### Time

##### Props

**value**
```tsx
/**
 * @default Date.now()
 */
value?: Date | string | number;
```
**format**
```tsx
/**
 * @default "short"
 */
format?: "long" | "medium" | "short" | "full";
```

##### Usage
```tsx
// "5:17 PM"

const string = <time />;
```

#### Year

##### Props

**value**
```tsx
/**
 * @default Date.now()
 */
value?: Date | string | number;
```

##### Usage

```tsx
// "2023"

const string = <year />
```

#### Month

##### Props

**value**
```tsx
/**
 * @default Date.now()
 */
value?: Date | string | number;
```
**format**
```tsx
/**
 * @default "number"
 */
format?: "number" | "long" | "short" | "narrow";
```

##### Usage

```tsx
// "8"

const string = <month />

// "September"

const string = <month format="long" />

// "Sep"

const string = <month format="short" />

// "S"

const string = <month format="narrow" />
```

#### Day

##### Props

**value**
```tsx
/**
 * @default Date.now()
 */
value?: Date | string | number;
```
**format**
```tsx
/**
 * @default "number"
 */
format?: "number" | "long" | "short" | "narrow";
```

##### Usage

```tsx
// "6"

const string = <day />

// "Saturday"

const string = <day format="long" />

// "Sat"

const string = <day format="short" />

// "S"

const string = <day format="narrow" />
```

#### Hour

##### Props
**value**
```tsx
/**
 * @default Date.now()
 */
value?: Date | string | number;
```
**cycle**
```tsx
/**
 * @default "12"
 */
cycle?: "12" | "24";
```

##### Usage

```tsx
// "5"

const string = <hour />

// "17"

const string = <hour cycle="24">
```

#### Minute

##### Props
**value**
```tsx
/**
 * @default Date.now()
 */
value?: Date | string | number;
```

##### Usage

```tsx
// "42"

const string = <minute />
```

#### Second

##### Props
**value**
```tsx
/**
 * @default Date.now()
 */
value?: Date | string | number;
```

##### Usage

```tsx
// "42"

const string = <second />
```

#### Millisecond

##### Props
**value**
```tsx
/**
 * @default Date.now()
 */
value?: Date | string | number;
```

##### Usage

```tsx
// "420"

const string = <millisecond />
```

#### Duration

##### Props
**value**
```tsx
/**
 * The end of the duration.
 * @default Date.now()
 */
value?: Date | string | number;
```
**since**
```tsx
/**
 * The start of the duration.
 */
since: Date | string | number;
```

##### Usage

```tsx
// "2 years"

const string = <duration since={"September 2021"} />
```

<h3 id="objects"><div align="right"><a href="#elements">🔝</a></div>Objects</h3>

#### JSON

##### Props

**data**
```tsx
/**
 * The data to stringify.
 */
data: NestedOptionalJSONValue;
```
**pretty**
```tsx
/**
 * @default false
 */
pretty?: boolean;
```

##### Usage

```tsx
// "{\n  \"Hello\": \"World\"\n}"

const string = <json data={{ Hello: "World" }} pretty />;
```

#### YAML

##### Props

**data**
```tsx
/**
 * The data to stringify.
 */
data: NestedOptionalJSONValue;
```
```tsx
/**
 * @default false
 */
noStartMarker?: boolean;
```
```tsx
/**
 * @default false
 */
sequenceIndent?: boolean;
```

##### Usage

```tsx
// "---\nhello: world"

const string = <yaml data={{ hello: "world" }} />;
```

<h2 id="utility-elements"><div align="right"><a href="#elements">🔝</a></div>Utility Elements</h2>

<h3 id="casing"><div align="right"><a href="#elements">🔝</a></div>Casing</h3>

#### Upper

_`<upper>`_

```tsx
// "HELLO, WORLD!"

const string = <upper>Hello, World!</upper>;
```

#### Lower

_`<lower>`_

```tsx
// "hello, world!"

const string = <lower>Hello, World!</lower>;
```

#### Capital

_`<capital>`_

```tsx
// "Hello, world!"

const string = <capital>hello, world!</capital>;
```

#### Title

_`<title>`_

```tsx
// "Hello, World!"

const string = <title>hello, world!</title>;
```

<h3 id="affixes"><div align="right"><a href="#elements">🔝</a></div>Affixes</h3>

#### Trim

```tsx
// "Hello, World!"

const string = <trim>Hello, World! </trim>;
```

#### Frame

```tsx
// "-- Hello, World! --"

const string = <frame>Hello, World! </frame>;
```

<h3 id="joins"><div align="right"><a href="#elements">🔝</a></div>Joins</h3>

#### Lined
_`<lined>`_

```tsx
// "Hello\nWorld!"

const string = (
  <lined>
    <text>Hello</text>
    <text>World!</text>
  </lined>
);
```

#### Spaced
_`<spaced>`_

```tsx
// "Hello World!"

const string = (
  <spaced>
    <text>Hello</text>
    <text>World!</text>
  </spaced>
);
```

#### Comma-Separated List
_`<csl>`_

##### Props

```tsx
/**
 * @default false
 */
noSpace?: boolean;
```

##### Usage
```tsx
// "hello, world"

const string = (
  <csl>
    <text>hello</text>
    <text>world</text>
  </csl>
);

// "hello,world"

const string = (
  <csl noSpace>
    <text>hello</text>
    <text>world</text>
  </csl>
);
```

#### Union
_`<union>`_

##### Props

```tsx
/**
 * @default false
 */
noSpace?: boolean;
```

##### Usage
```tsx
// "hello | world"

const string = (
  <union>
    <text>hello</text>
    <text>world</text>
  </union>
);

// "hello|world"

const string = (
  <union noSpace>
    <text>hello</text>
    <text>world</text>
  </union>
);
```

#### Sectioned

##### Props

**divider**
```tsx
/**
 * @default "---"
 */
divider?: string;
```
**frame**
```tsx
/**
 * Whether add dividers before and after the body.
 * @default false
 */
frame?: boolean;
```

##### Usage

```tsx
// "Hello\n---\nWorld!"

const string = (
  <sectioned>
    <text>Hello</text>
    <text>World!</text>
  </sectioned>
);
```

<h3 id="sets"><div align="right"><a href="#elements">🔝</a></div>Sets</h3>

Sets automatically adjust the separators used based on the number of children provided.

#### And
_`<and>`_

```tsx
// "a"

const string = (
  <and>
    <text>a</text>
  </and>
);

// "a and b"

const string = (
  <and>
    <text>a</text>
    <text>b</text>
  </and>
);

// "a, b, and c"

const string = (
  <and>
    <text>a</text>
    <text>b</text>
    <text>c</text>
  </and>
);
```

#### And / Or
_`<andor>`_

```tsx
// "a, b, and/or c"

const string = (
  <andor>
    <text>a</text>
    <text>b</text>
    <text>c</text>
  </andor>
);
```

#### Or
_`<or>`_

```tsx
// "a, b, or c"

const string = (
  <or>
    <text>a</text>
    <text>b</text>
    <text>c</text>
  </or>
);
```

#### Nor
_`<nor>`_

```tsx
// "a, b, nor c"

const string = (
  <nor>
    <text>a</text>
    <text>b</text>
    <text>c</text>
  </nor>
);
```

<h3 id="limiters"><div align="right"><a href="#elements">🔝</a></div>Limiters</h3>

#### Cap

The `<cap>` element allows you to limit the length of a string by providing a `splitter` function and a `max` number of "units" to allow.

##### Props

**max**
```tsx
/**
 * The maximum "units" to include.
 * @default Infinity
 */
max?: number;
```
**splitter**
```tsx
/**
 * A function that splits a string into "units".
 * @default "chars"
 */
splitter?: "paragraphs" | "lines" | "spaces" | "words" | "commas" | "chars" | (string: string) => string[];
```
**ellipsis**
```tsx
/**
 * A string to append to the end if the maximum is reached.
 * This string is included in the maximum count.
 * If `true`, "..." is used.
 * @default undefined
 */
ellipsis?: string | true;
```

##### Usage
```tsx
// "Hello"

const string = <cap max={5}>Hello, World!</cap>;
```

#### Priority

The `<priority>` element is like a width-based [CSS media query](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) for strings.

Instead of providing a list of children, `<priority>` expects a list of items, each of which can have a priority. Higher priorities are rendered first (like `z-index` in CSS), and each item has a default priority of 0. Several strategies are provided as well for fine-tuning how items are prioritiezed.

Priority elements can also be nested, which enable extremely fine-grained control over which content is rendered. Several examples are provided in the [priority example directory](https://github.com/AutosseyAI/prxmpt/tree/main/examples/priority).

##### Props

**max**
```tsx
/**
 * The maximum "units" to include.
 * @default Infinity
 */
max?: number;
```
**counter**
```tsx
/**
 * A function that returns the number of "units" in a string.
 * @default charCounter
 */
counter?: (string: string) => number;
```
**items**
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
**strategy**
```tsx
/**
 * The strategy to use when prioritizing items.
 * If multiple strategies are provided, subsequent strategies are tried in order to break ties.
 * 
 * `"priority"`:
 * Prioritize items by the provided priority.
 * Once the maximum is reached, continue to check if remaining items fit.
 *
 * `"order-asc"`:
 * Prioritize items by the order provided.
 * Once the maximum is reached, continue to check if remaining items fit.
 * 
 * `"order-desc"`:
 * Prioritize items in reverse of the order provided.
 * Once the maximum is reached, continue to check if remaining items fit.
 *
 * `"size-asc"`:
 * Prioritize items in size order, smallest to largest.
 * Use if you want to include as many items as possible.
 * 
 * `"size-desc"`:
 * Prioritized items in size order, largest to smallest.
 * Use if you want to include as few items as possible.
 * 
 * @default ["priority", "order-asc"]
 */
strategy?: PriorityStrategy | PriorityStrategy[];
```
**noSkip**
```tsx
/**
  * If `true`, do not skip items after the maximum is reached.
  * @default false
  */
noSkip?: boolean;
```

##### Usage

```tsx
// "Test 2"

const string = (
  <priority
    max={6}
    join={"\n"}
    items={[{
      content: "Test 1"
    }, {
      p: 1,
      content: "Test 2"
    }, {
      content: "Test 3"
    }]} />
);
```

<h2 id="exports"><div align="right"><a href="#elements">🔝</a></div>Exports</h2>

<h3 id="rendering"><div align="right"><a href="#elements">🔝</a></div>Rendering</h3>

#### `createElement`

```tsx
import { createElement } from "@autossey/prxmpt";

// "Hello, World!"

const string = createElement("text", {}, "Hello, World!");
```

#### `render`

```tsx
import { render } from "@autossey/prxmpt";

// "Hello, World!"

const string = render(
  <text>Hello, World!</text>
);
```

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

- [@autosoft/tsconfig](https://www.npmjs.com/package/@autosoft/tsconfig): A base for TypeScript projects.
- [ts-node](https://www.npmjs.com/package/@types/node): TypeScript execution environment and REPL for node.js, with source map support

<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/@autossey/prxmpt.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT) - _The MIT License_

