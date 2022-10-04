
describe("CardComponent", () => {
    it('Find slots in the card', () => {
        cy.visit('http://localhost:6006/iframe.html?id=components-card--image-card&args=&viewMode=story');
        cy.get('in-card').shadow().find('slot[name="header"]').should('exist');
        cy.get('in-card').shadow().find('slot[name="content"]').should('exist');
    });

    it('Find card slot content in light DOM', () => {
        cy.visit('http://localhost:6006/iframe.html?id=components-card--image-card&args=&viewMode=story');
        cy.get("#root").find('[slot="header"]').get("img").should('exist');
        cy.get('#root').find('[slot="footer"]').contains('Read');
    });
});