const BLACKLISTED_ATTRIBUTES = ["dir", "itemprop"];

/**
 * Transform the given html string in a usable project readme.
 * @param {string} readmeHtml the string representation of the reamde's html.
 * @returns a usable project readme in html string.
 */
export const parseReadme = (readmeHtml) => {
  let readme = new DOMParser().parseFromString(readmeHtml, "text/html");
  readme = readme.getElementsByTagName("article")[0];
  purgeAnchors(readme);
  updateCodeTags(readme);
  purgeAttributes(readme);
  return readme.outerHTML;
};

/**
 * Remove all the unecessary anchor tags from the given html element.
 * @param {HTMLElement} element the root of the html element we want to remove the unecessary anchor tags from.
 */
const purgeAnchors = (element) => {
  const anchors = element.getElementsByClassName("anchor");
  while (anchors.length > 0) anchors[0].remove();
};

/**
 * Remove all the unecessary tag attributes from the given html element.
 * @param {HTMLElement} element the root of the html element we want to remove the unecessary tag attributes from.
 */
const purgeAttributes = (element) => {
  BLACKLISTED_ATTRIBUTES.forEach((attr) => element.removeAttribute(attr));
  for (let i = 0; i < element.childElementCount; i++)
    purgeAttributes(element.children[i]);
};

/**
 * Replace all the code divs with their children code tag.
 * @param {HTMLElement} element the root of the html element we want to replace the code divs with their children code tag.
 */
const updateCodeTags = (element) => {
  const codes = element.getElementsByClassName("snippet-clipboard-content");
  while (codes.length > 0) {
    let newCode = document.createElement("p");
    newCode.setAttribute("class", "code");
    newCode.innerText = codes[0].getElementsByTagName("code")[0].innerText;
    codes[0].replaceWith(newCode);
  }
};
