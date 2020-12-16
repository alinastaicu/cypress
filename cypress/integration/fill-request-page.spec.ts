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
      });
    });

    it('SHOULD contain 1 error message', () => {
      requestPage.pageErrorMessage.should((error) => {
        expect(error).to.have.length(1);
      });
    });

    it('SHOULD contain the text "Bitte vervollständigen Sie die rot markierten Felder!"', () => {
      requestPage.pageErrorMessage.should((error) => {
        expect(error.first()).to.contain('Bitte vervollständigen Sie die rot markierten Felder!');
      });
    });
  });

  describe('WHEN I fill the entire form', () => {
    before(() => {
      requestPage.open();
      requestPage.acceptCookies();
      // requestPage.fillCancelationForm(requestData_MaxPeculina);
    });

    it('SHOULD navigate to the next page', () => {
      // expect url to be new url
    });

    it('SHOULD see a new title', () => {});
  });
});
