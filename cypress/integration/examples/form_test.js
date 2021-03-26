describe("Pizza app", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza");
    });

    const textInput = () => cy.get('input[name="add"]')
    const toppingsInput = () => cy.get('input[name=pepperoni]')
    const submitBtn = () => cy.get('button')
    const sizeInput = () => cy.get('select[name="size"]')
    const sauceInput = () => cy.get('input[name="sauce"]')


    it("can check if you can add text to the input container", () => {
        textInput()
            .should("have.value", "")
            .type("Gluten Allergy")
            .should("have.value", "Gluten Allergy");
    })

    it("can select multiple toppings", () => {
        toppingsInput()
            .click()
    })

    it("can submit an order", () => {
        sizeInput().should("have.value", "");
        sauceInput().should('have.value', "")
        toppingsInput().should("have.value", "")

        sizeInput().type("Small")
        sauceInput().type("original red")
        toppingsInput().click();
        submitBtn().click();
    })
});
