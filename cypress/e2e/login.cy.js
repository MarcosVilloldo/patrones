describe('Login - validaciones y flujo', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('C1: Carga inicial sin errores', () => {
    cy.get('.error-message').should('not.exist')
    cy.get('#email').should('have.value', '')
    cy.get('#password').should('have.value', '')
  })

  it('C2: Submit vacío muestra error de email requerido', () => {
    cy.get('.login-button').click()
    cy.get('.error-message').should('contain', 'Por favor, ingresa un correo electrónico')
  })

  it('C3: Email inválido reactivo y luego válido limpia el error', () => {
    cy.get('#email').type('dwq')
    cy.get('.error-message').should('contain', 'Por favor, ingresa un correo electrónico válido')

    cy.get('#email').clear().type('user@test.com')
    cy.get('.error-message').should('not.exist')
  })

  it('C4: Submit con password vacío muestra error de password requerido', () => {
    cy.get('#email').type('user@test.com')
    cy.get('.login-button').click()
    cy.get('.error-message').should('contain', 'Por favor, ingresa una contraseña')
  })

  it('C5: Password corto reactivo y luego válido limpia el error', () => {
    cy.get('#password').type('abc')
    cy.get('.error-message').should('contain', 'La contraseña debe tener al menos 4 caracteres')

    cy.get('#password').type('d')
    cy.get('.error-message').should('not.exist')
  })

  it('C6: Éxito de login con credenciales válidas', () => {
    cy.get('#email').clear().type('user@test.com')
    cy.get('#password').clear().type('abcd')
    cy.get('.login-button').click()

    cy.contains('h1', '¡Bienvenido!').should('be.visible')
    cy.contains('p', 'Has iniciado sesión correctamente').should('contain', 'user@test.com')
    cy.get('.error-message').should('not.exist')
  })

  it('C7: Logout vuelve al formulario vacío', () => {
    cy.get('#email').clear().type('user@test.com')
    cy.get('#password').clear().type('abcd')
    cy.get('.login-button').click()

    cy.get('.logout-btn').click()
    cy.get('#email').should('have.value', '')
    cy.get('#password').should('have.value', '')
    cy.get('.error-message').should('not.exist')
  })

  it('F1: El form tiene noValidate', () => {
    cy.get('form').should('have.attr', 'novalidate')
  })

  it('F3: Submit con Enter funciona', () => {
    cy.get('#email').type('user@test.com')
    cy.get('#password').type('abcd{enter}')

    cy.contains('h1', '¡Bienvenido!').should('be.visible')
  })
})
