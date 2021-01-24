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
  sign: boolean;
  birthday: Date;
}

class RequestPage {
  //#region getters
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
    return cy.get(`.FormikSubmit-submitButton`);
  }
  public get pageErrorMessage() {
    return cy.get(`.RequestDesktopPage-formError`);
  }
  public get typeCancellation() {
    return cy.get(`#type`);
  }
  public get birthdayDay() {
    return cy.get(`[name="birthday-day"]`);
  }
  public get birthdayMonth() {
    return cy.get(`[name="birthday-month"]`);
  }
  public get birthdayYear() {
    return cy.get(`[name="birthday-year"]`);
  }
  public get signatureCanvas() {
    return cy.get(`[data-test-id="SignatureCanvas-canvas"]`);
  }
  public get previewHeader() {
    return cy.get('.PreviewDesktopPage-header');
  }
  public get cookiePlaceholder() {
    return cy.xpath('//a[contains(.,"Akzeptieren")]');
  }
  public get confirmationHeader() {
    return cy.get('.PreviewDesktopPage-header');
  }
  //#endregion

  public open() {
    cy.visit('https://versicherungsservice.check24.de/kuendigen/anfrage/allianz?source=CH24_V_VERC-KS&productKey=phv&reasonKey=other');
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

    this.birthdayDay.type(data.birthday.getDate().toString());
    this.birthdayMonth.type((data.birthday.getMonth() + 1).toString());
    this.birthdayYear.type(data.birthday.getFullYear().toString());

    if (data.sign) {
      this.signatureCanvas.sign([
        { x: 100, y: 100 },
        { x: 100, y: 150 },
        { x: 150, y: 200 },
        { x: 200, y: 200 },
      ]);
    }

    this.submitButton.click();
  }
}

export const requestPage = new RequestPage();
