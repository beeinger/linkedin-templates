const main = async () => {
  let parent = document.querySelector(
    "footer > div.msg-form__left-actions.display-flex"
  );

  let container = document.createElement("div");
  container.setAttribute("class", "linkedin-chat-container");
  container = parent.appendChild(container);

  let button = document.createElement("button");
  button.className =
    "linkedin-chat-button msg-form__footer-action artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--5 artdeco-button--tertiary ember-view";
  button.appendChild(getSVG());
  button = container.appendChild(button);

  initializeDropdown(container, button);

  // addTemplate(
  //   "Not interested",
  //   "Hi {first-name}, \nLorem ipsum dolor sit amet.\nBest,\n{my-first-name}"
  // );

  // const templates = await getTemplates();
  // console.log("Templates:", templates);

  // removeTemplate("Not interested");
};

window.setInterval(() => {
  if (!document.querySelector("div.linkedin-chat-container")) main();
}, 1000);
