// import Basic from "../components/pages/";

export const componentMappings = {
  "astro-minimal-lm:pages/contact": "Contact",
  "astro-minimal-lm:pages/basic": "Basic",

  "spa-lm:components/headline": "oc-headline",
  "spa-lm:components/paragraph": "oc-test",
  "spa-lm:components/image": "oc-image",
} as const;

export const constants = {
  CLOSED_AREA_COMMENT: "/cms:area",
  CLOSED_COMPONENT_COMMENT: "/cms:component",
  TEMPLATE_ID_PROP: "mgnl:template",
} as const;
