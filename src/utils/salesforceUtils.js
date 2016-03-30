export const defaultMeta = (type) => {
  switch (type) {
    case 'checkbox':
      return {}
    case 'number':
      return { length: 8, scale: 0 }
    default:
      return {}
  }
}

export const availableDataTypes = [
  { id: 'number', label: 'Number' },
  { id: 'text', label: 'Text' },
  { id: 'checkbox', label: 'Checkbox' }
]
