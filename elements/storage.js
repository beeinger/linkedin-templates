const getTemplates = () =>
  new Promise((resolve, reject) => {
    chrome.storage.sync.get(["templates"], (result) => {
      if (chrome.runtime.lastError) return reject(chrome.runtime.lastError);
      resolve(result.templates);
    });
  });

const addTemplate = (name, template) => {
  chrome.storage.sync.get(["templates"], function (result) {
    let templates = result.templates || {};
    templates[name] = template;

    chrome.storage.sync.set({ templates }, function () {
      console.log("Value is set to ", templates);
    });
  });
};

const removeTemplate = (name) => {
  chrome.storage.sync.get(["templates"], function (result) {
    let templates = result.templates || {};
    delete templates[name];

    chrome.storage.sync.set({ templates }, function () {
      console.log("Value is set to ", templates);
    });
  });
};
