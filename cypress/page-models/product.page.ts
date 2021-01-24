class ProductPage {
  public get nextButton() {
    return cy.get('.CtaButton');
  }

  public selectResone(text: string) {
    cy.contains(text).click();
  }

  public clickNextButton() {
    this.nextButton.click();
  }
}

export const productPage = new ProductPage();
