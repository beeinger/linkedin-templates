let getDynamicBlocks = (recipient) => ({
  "{full-name}": recipient.fullName,
  "{first-name}": recipient.firstName,
  "{last-name}": recipient.lastName,
  "{my-full-name}": me.fullName,
  "{my-first-name}": me.firstName,
  "{my-last-name}": me.lastName,
  "{my-linkedin-headline}": me.linkedinHeadline,
});

const copyMessage = (template) => async () => {
  const message = await getMessageFromTemplate(template);
  navigator.clipboard.writeText(message);
};

const getMessageFromTemplate = async (template) => {
  let message = template;

  const recipient = new Person(
    document
      .querySelector("h2.msg-entity-lockup__entity-title")
      .textContent.trim()
  );

  const dynamicBlocks = getDynamicBlocks(recipient);
  for (let key in dynamicBlocks)
    message = message.replace(key, dynamicBlocks[key]);

  return message;
};
