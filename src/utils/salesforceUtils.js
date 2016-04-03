export const availableDataTypes = [
  { id: 'number', label: 'Number' },
  { id: 'text', label: 'Text' },
  { id: 'checkbox', label: 'Checkbox' }
]

export const defaultOptions = (type) => {
  switch (type) {
    case 'checkbox':
      return {}
    case 'number':
      return { length: 8, scale: 0 }
    default:
      return {}
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
          options: defaultOptions(identifier.dataType)
        }
      }
    )
  }, {})
}

// private

const coerceData = (value, dataType) => {
  switch (dataType) {
    case 'number':
      return parseInt(value, 10)
    case 'checkbox':
      return value === true
    default:
      return value
  }
}
