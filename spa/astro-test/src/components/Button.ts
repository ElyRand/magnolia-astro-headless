import {
  Button,
  ElementDefinitionContext,
  FoundationElement,
  FoundationElementDefinition,
} from "@microsoft/fast-foundation";
import { attr, html } from "@microsoft/fast-element";

// Extend the configuration with custom properties
interface HeadlineDefinition extends FoundationElementDefinition {
  title?: string;
}

export class CustomButton extends Button {
  @attr title = "";
}

const buttonTemplate = (
  context: ElementDefinitionContext,
  definition: HeadlineDefinition
) => {
  return html` <h1>${(x) => x.getAttribute("title")}</h1> `;
};

const styles = (context: ElementDefinitionContext) => `
      :host {
          display: block;
      }
  `;

export default CustomButton.compose<HeadlineDefinition>({
  baseName: "headline",
  template: buttonTemplate,
  styles,
  shadowOptions: {
    mode: "open",
  },
  title: "test",
});
