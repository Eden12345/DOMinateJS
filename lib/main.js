const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = (arg) => {
  if (typeof arg === "string") {
    arg = document.querySelectorAll(arg);
    return new DOMNodeCollection(arg);
  } else if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  }
};

window.$create = (arg) => {
  return document.createElement(arg);
};