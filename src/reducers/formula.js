import { extract, parse, toString } from 'formulon'
import { transformIdentifiers } from '../utils/salesforceUtils'

export const formulaReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_FORMULA':
      return applyFormulaChange(action.value, replaceIdentifiers(action.value, state.identifiers), state)
    case 'CHANGE_IDENTIFIER_TYPE':
      return applyFormulaChange(state.inputFormula, updateIdentiferType(state.identifiers, action.name, action.value), state)
    case 'CHANGE_IDENTIFIER_VALUE':
      return applyFormulaChange(state.inputFormula, updateIdentiferValue(state.identifiers, action.name, action.value), state)
    case 'CHANGE_IDENTIFIER_OPTIONS':
      return applyFormulaChange(state.inputFormula, updateIdentiferOptions(state.identifiers, action.name, action.value), state)
    case 'CHANGE_IDENTIFER_PICKLIST_VALUES':
      return {
        ...state,
        identifiers: updatePicklistValues(state.identifiers, action.name, action.values),
      }
    default:
      return state
  }
}

export const initialState = {
  inputFormula: '',
  identifiers: [],
  result: '',
  lastError: null,
}

function replaceIdentifiers(formula, existingIdentifiers) {
  return extract(formula).map( identifierName => {
    const existing = existingIdentifiers.find( existing => existing.name === identifierName )

    if(existing) {
      return existing
    }

    return {
      name: identifierName,
      dataType: 'text',
      value: defaultValue('text'),
      options: defaultOptions('text')
    }})
}

function defaultOptions(type) {
  switch(type) {
    case 'text':
      return { length: 255 }
    case 'number':
      return { length: 8, scale: 0 }
    case 'picklist':
    case 'multipicklist':
      return { values: [] }
    default:
      return {}
  }
}

function defaultValue(type) {
  switch(type) {
    case 'text':
      return ''
    case 'date':
      return new Date()
    case 'checkbox':
      return false
    case 'geolocation':
      return [null, null]
    case 'multipicklist':
      return []
    default:
      return null
  }
}

function updateIdentiferType(identifiers, name, type) {
  return identifiers.map((identifier) => {
    if (identifier.name !== name) {
      return identifier
    }
    return {
      ...identifier,
      dataType: type,
      value: defaultValue(type),
      options: defaultOptions(type)
    }
  })
}

function updateIdentiferValue(identifiers, name, value) {
  return identifiers.map((identifier) => {
    if (identifier.name !== name) {
      return identifier
    }
    return {
      ...identifier,
      value: value,
    }
  })
}

function updatePicklistValues(identifiers, name, values) {
  return identifiers.map((identifier) => {
    if (identifier.name !== name) {
      return identifier
    }
    return {
      ...identifier,
      options: Object.assign(identifier.options, { values: values }),
    }
  })
}

function updateIdentiferOptions(identifiers, name, options) {
  return identifiers.map((identifier) => {
    if (identifier.name !== name) {
      return identifier
    }
    return {
      ...identifier,
      options: options,
    }
  })
}

function evalFormula(formula, identifiers) {
  const parsedFormula = parse(formula, transformIdentifiers(identifiers))

  if(parsedFormula.type === 'error') {
    return [parsedFormula, `${parsedFormula.errorType}: ${parsedFormula.message}`]
  }

  return [parsedFormula, null]
}

function applyFormulaChange(inputFormula, identifiers, state) {
  const [parsedFormula, error] = evalFormula(inputFormula, identifiers)

  return {
    ...state,
    inputFormula: inputFormula,
    identifiers: identifiers,
    result: error ? state.result : toString(parsedFormula),
    lastError: error,
  }
}
