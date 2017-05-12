import React from 'react'
import {render} from 'react-dom'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './validate'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input className="form-control" {...input} type={type} />
      {touched && error && <span className="text-danger">{error}</span>}
    </div>
  </div>
)

const renderBankList = ({ fields, meta: { touched, error, submitFailed } }) => (
  <div>
    <h3>Bank accounts</h3>
    {fields.map((bank, index) => (
      <div key={index} className="separator row">
        <div className="col-xs-10">
          <Field
            name={`${bank}.iban`}
            type="text"
            component={renderField}
            label="IBAN"
            />
          <Field
            name={`${bank}.bankName`}
            type="text"
            component={renderField}
            label="Name"
            />
        </div>
        <div className="col-xs-2 spacer">
          <button
            type="button"
            className="btn btn-default"
            onClick={() => fields.remove(index)}>
            <span
              className="glyphicon glyphicon-trash"
              aria-hidden="true">
            </span>
          </button>
        </div>
      </div>
    ))}
    <div className="spacer text-center">
      {(touched || submitFailed) && error && <p className="text-danger">{error}</p>}
      <button className="btn btn-default" type="button" onClick={() => fields.push({})}> + Add Bank</button>
    </div>
  </div>
)

class RegForm extends React.Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="firstName"
          type="text"
          component={renderField}
          label="First Name"
          />
        <Field
          name="lastName"
          type="text"
          component={renderField}
          label="Last Name"
          />
        <Field
          name="email"
          type="text"
          component={renderField}
          label="Email"
          />
        <div className="separator">
          <FieldArray name="bankAccounts" component={renderBankList} />
        </div>
        <div className="text-right">
          <button type="submit" className="btn btn-warning btn-lg">Submit</button>
        </div>
      </form>
    )
  }
}

RegForm = reduxForm({
  form: 'registr',
  validate
})(RegForm)

export default RegForm
