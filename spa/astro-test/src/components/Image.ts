import {
  ElementDefinitionContext,
  FoundationElement,
  FoundationElementDefinition,
} from "@microsoft/fast-foundation";
import { attr, html } from "@microsoft/fast-element";

// Extend the configuration with custom properties
interface HeadlineDefinition extends FoundationElementDefinition {
  title?: string;
}

export class Headline extends FoundationElement {
  @attr title = "";
}

const imageTemplate = (
  context: ElementDefinitionContext,
  definition: HeadlineDefinition
) => {
  return html`<span> Image here </span>`;
};

const styles = (context: ElementDefinitionContext) => `
    :host {
        display: block;
        color:orange;
        text-align: center;
    }
`;

export default Headline.compose<HeadlineDefinition>({
  baseName: "image",
  template: imageTemplate,
  styles,
  shadowOptions: {
    mode: "open",
  },
});
