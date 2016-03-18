export const defaultMeta = (type) => {
  switch(type) {
    case 'checkbox':
      return {}
    case 'number':
      return { length: 8, scale: 0 }
    default:
      return {}
  }
}
