import JobForm from "@/app/components/jobForm";

describe('Inspection Form Tests', () => {


    beforeEach(() => {
        cy.viewport(1920, 1080)
        const trelloMembers = [
            {
                id: '123',
                username: 'testuser',
                fullName: 'test user'
            },
            {
                id: '456',
                username: 'testuser2',
                fullName: 'test user 2'
            },
            {
                id: '789',
                username: 'testuser3',
                fullName: 'test user 3'
            }
        ]

        cy.mount(<JobForm id="123" trelloMembers={trelloMembers} jobs={["INSPECT"]} />)
    })

    it('renders', () => {
        cy.get('#stepper').should('exist')
        cy.contains('Full Name');
        cy.contains('test user');
    })

    it('does not open a box by defualt', () => {
        cy.get('#notes').click()
        //accordion chevron with attribute data-rotate="true" should not exist
        cy.get('[data-rotate="true"]').should('not.exist')
    })

})
