import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import RegForm from './components/RegForm'

const reducers = {
  form: formReducer
}

const reducer = combineReducers(reducers)
const store = createStore(reducer)

const submit = (values) => {
  alert('Form data: \n' + JSON.stringify(values))
}

render(
  <Provider store={store}>
    <RegForm onSubmit={submit} />
  </Provider>,
  document.getElementById('root')
)
