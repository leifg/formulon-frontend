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
  case "number":
    return parseFloat(value, 10)
  case "checkbox":
    return value === true
  default:
    return value
  }
}
