import IBAN from 'iban'

const isValidName = name => (
  !/^[A-Za-z]+$/i.test(name)
)

const isValidEmail = email => (
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
)

const validate = values => {

  const errors = {}

  if (!values.firstName || isValidName(values.firstName)) {
    errors.firstName = 'First name is required'
  }

  if (!values.lastName || isValidName(values.lastName)) {
    errors.lastName = 'Last name is required'
  }

  if (!values.email || isValidEmail(values.email)) {
    errors.email = 'Value should be a valid email'
  }

  if (!values.bankAccounts || !values.bankAccounts.length) {
    errors.bankAccounts = { _error: 'You should provide at least one bank account' }
  } else {
    const bankAccountsErrors = []

    values.bankAccounts.forEach((bank, index) => {
      const bankErrors = {}

      if(!bank || !bank.bankName) {
        bankErrors.bankName = 'Bank name is required'
      }

      if(!bank || !IBAN.isValid(bank.iban)) {
        bankErrors.iban = 'Value shoud be a valid IBAN'
      }

      bankAccountsErrors[index] = bankErrors

    })

    if(bankAccountsErrors.length) {
      errors.bankAccounts = bankAccountsErrors
    }
  }

  return errors
}

export default validate
