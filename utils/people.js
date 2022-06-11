let me;

class Person {
  constructor(fullName, linkedinHeadline) {
    this.fullName = fullName;
    this.nameParts = this.fullName.split(" ");
    this.firstName = this.nameParts[0];
    this.lastName = this.nameParts[this.nameParts.length - 1];

    if (linkedinHeadline) this.linkedinHeadline = linkedinHeadline;
  }

  static async initializeMyself() {
    let avatar = document.querySelector("button.global-nav__primary-link");
    if (!document.querySelector("div.artdeco-entity-lockup__title"))
      avatar.click();

    const fullName = (
      await waitForElm("div.artdeco-entity-lockup__title")
    ).textContent.trim();
    const linkedinHeadline = document
      .querySelector("div.artdeco-entity-lockup__subtitle")
      .textContent.trim();
    avatar.click();

    console.log(
      fullName,
      linkedinHeadline,
      new Person(fullName, linkedinHeadline)
    );

    return new Person(fullName, linkedinHeadline);
  }
}

(async () => {
  me = await Person.initializeMyself();
})();
