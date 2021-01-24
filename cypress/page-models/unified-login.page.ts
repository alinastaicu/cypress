class UnifiedLogin {
  public get iframe() {
    return cy.get('#c24-ul-iframe');
  }

  public get emailField() {
    return cy.get('#cl_login');
  }

  public get passwoardField() {
    return cy.get('#cl_pw_register');
  }

  public get nextButton() {
    return cy.get('#c24-uli-login-btn');
  }
}

export const unifiedLogin = new UnifiedLogin();
