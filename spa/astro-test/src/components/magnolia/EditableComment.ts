class EditableComment extends HTMLElement {
  constructor() {
    super();
    console.log("EditableComment constructor");
  }

  connectedCallback() {
    const annotation = this.getAttribute("annotation");
    if (annotation) {
      //   const theDiv = document.createElement("div");
      //   theDiv.innerHTML = "COMMMENT" + annotation;
      //   const element = document.createElement("h1");
      const element = document.createComment(annotation);
      element.textContent = annotation;
      this.appendChild(element);
      //   this.appendChild(theDiv);
      //   theDiv.parentElement.innerText = "COMMENT" + annotation;

      //   theDiv.before(element);
      //   theDiv.appendChild(element);
    }
  }
}

export default EditableComment;
