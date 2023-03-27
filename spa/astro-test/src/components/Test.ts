import { html, css } from "@microsoft/fast-element";
import {
  ElementDefinitionContext,
  FoundationElementDefinition,
  FoundationElement,
} from "@microsoft/fast-foundation";
// import { interpretWindiClasses } from "../../utils/generate-css.js";

const Test = html`<div>Test</div>`;

const styles = (
  context: ElementDefinitionContext,
  definition: FoundationElementDefinition
) => css`
  div {
    color: red;
  }
`;

const template = (
  context: ElementDefinitionContext,
  definition: FoundationElementDefinition
) => Test;

export default FoundationElement.compose({
  baseName: "test",
  template,
  styles,
  shadowOptions: {
    mode: "open",
  },
});
