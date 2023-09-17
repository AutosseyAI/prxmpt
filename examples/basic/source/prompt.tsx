import * as Prxmpt from "prxmpt";

export default function Example() {
  return (
    <lined height={2}>
      <h1>Prxmpt</h1>
      <h2>Casing</h2>
      <h3>Capital</h3>
      <text casing="capital">capitalized string</text>
      <h3>Title</h3>
      <text casing="title">capitalized string</text>
      <h3>Upper</h3>
      <text casing="upper">uppercase string</text>
      <h3>Lower</h3>
      <text casing="lower">Lowercase String</text>
      <h2>Elements</h2>
      <h3>Anchor</h3>
      <a href="https://example.com" title="Example Title">Example</a>
      <a href="https://example.com" title="Example Title" html>Example</a>
      <h3>Block</h3>
      <blockquote>This is a blockquote</blockquote>
      <h3>Tab</h3>
      <text indent>
        <p>This is a tab.</p>
        <p>Two spaces are appended to each line.</p>
      </text>
      <h3>Pre</h3>
      <pre title="myFile.md" lang="md">
        <p># Preformatted Block</p>
        <p>This is a preformatted block.</p>
      </pre>
      <div title="myFile.md">
        This is a div.
      </div>
      <h4>Sections</h4>
      <sectioned frame>
        <text>Section 1</text>
        <tdq>Section 2</tdq>
        <text>Section 3</text>
      </sectioned>
      <h3>Brackets</h3>
      <parens>Parenthesis</parens>
      <square>Square Brackets</square>
      <curly>Curly Brackets</curly>
      <angle>Angle Brackets</angle>
      <tag name="tag">Tags</tag>
      <tag name="empty" />
      <h3>Breaks</h3>
      <kv key="<br />"><br /></kv>
      <kv key="<hr />"><hr /></kv>
      <h3>Characters</h3>
      <h4>Zero Characters</h4>
      <kv key="Empty"><empty /></kv>
      <h4>Single Characters</h4>
      <kv key="Space"><space /></kv>
      <kv key="Dash"><dash /></kv>
      <kv key="Underscore"><underscore /></kv>
      <h4>Multiple Characters</h4>
      <kv key="Ellipsis"><ellipsis /></kv>
      <kv key="NA"><na /></kv>
      <h3>Key Value Pairs</h3>
      <kv key="Key">Value</kv>
      <h3>Comment</h3>
      <comment type="slash">Comment</comment>
      <comment type="dash">Comment</comment>
      <comment type="hash">Comment</comment>
      <comment type="html">Comment</comment>
      <h3>Headings</h3>
      <h1>Heading 1</h1>
      <h1 html>HTML Heading 1</h1>
      <h3>Image</h3>
      <img href="/path/to/image.png">Image</img>
      <h3>Lists</h3>
      <kv key="Ordered List">
        <ol children={["One", "Two", "Three"]} />
      </kv>
      <kv key="Unordered List">
        <ul children={["A", "B", "C"]} />
      </kv>
      <kv key="Checkbox List">
        <cl items={["One", { content: "Two", checked: true }, { content: "Three", checked: false }]} />
      </kv>
      <dl
        space={1}
        termCase="upper"
        items={{
          one: "1",
          two: "2",
          three: "with\nmultiple\nlines"
        }} />
      <h3>Quotes</h3>
      <sq>Escaped 'Single' Quote</sq>
      <dq>Escaped "Double" Quote</dq>
      <sq noEscape>No Escape 'Single' Quote</sq>
      <dq noEscape>No Escape "Double" Quote</dq>
      <tsq>Single Triple Quote</tsq>
      <tdq>Double Triple Quote</tdq>
      <tbq>Backtick Triple Quote</tbq>
      <q>Single Line Quote</q>
      <q>Multi<br />Line<br />Quote</q>
      <code>Code</code>
      <h3>Styles</h3>
      <b>Bold</b>
      <i>Italic</i>
      <s>Strikethrough</s>
      <h3>Union</h3>
      <union children={["A", "B", "C"]} />
      <h2>Sets</h2>
      <h3>And</h3>
      <and children={["A"]} />
      <and children={["A", "B"]} />
      <and children={["A", "B", "C"]} />
      <h3>AndOr</h3>
      <andor children={["A"]} />
      <andor children={["A", "B"]} />
      <andor children={["A", "B", "C"]} />
      <h3>Nor</h3>
      <nor children={["A"]} />
      <nor children={["A", "B"]} />
      <nor children={["A", "B", "C"]} />
      <h3>Or</h3>
      <or children={["A"]} />
      <or children={["A", "B"]} />
      <or children={["A", "B", "C"]} />
      <h3>Sentences</h3>
      <state>This is a sentence</state>
      <ask>This is a sentence</ask>
      <exclaim>This is a sentence</exclaim>
      <h3>Numbers</h3>
      <num fixed={4}>1.23</num>
      <num max={10}>12</num>
      <num max={10} add={-3}>12</num>
      <h3>Dates</h3>
      <date />
      <time />
      <datetime />
      <kv key="year"><year /></kv>
      <kv key="month"><month /></kv>
      <kv key="day"><day /></kv>
      <kv key="hour"><hour /></kv>
      <kv key="min"><minute /></kv>
      <kv key="s"><second /></kv>
      <kv key="ms"><millisecond /></kv>
      <elapsed since={new Date("September 2021")} />
      <h2>Serialization</h2>
      <h3>JSON</h3>
      <json data={{ a: 1, b: ["2", "3"]}} pretty />
      <h3>YAML</h3>
      <yaml data={{ a: 1, b: ["2", "3"]}} />
      <h2>Utilities</h2>
      <h3>Trim</h3>
      <text trim>   s p a c e   </text>
      <h3>Truncate</h3>
      <cap max={12} ellipsis="...">A really long sentence</cap>
      <h3>Frame</h3>
      <frame with="!">wrapped</frame>
    </lined>
  );
}
