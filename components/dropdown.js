const getDropdown = async () => {
  let dropdown = document.createElement("div");
  dropdown.setAttribute("class", "linkedin-chat-dropdown");
  let dropdownList = document.createElement("div");
  dropdownList.setAttribute("class", "linkedin-chat-dropdown-list");
  dropdown.appendChild(dropdownList);

  const templates = await getTemplates();

  const messagesList = document.querySelector("#message-list-ember4");

  let pasteInfoDiv = document.createElement("div");
  pasteInfoDiv.className = "linkedin-chat-paste-info t-12";
  pasteInfoDiv.textContent = "Paste your message below";

  for (let key in templates) {
    const template = templates[key],
      item = document.createElement("p");

    item.setAttribute("class", "linkedin-chat-dropdown-item");
    item.textContent = key;

    item.onclick = () => {
      copyMessage(template)();
      document.body.click();

      messagesList.appendChild(pasteInfoDiv);
    };

    dropdownList.appendChild(item);
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
  };

  const onClick = () => {
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
