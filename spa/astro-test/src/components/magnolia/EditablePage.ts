import { PageEditorBridge } from "@magnolia/template-annotations";
import PersonalizationService from "@magnolia/template-annotations/lib/service/PersonalizationService";
import TemplateAnnotations from "@magnolia/template-annotations/lib/service/TemplateAnnotations";

class EditablePage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    PageEditorBridge.init(() => console.log("connected to bridge"));
    PageEditorBridge.onMessage("updateState", (message) => {
      const annotations = JSON.parse(this.getAttribute("annotations"));
      const content = JSON.parse(this.getAttribute("content"));
      // TODO : check if content is null and reflect it in the UI
      if (!content) return;
      const wrappedContent = TemplateAnnotations.generateMissingAreas(
        content,
        annotations
      );
      // Personalization of the content
      const renderingContent = annotations
        ? PersonalizationService.getVariant(wrappedContent, annotations)
        : wrappedContent;
      const wrappedTemplateAnnotations = PersonalizationService.wrap(
        annotations,
        message.selectedComponentVariants
      );

      // Fetch the annotations
      const theAnnotations = wrappedTemplateAnnotations[content["@path"]];
      this.render(renderingContent, wrappedTemplateAnnotations, theAnnotations);
    });
  }

  render(
    content: object,
    wrappedTemplateAnnotations: object,
    theAnnotations: string
  ) {
    const div = document.createElement("div");
    //comment
    const comment = document.createComment(theAnnotations);
    comment.textContent = theAnnotations;
    div.prepend(comment);
    this.append(div);

    //area
  }
}

export default EditablePage;
