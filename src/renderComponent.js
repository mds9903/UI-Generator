import { createElement } from "react";
import { Li } from "./components/Li/Li";
import { Div } from "./components/Div/Div";

const keysToComponentMap = {
  li: Li,
  div: Div,
};

export const renderComponent = (config) => {
  if (typeof keysToComponentMap[config.component] !== "undefined") {
    return createElement(
      keysToComponentMap[config.component],
      {
        id: config.id,
        key: config.id,
        className: config.className ? config.className : null,
      },
      config.children && typeof config.children === "string"
        ? config.children
        : config.children.map((c) => renderComponent(c))
    );
  }
};
