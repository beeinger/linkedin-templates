const getDropdown = async () => {
  let dropdown = document.createElement("div");
  dropdown.setAttribute("class", "linkedin-chat-dropdown");

  const templates = await getTemplates();

  for (let key in templates) {
    const template = templates[key],
      content = document.createElement("p");

    content.textContent = key;
    dropdown.appendChild(content);
  }

  return dropdown;
};

const initializeDropdown = async (container, button) => {
  let dropdown = await getDropdown();
  dropdown = container.appendChild(dropdown);

  const clickListener = (e) => {
      if (container.contains(e.target)) return;
      dropdown.style.setProperty("display", "none");
      document.removeEventListener("click", clickListener);
      button.onclick = onClick;
    },
    onClick = () => {
      document.removeEventListener("click", clickListener);

      dropdown.style.setProperty("display", "block");

      button.onclick = () => {
        dropdown.style.setProperty("display", "none");
        document.removeEventListener("click", clickListener);
        button.onclick = onClick;
      };

      document.addEventListener("click", clickListener);
    };

  button.onclick = onClick;
};
