describe("noraml-test", () => {
    it("Runnig timer test", () => {
        cy.visit('http://localhost:3000/')
        cy.get('.MuiButton-label')
            .wait(2000)
            .click()
        cy.get('.MuiButton-fullWidth > .MuiButton-label')
            .wait(2000)
            .click()
            .wait(10000)
            .get('.MuiSnackbarContent-message')
            .should('exist')
            .wait(50000)
            .get('.MuiSnackbarContent-message')
            .should('not.exist');
    })
    it("should check points", () => {
        cy.get(':nth-child(2) > .MuiPaper-root > .MuiCardContent-root')
            .should('have.text', '0 Points')
        cy.get(':nth-child(3) > .MuiPaper-root > .MuiCardContent-root')
            .should('have.text', '0.00% Accuracy')
        cy.get(':nth-child(4) > .MuiPaper-root > .MuiCardContent-root')
            .should('have.text', '0 wpm')

    })
    it.only("Runnig scores test", () => {
        cy.visit('http://localhost:3000/')
        cy.get('.MuiButton-label')
            .wait(2000)
            .click()
        cy.get('.MuiButton-fullWidth > .MuiButton-label')
            .wait(2000)
            .click()
            .wait(10000)
            .get('.MuiSnackbarContent-message')
            .should('exist')
        cy.get('#test-type-area')
            .click()
            .type("A")
            .type(" ")
            .type("B")
            .type("o")
            .type("Y")
            .type("r")

    })
    it("should check points", () => {
        cy.get(':nth-child(2) > .MuiPaper-root > .MuiCardContent-root')
            .should('have.text', '5 Points')
        cy.get(':nth-child(3) > .MuiPaper-root > .MuiCardContent-root')
            .should('have.text', '49.98% Accuracy')
        cy.get(':nth-child(4) > .MuiPaper-root > .MuiCardContent-root')
            .should('have.text', '2 wpm')



    })
})

