describe("Exemplu unde", () => {


// it("verificare daca url contine ceva", () => {
//     cy.visit("https://www.digi24.ro/stiri/sci-tech/lumea-digitala/p-cognyte-analiza-investigativa-si-inteligenta-artificiala-solutii-esentiale-pentru-un-viitor-informatic-mai-sigur-in-organizatii-2214219")
//     cy.get(".container > .gdpr-trigger").click();
//     cy.url().should("include", '/stiri/') //verifica un segment 
// }) // s-a verificat daca utilizatorul a ajuns pe pagina respectiva


// it("asteapta 10 secunde", () => {
//     cy.visit("https://www.google.com");
//     cy.get("#L2AGLb").click();
//     cy.wait(10000); // 10 secunde / 1000 milisecunde = 1 secunda
//     cy.get(".gLFyf").type("Au trecut 10 secunde").type("{enter}");
//     cy.get("#results-stats").should("exist")
// })


// it("selectez folosind un atribut", () => {
//     cy.visit("https://www.google.com");
//     cy.get("#L2AGLb").click();
//     cy.get("[alt=Google]").should("be.visible"); // selector atribut alt + assertion cu visible | S-a ales atributul alt (sau oricare la alegere si sa fie valid)
// })


// it("fac un screenshot la pagina", () => {
//     cy.visit("https://www.google.com");
//     cy.screenshot(); // se face screenshot si se creeaza un folder nou in TestareCypress\cypress
// })


// it("verific o valoare de input", () => {
//     cy.visit("https://www.google.com");
//     cy.get("#L2AGLb").click();
//     const googleSearch = cy.get(".gLFyf");

//     googleSearch.type("123"); // se scrie valoarea 123
//     googleSearch.should("have.value", "123"); // Assertion: daca contine textul; have.value = se aplica la campurile de text dintr-un input
// })


it("verific o valoare din input", () => {
    cy.visit("https://www.libris.ro/");
    cy.get("#autoCompleteButton").should("have.class", "onSearchClick"); // se verifica daca exista clasa pe buton 
})


})