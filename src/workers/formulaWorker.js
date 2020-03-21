import { evalFormula } from '../utils/formulonUtils'

export const parseFormula = (formula, identifiers) => {
  return evalFormula(formula, identifiers)
}
