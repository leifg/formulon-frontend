import { evalFormula } from "../utils/formulonUtils"

addEventListener("message", e => {
  const [formula, identifiers] = e.data
  postMessage(evalFormula(formula, identifiers))
})
