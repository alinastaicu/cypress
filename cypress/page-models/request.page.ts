import 'cypress-xpath';

export interface IRequestStepData {
  gender: 'Frau' | 'Herr';
  typeCancellation: 'Fristgemäße Kündigung' | 'Sonderkündigung' | 'Widerruf';
  email: string;
  firstname: string;
  lastname: string;
  streetName: string;
  streetNumber: string;
  cityName: string;
  areaCode: string;
  phone?: string;
  insurancePolicyNumber: string;
}

class RequestPage {
  public get email() {
    return cy.get('#email');
  }
  public get firstname() {
    return cy.get('#firstname');
  }
  public get lastname() {
    return cy.get('#lastname');
  }
  public get areaCode() {
    return cy.get('#areaCode');
  }
  public get cityName() {
    return cy.get('#cityName');
  }
  public get streetName() {
    return cy.get('#streetName');
  }
  public get streetNumber() {
    return cy.get('#streetNumber');
  }
  public get insurancePolicyNumber() {
    return cy.get('#insurancePolicyNumber');
  }
  public get phone() {
    return cy.get('#phone');
  }
  public get gender() {
    return cy.get(`[data-test-id="FormInput-field-gender"]`);
  }
  public get submitButton() {
    return cy.get(`.RequestDesktopPage-submitButton`);
  }
  public get pageErrorMessage() {
    return cy.get(`.RequestDesktopPage-formError`);
  }

  public get typeCancellation() {
    return cy.get(`#type`);
  }

  public acceptCookies() {
    cy.xpath('//a[contains(.,"Akzeptieren")]').click();
  }

  public open() {
    cy.visit('https://versicherungsservice.check24-test.de/kuendigen/anfrage/allianz?source=CH24_V_VERC-KS&productKey=phv');
  }

  public previewHeader() {
    cy.get('.PreviewDesktopPage-header').contains('Ihr Kündigungsschreiben wurde erstellt');
  }

  public fillCancelationForm(data: IRequestStepData) {
    this.email.type(data.email);
    this.gender.select([data.gender]);
    this.firstname.type(data.firstname);
    this.lastname.type(data.lastname);
    this.streetName.type(data.streetName);
    this.streetNumber.type(data.streetNumber);
    this.areaCode.type(data.areaCode);
    this.cityName.type(data.cityName);
    this.insurancePolicyNumber.type(data.insurancePolicyNumber);
    this.typeCancellation.select(data.typeCancellation);
    this.submitButton.click();
  }
}

export const requestPage = new RequestPage();
