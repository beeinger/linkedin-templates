const main = async () => {
  const templates = await getTemplates();
  let container = document.createElement("div");

  for (let key in templates) {
    const template = templates[key],
      content = document.createElement("p");

    content.textContent = key;
    container.appendChild(content);
  }

  document.body.appendChild(container);
};

main();
