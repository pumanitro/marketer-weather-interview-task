function fakeLocation(latitude, longitude) {
  return {
    onBeforeLoad(win) {
      cy.stub(win.navigator.geolocation, 'getCurrentPosition', (cb, err) => {
        if (latitude && longitude) {
          return cb({ coords: { latitude, longitude } });
        }
        throw err({ code: 1 }); // 1: rejected, 2: unable, 3: timeout
      });
    },
  };
}

describe('Weather app', () => {
  it('adds searched element to searched cities list', () => {
    cy.viewport('macbook-15');
    cy.visit('/', fakeLocation(48, 2)); // France

    cy.contains('Searched cities:').should('not.exist');

    cy.get('input[placeholder*="Search city..."]')
      .click()
      .type('Szczecin')
      .wait(500)
      .trigger('keydown', { keyCode: 13, release: true })
      .trigger('keydown', { keyCode: 40, release: true })
      .trigger('keydown', { keyCode: 13, release: true });

    cy.contains('Searched cities:').should('exist');
    cy.contains('°C').should('exist');
  });
});
