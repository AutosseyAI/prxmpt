import * as Prxmpt from "../../../index.js";

export interface HeadingProps extends Prxmpt.BlockProps {
  /**
   * @default false
   */
  html?: boolean;
};

export interface HProps extends HeadingProps {
  n: 1 | 2 | 3 | 4 | 5 | 6;
};

export const h: Prxmpt.PC<HProps> = (props) => {
  return props.html
    ? <tag name={`h${props.n}`} hide={props.hide} inline={props.inline}>{props.children}</tag>
    : (
      <p hide={props.hide} inline={props.inline}>
        <repeat count={props.n}>#</repeat><space />{props.children}
      </p>
    );
}

export const h1: Prxmpt.PC<HeadingProps> = (props) => {
  return <h n={1} {...props} />;
};

export const h2: Prxmpt.PC<HeadingProps> = (props) => {
  return <h n={2} {...props} />;
};

export const h3: Prxmpt.PC<HeadingProps> = (props) => {
  return <h n={3} {...props} />;
};

export const h4: Prxmpt.PC<HeadingProps> = (props) => {
  return <h n={4} {...props} />;
};

export const h5: Prxmpt.PC<HeadingProps> = (props) => {
  return <h n={5} {...props} />;
};

export const h6: Prxmpt.PC<HeadingProps> = (props) => {
  return <h n={6} {...props} />;
};
