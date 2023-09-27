/* eslint-disable max-len */
import { counter } from "./counter.js";

export const loremIpsum = [
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus tortor dui, non tempor erat vulputate ultricies. Suspendisse neque tortor, viverra vel luctus in, venenatis laoreet erat. Fusce cursus nulla euismod euismod luctus. Donec ultrices tempor metus, non vulputate eros tempor ut. Integer in urna lacus. Nulla lacinia imperdiet nunc sit amet malesuada. Integer rhoncus nibh quis dolor vehicula, in cursus massa tempus. Sed viverra, metus id condimentum consequat, nibh lorem molestie odio, vitae vulputate augue tortor accumsan massa. Proin condimentum lectus id risus fermentum, sed suscipit elit porttitor. Etiam non velit in erat euismod dignissim. Aenean ac ante vel enim dapibus imperdiet. Maecenas fringilla faucibus quam, sed imperdiet quam semper ac. Curabitur id orci sit amet enim ultricies fringilla.</p>,
  <p>Vestibulum tincidunt purus nec viverra laoreet. In ultrices risus sed magna sodales malesuada. Mauris congue efficitur congue. Phasellus ut ipsum volutpat, gravida nunc condimentum, finibus diam. Aliquam facilisis varius fringilla. Maecenas volutpat egestas metus sed porta. Ut at enim pharetra elit vehicula finibus quis eget ligula. Nullam nibh dolor, ornare ut luctus ac, malesuada mollis risus. Etiam laoreet urna sed lectus tempor blandit. Vestibulum dapibus libero vitae eros vulputate tincidunt. Vestibulum vestibulum, nibh a scelerisque tristique, erat purus varius velit, non semper nisi lacus ut sem. Pellentesque faucibus risus in gravida tristique. Etiam maximus, magna eget sagittis aliquet, felis felis pulvinar dolor, in convallis diam nulla eu libero. Sed ac egestas tortor, ut dapibus dui. Cras justo dui, porta nec sem et, aliquam laoreet est. Maecenas scelerisque posuere mollis.</p>,
  <p>Ut vulputate est nec dictum consectetur. Maecenas interdum accumsan purus, et tincidunt risus lacinia in. Morbi sollicitudin fringilla sapien, eu gravida leo varius ut. Integer convallis tincidunt mi, in ultrices sem egestas id. Integer ligula enim, varius vel nunc sed, accumsan aliquet nibh. Fusce tristique felis id ligula mollis, quis sodales neque tempus. Aliquam dictum, enim ut efficitur commodo, risus velit hendrerit neque, eu ornare dui justo vitae sem. Mauris orci odio, mattis vel facilisis sit amet, porttitor ac lectus. Curabitur nec lorem vitae neque facilisis vehicula id convallis erat. Nulla rutrum sed arcu sed auctor. Morbi posuere neque nisi, at pharetra ipsum ultricies pharetra. Fusce in velit quis erat aliquet bibendum. Ut libero nulla, sagittis imperdiet lectus sit amet, iaculis imperdiet nisi. Vestibulum pretium porta turpis id placerat. Sed quam urna, consectetur ac tellus nec, consequat feugiat nibh. Proin quis fermentum eros.</p>,
  <p>Morbi fermentum egestas mauris. Etiam aliquet mi ut nunc iaculis consequat. Ut congue vulputate dui eu venenatis. Suspendisse orci mi, mollis quis imperdiet ac, ultricies tincidunt erat. Curabitur semper fringilla dapibus. Mauris non mattis erat, at elementum dui. Sed turpis nunc, vestibulum ac lectus vitae, congue ullamcorper elit. Aliquam euismod ex id erat dignissim tempor. Nullam dapibus pulvinar ante in hendrerit. In vitae mauris et nibh porta consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius justo at metus eleifend dignissim. Integer nulla leo, molestie vel sem quis, finibus dignissim lectus. Vivamus in odio aliquet, finibus nisl non, efficitur mauris. Donec sem quam, accumsan ut fringilla ac, ultricies nec felis.</p>,
  <p>Sed feugiat quis massa nec maximus. Cras tempor ligula in iaculis placerat. Aenean blandit tincidunt sem, vel porttitor diam porta sed. Suspendisse potenti. Donec dapibus, sapien ut efficitur commodo, lectus libero bibendum massa, et pellentesque lorem tellus id felis. Nam nec nunc nec lectus blandit ornare id vitae tortor. Aliquam sagittis ex id lectus consectetur, vitae pharetra sapien ornare. Nulla et lectus orci. Mauris congue, massa non vulputate semper, massa nisl condimentum eros, sed vehicula mauris sem vel nunc.</p>
];

interface Props {
  capacity?: number;
  noSkip?: boolean;
  trim?: boolean;
}

/**
 * If skip is allowed, we will get the 1st and the 4th paragraph.
 * If skip is not allowed, we will only get the first paragraph, since we stop after the second paragraph.
 */
export default function LoremIpsum(props: Props = {}) {
  return (
    <priority
      max={props.capacity ?? 500}
      counter={counter}
      noSkip={props.noSkip}
      items={loremIpsum}
      join={"\n"}
      trim={props.trim} />
  );
}
