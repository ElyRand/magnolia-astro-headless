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

const headlineTemplate = (
  context: ElementDefinitionContext,
  definition: HeadlineDefinition
) => {
  return html` <h1>${(x) => x.getAttribute("title")}</h1> `;
};

const styles = (context: ElementDefinitionContext) => `
    :host {
        display: block;
        color:grey;
        text-align: center;
    }
`;

export default Headline.compose<HeadlineDefinition>({
  baseName: "headline",
  template: headlineTemplate,
  styles,
  shadowOptions: {
    mode: "open",
  },
  title: "test",
});
