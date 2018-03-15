const exports = module.exports;

exports.addElement = (parent, ...elements) => {
  elements.forEach(el => parent.append(el));
}

exports.addAttributes = (element, options) => {
  Object.keys(options).forEach(key => {
    element.setAttribute(key, options[key]);
  });
}

exports.generateElement = (type, options = null) => {
  const $element = document.createElement(type);
  if (options) exports.addAttributes($element, options);

  return $element;
}

exports.addListener = (id, type, listener) => {
  document.getElementById(id).addEventListener(type, listen)
}
