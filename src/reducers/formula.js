import { extract, toString } from "formulon"

export const formulaReducer = (state, action) => {
  switch (action.type) {
  case "TOGGLE_HELP":
    return {
      ...state,
      helpOpen: !state.helpOpen,
    }
  case "UPDATE_RETURN_TYPE":
    return {
      ...state,
      lastError: updateFormulaError(state.lastError, state.lastReturnType, action.value),
      returnType: action.value,
    }
  case "OVERWRITE_FORMULA":
    return requestFormulaChange(action.formula, action.identifiers, action.returnType, state)
  case "UPDATE_FORMULA_RESULT":
    return updateFormulaResult(action.parsedFormula, action.error, state)
  case "REQUEST_FORMULA_CHANGE":
    return requestFormulaChange(action.value, replaceIdentifiers(action.value, state.identifiers), null, state)
  case "REQUEST_IDENTIFIER_TYPE_CHANGE":
    return requestFormulaChange(state.inputFormula, updateIdentifierType(state.identifiers, action.name, action.value), null, state)
  case "REQUEST_IDENTIFIER_VALUE_CHANGE":
    return requestFormulaChange(state.inputFormula, updateIdentifierValue(state.identifiers, action.name, action.value), null, state)
  case "REQUEST_IDENTIFIER_OPTIONS_CHANGE":
    return requestFormulaChange(state.inputFormula, updateIdentifierOptions(state.identifiers, action.name, action.value), null, state)
  case "REGISTER_WORKER":
    return registerWorker(action.worker, state)
  case "TERMINATE_WORKERS":
    return registerWorker(null, state)
  case "CHANGE_IDENTIFIER_PICKLIST_VALUES":
    return {
      ...state,
      identifiers: updatePicklistValues(state.identifiers, action.name, action.values),
    }
  default:
    return state
  }
}

export const initialState = {
  inputFormula: "",
  identifiers: [],
  result: "",
  processing: false,
  returnType: "text",
  lastReturnType: "text",
  lastError: null,
  currentWorker: null,
  helpOpen: false,
}

const replaceIdentifiers = (formula, existingIdentifiers) => {
  return extract(formula).map( identifierName => {
    const existing = existingIdentifiers.find( existing => existing.name === identifierName )

    if(existing) {
      return existing
    }

    return {
      name: identifierName,
      dataType: "text",
      value: defaultValue("text"),
      options: defaultOptions("text")
    }})
}

const defaultOptions = (type) => {
  switch(type) {
  case "text":
    return { length: 255 }
  case "number":
    return { length: 8, scale: 0 }
  case "picklist":
  case "multipicklist":
    return { values: [] }
  default:
    return {}
  }
}

const defaultValue = (type) => {
  switch(type) {
  case "text":
    return ""
  case "checkbox":
    return false
  case "geolocation":
    return [null, null]
  case "multipicklist":
    return []
  default:
    return null
  }
}

const updateIdentifierType = (identifiers, name, type) => {
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

const updateIdentifierValue = (identifiers, name, value) => {
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

const updatePicklistValues = (identifiers, name, values) => {
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

const updateIdentifierOptions = (identifiers, name, options) => {
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

const requestFormulaChange = (inputFormula, identifiers, returnType, state) => {
  return {
    ...state,
    returnType: returnType ? returnType : state.returnType ,
    inputFormula: inputFormula,
    identifiers: identifiers,
    processing: state.inputFormula !== inputFormula || state.identifiers !== identifiers,
  }
}

const updateFormulaResult = (parsedFormula, error, state) => {
  return {
    ...state,
    result: error ? state.result : toString(parsedFormula),
    lastReturnType: parsedFormula.dataType,
    lastError: updateFormulaError(error, parsedFormula.dataType, state.returnType),
    processing: false,
  }
}

const updateFormulaError = (lastError, actualReturnType, expectedReturnType) => {

  if (lastError) {
    return lastError
  }

  if (actualReturnType !== expectedReturnType) {
    return `Formula result is data type (${actualReturnType}), incompatible with expected data type (${expectedReturnType}).`
  }

  return null
}

const registerWorker = (worker, state) => {
  if(state.currentWorker) state.currentWorker.terminate()

  return {
    ...state,
    currentWorker: worker
  }
}
