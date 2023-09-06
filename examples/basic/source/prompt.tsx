import * as Prxmpt from "prxmpt";

export default function Example() {
  return (
    <lines height={2}>
      <h1>Prxmpt</h1>
      <h2>Casing</h2>
      <h3>Capital</h3>
      <capital>capitalized string</capital>
      <h3>Title</h3>
      <title>This is a title</title>
      <h3>Upper</h3>
      <upper>Uppercase</upper>
      <h3>Lower</h3>
      <lower>Lowercase</lower>
      <h2>Elements</h2>
      <h3>Anchor</h3>
      <a href="https://example.com" title="Example Title">Example</a>
      <a href="https://example.com" title="Example Title" html>Example</a>
      <h3>Block</h3>
      <blockquote>This is a blockquote</blockquote>
      <h3>Tab</h3>
      <indent inline>
        <p>This is a tab.</p>
        <p>Two spaces are appended to each line.</p>
      </indent>
      <h3>Pre</h3>
      <pre title="myFile.md" lang="md" inline>
        <p># Preformatted Block</p>
        <p>This is a preformatted block.</p>
      </pre>
      <div title="myFile.md" inline>
        This is a div.
      </div>
      <h4>Sections</h4>
      <sections surround>
        <span>Section 1</span>
        <dtq>Section 2</dtq>
        <span>Section 3</span>
      </sections>
      <h3>Brackets</h3>
      <parens>Parenthesis</parens>
      <square>Square Brackets</square>
      <curly>Curly Brackets</curly>
      <angle>Angle Brackets</angle>
      <tag name="tag">Tags</tag>
      <tag name="empty" />
      <h3>Breaks</h3>
      <span>BR: <br /></span>
      <span>HR: <hr /></span>
      <h3>Characters</h3>
      <h4>Zero Characters</h4>
      <span>Empty:<empty /></span>
      <h4>Single Characters</h4>
      <span>Space: <space /></span>
      <span>Dash: <dash /></span>
      <span>Underscore: <underscore /></span>
      <h4>Multiple Characters</h4>
      <span>Ellipsis: <ellipsis /></span>
      <span>NA: <na /></span>
      <h3>Colon</h3>
      <colon title="Title">Body</colon>
      <h3>Comment</h3>
      <comment type="slash">Comment</comment>
      <comment type="dash">Comment</comment>
      <comment type="hash">Comment</comment>
      <h3>Headings</h3>
      <h1>Heading 1</h1>
      <h1 html>Heading 1</h1>
      <h3>Image</h3>
      <img href="/path/to/image.png">Image</img>
      <h3>Lists</h3>
      <colon title="Ordered List">
        <ol children={["One", "Two", "Three"]} />
      </colon>
      <colon title="Unordered List">
        <ul children={["A", "B", "C"]} />
      </colon>
      <colon title="Checkbox List">
        <cb items={["One", { content: "Two", checked: true }, { content: "Three", checked: false }]} />
      </colon>
      <dl
        space={1}
        case="upper"
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
      <stq>Single Triple Quote</stq>
      <dtq>Double Triple Quote</dtq>
      <btq>Backtick Triple Quote</btq>
      <q>Single Line Quote</q>
      <q>Multi<br />Line<br />Quote</q>
      <code>Code</code>
      <h3>Styles</h3>
      <b>Bold</b>
      <i>Italic</i>
      <s>Strikethrough</s>
      <h3>Union</h3>
      <union children={["A", "B", "C"]} />
      <h2>Grammatical</h2>
      <h3>And</h3>
      <and children={["A"]} />
      <and children={["A", "B"]} />
      <and children={["A", "B", "C"]} />
      <h3>AndOr</h3>
      <andor children={["A"]} />
      <andor children={["A", "B"]} />
      <andor children={["A", "B", "C"]} />
      <h3>Or</h3>
      <or children={["A"]} />
      <or children={["A", "B"]} />
      <or children={["A", "B", "C"]} />
      <h3>Nouns</h3>
      <noun plural>dog</noun>
      <noun singular>dogs</noun>
      <h3>Verbs</h3>
      <verb form="past">jump</verb>
      <verb form="present">jump</verb>
      <verb form="future">jump</verb>
      <verb form="infinitive">jump</verb>
      <verb form="gerund">jump</verb>
      <verb negative>is jumping</verb>
      <verb positive>is not jumping</verb>
      <h3>Adjective</h3>
      <adjective form="comparative">quick</adjective>
      <adjective form="superlative">quick</adjective>
      <adjective form="adverb">quick</adjective>
      <adjective form="noun">quick</adjective>
      <h3>Sentences</h3>
      <sentence tense="past">He went to the store.</sentence>
      <sentence tense="present">He went to the store.</sentence>
      <sentence tense="future">He went to the store.</sentence>
      <sentence tense="infinitive">He went to the store.</sentence>
      <sentence negative>He went to the store.</sentence>
      <sentence positive>He did not go to the store.</sentence>
      <h3>Numbers</h3>
      <num format="digit">twelve</num>
      <num format="text">12</num>
      <num kind="ordinal">12</num>
      <num kind="cardinal" format="text">12th</num>
      <num max={10} add={-3} kind="ordinal">12</num>
      <h3>Dates</h3>
      <date />
      <time />
      <datetime />
      <colon title="year"><year /></colon>
      <colon title="month"><month /></colon>
      <colon title="day"><day /></colon>
      <colon title="hour"><hour /></colon>
      <colon title="min"><minute /></colon>
      <colon title="s"><second /></colon>
      <colon title="ms"><millisecond /></colon>
      <elapsed since={new Date("September 2021")} />
      <h3>Fractions</h3>
      <fraction format="fraction">1/2</fraction>
      <fraction format="decimal">1/2</fraction>
      <fraction format="percent">1/2</fraction>
      <fraction format="ordinal">1/2</fraction>
      <h2>Serialization</h2>
      <h3>JSON</h3>
      <json data={{ a: 1, b: ["2", "3"]}} pretty />
      <h3>YAML</h3>
      <yaml data={{ a: 1, b: ["2", "3"]}} />
      <h2>Utilities</h2>
      <h3>Bracket</h3>
      <bracket prefix="prefix" suffix="suffix"> content </bracket>
      <h3>Join</h3>
      <join with="-" children={["A", "B", "C"]} />
      <h3>List</h3>
      <list map={(item) => `${item}+`} children={["A", "B", "C"]} />
      <h3>Split</h3>
      <list>
        <map to={(item) => `${item}+`}>
          <split on=" " children="A B C" />
        </map>
      </list>
      <h3>Trim</h3>
      <trim>   s p a c e   </trim>
      <h3>Truncate</h3>
      <truncate max={12}>A really long sentence</truncate>
      <h3>Wrap</h3>
      <wrap with="!">wrapped</wrap>
    </lines>
  );
}
