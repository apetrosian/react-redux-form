import validate from './validate'

const values = {
  firstName: '',
  lastName: '',
  email: '',
  bankAccounts: []
}

describe('validate', () => {
  it('should return validation object', () => {

    expect(validate(values)).toBeDefined()
  })

  it('shoud contain First Name validation error', () => {

    expect(validate(values)).toHaveProperty('firstName',
      'First name is required'
    )
  })
})
