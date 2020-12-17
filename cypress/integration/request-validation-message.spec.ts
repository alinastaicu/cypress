import { requestPage } from '../page-models/request.page';

describe('GIVEN my page scenario', () => {
  describe('WHEN I fill partial data', () => {
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
        typeCancellation: 'Widerruf',
      });
    });

    it('SHOULD contain 1 error message', () =>
      requestPage.pageErrorMessage.should((error) => {
        expect(error).to.have.length(1);
      }));

    it('SHOULD contain the text "Bitte vervollständigen Sie die rot markierten Felder!"', () =>
      requestPage.pageErrorMessage.should((error) => {
        expect(error.first()).to.contain('Bitte vervollständigen Sie die rot markierten Felder!');
      }));
  });
});
