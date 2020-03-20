import { parse } from 'formulon'
import { transformIdentifiers } from './salesforceUtils'

export const evalFormula = (formula, identifiers) => {
  const parsedFormula = parse(formula, transformIdentifiers(identifiers))

  if(parsedFormula.type === 'error') {
    return [parsedFormula, `${parsedFormula.errorType}: ${parsedFormula.message}`]
  }

  return [parsedFormula, null]
}
