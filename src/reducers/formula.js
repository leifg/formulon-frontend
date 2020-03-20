import { extract, toString } from 'formulon'

export const formulaReducer = (state, action) => {
  switch (action.type) {
    case 'OVERWRITE_FORMULA':
      return requestFormulaChange(action.formula, action.identifiers, state)
    case 'UPDATE_FORMULA_RESULT':
      return updateFormulaResult(action.parsedFormula, action.error, state)
    case 'REQUEST_FORMULA_CHANGE':
      return requestFormulaChange(action.value, replaceIdentifiers(action.value, state.identifiers), state)
    case 'REQUEST_IDENTIFIER_TYPE_CHANGE':
      return requestFormulaChange(state.inputFormula, updateIdentiferType(state.identifiers, action.name, action.value), state)
    case 'REQUEST_IDENTIFIER_VALUE_CHANGE':
      return requestFormulaChange(state.inputFormula, updateIdentiferValue(state.identifiers, action.name, action.value), state)
    case 'REQUEST_IDENTIFIER_OPTIONS_CHANGE':
      return requestFormulaChange(state.inputFormula, updateIdentiferOptions(state.identifiers, action.name, action.value), state)
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
  processing: false,
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

function requestFormulaChange(inputFormula, identifiers, state) {
  return {
    ...state,
    inputFormula: inputFormula,
    identifiers: identifiers,
    processing: true,
  }
}

function updateFormulaResult(parsedFormula, error, state) {
  return {
    ...state,
    result: error ? state.result : toString(parsedFormula),
    lastError: error,
    processing: false,
  }
}
