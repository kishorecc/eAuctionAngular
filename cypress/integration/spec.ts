describe('page loading', () => {
  it('Initial project page loading', () => {
    cy.visit('/bids')
    cy.contains('eAuction')
    
      })
  it('Select Product', () => {
    cy.visit('/bids')
    cy.get('mat-select[name="ddlProducts"]').first().click();
   // cy.get('mat-option-text').contains('Product One').click();
   
   cy.get('span.mat-select-min-line.ng-tns-c94-1.ng-star-inserted').then(option => {
    option[0].click();  // this is jquery click() not cypress click()
});
 
     })
})
