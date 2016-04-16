export const availableDataTypes = [
  { id: 'number', label: 'Number' },
  { id: 'text', label: 'Text' },
  { id: 'checkbox', label: 'Checkbox' }
]

export const defaultIdentifier = (type = availableDataTypes[0].id) => {
  return {
    dataType: type,
    value: defaultValue(type),
    options: defaultOptions(type)
  }
}

export const defaultOptions = (type) => {
  switch (type) {
    case 'checkbox':
      return {}
    case 'number':
      return { length: 8, scale: 0 }
    case 'text':
      return { length: 255 }
    default:
      return {}
  }
}

export const defaultValue = (type) => {
  switch (type) {
    case 'checkbox':
      return false
    default:
      return null
  }
}

export const transformIdentifiers = (identifersList = []) => {
  return identifersList.reduce((agg, identifier) => {
    return Object.assign(
      agg,
      {
        [identifier.name]: {
          value: coerceData(identifier.value, identifier.dataType),
          dataType: identifier.dataType,
          options: identifier.options
        }
      }
    )
  }, {})
}

// private

const coerceData = (value, dataType) => {
  switch (dataType) {
    case 'number':
      return parseFloat(value, 10)
    case 'checkbox':
      return value === true
    default:
      return value
  }
}
