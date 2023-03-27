import PersonalizationService from "@magnolia/template-annotations/lib/service/PersonalizationService";
import TemplateAnnotations from "@magnolia/template-annotations/lib/service/TemplateAnnotations";
import { componentMappings, constants } from "../../utils/mapping";

class EditableComponent extends HTMLElement {
  constructor() {
    super();
    console.log("EditableComponent constructor");
  }

  connectedCallback() {
    const content = JSON.parse(this.getAttribute("content"));
    const annotations = JSON.parse(this.getAttribute("annotations"));
    const theAnnotation = annotations[content["@path"]];

    // comments
    const openingComment = document.createComment(
      annotations[content["@path"]]
    );
    openingComment.textContent = annotations[content["@path"]];
    this.prepend(openingComment);

    const variantContent = theAnnotation
      ? PersonalizationService.getVariant(content, theAnnotation)
      : content;
    const renderingContent = TemplateAnnotations.generateMissingAreas(
      variantContent,
      theAnnotation
    );
    console.log({ missing: renderingContent });
    const component = document.createElement("div");
    const toRender = componentMappings[content["mgnl:template"]];
    component.innerHTML = toRender || JSON.stringify(content["mgnl:template"]);
    if (toRender) {
      // TODO: this is a hack to get the component to render
      this.append(component);
      switch (toRender) {
        case "oc-headline":
          const headline = document.createElement("oc-headline");
          headline.setAttribute("title", content["text"]);
          this.appendChild(headline);
          break;
        default:
          const element = document.createElement(toRender);
          this.appendChild(element);
      }
    } else {
      this.appendChild(component);
    }

    const closingComment = document.createComment(
      constants.CLOSED_COMPONENT_COMMENT
    );
    closingComment.textContent = constants.CLOSED_COMPONENT_COMMENT;
    this.appendChild(closingComment);
  }
}

export default EditableComponent;
