import { constants } from "../../utils/mapping";
import EditableComment from "./EditableComment";
import EditableComponent from "./EditableComponent";

class EditableArea extends HTMLElement {
  static get observedAttributes() {
    return ["content", "parentTemplateId", "annotations"];
  }

  constructor() {
    super();
    console.log("connected !!");
  }

  connectedCallback() {
    // this.innerHTML = `<h2>editable-area</h2>`;
    console.log("connected !!", this.attributes);
    const content = JSON.parse(this.getAttribute("content"));
    console.log({ content });
    const parentTemplateId = JSON.parse(this.getAttribute("parentTemplateId"));
    const annotations = JSON.parse(this.getAttribute("annotations"));

    // comments
    const openingComment = document.createComment(
      annotations[content["@path"]]
    );
    openingComment.textContent = annotations[content["@path"]];
    this.prepend(openingComment);

    // editable components
    const componentContents = content["@nodes"].map(
      (nodeName) => content[nodeName]
    );

    console.log({ componentContents });

    componentContents.forEach((item, index) => {
      const component = document.createElement("editable-component");
      component.setAttribute("content", JSON.stringify(item));
      component.setAttribute("index", index);
      component.setAttribute("annotations", this.getAttribute("annotations"));
      this.appendChild(component);
    });

    console.log({ componentContents });

    //comments 2
    const closingComment = document.createComment(
      constants.CLOSED_AREA_COMMENT
    );
    closingComment.textContent = constants.CLOSED_AREA_COMMENT;
    this.appendChild(closingComment);
  }
}

export default EditableArea;
