import { requestPage } from '../page-models/request.page';

describe('GIVEN I am on request page', () => {
  describe('WHEN I fill all data', () => {
    before(() => {
      requestPage.open();
      requestPage.acceptCookies();
      requestPage.fillCancelationForm({
        email: 'alina.ignat@check24.de',
        gender: 'Frau',
        firstname: 'Max',
        lastname: 'Pecu',
        streetName: 'Erika-Mann-Str',
        streetNumber: '66',
        cityName: 'München',
        areaCode: '80636',
        insurancePolicyNumber: '1234567',
        typeCancellation: 'Sonderkündigung',
      });
    });
  });

  it('SHOULD navigate to the next page', () => {
    cy.url().should('include', '/kuendigen/anfrage/vorschau');
  });

  it('SHOULD see a new title', () => {
    requestPage.previewHeader();
  });
});
