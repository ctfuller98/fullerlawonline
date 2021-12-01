export function qs(selector, parent = document) {
    return parent.querySelector(selector);
  }
  function convertToText(res) {
    if (res.ok) {
      return res.text();
    } else {
      throw new Error("Bad Response");
    }
  }
  

  export function renderWithTemplate(template, parent, data, callback) {
    let clone = template.content.cloneNode(true);
    if (callback) {
      clone = callback(clone, data);
    }
    parent.appendChild(clone);
  }
export async function loadTemplate(path) {
    const html = await fetch(path).then(convertToText);
    const template = document.createElement("template");
    template.innerHTML = html;
    return template;
  }
  export async function loadHeaderFooter() {
    const header = await loadTemplate("../partials/header.html");
    const footer = await loadTemplate("../partials/footer.html");
    let headerE = qs(".header");
    let footerE = qs(".footer");
    renderWithTemplate(header, headerE);
    renderWithTemplate(footer, footerE);
  }