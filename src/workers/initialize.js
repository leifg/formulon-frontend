import FormulaWorker from './formulaWorker.js?worker'
import { evalFormula } from "../utils/formulonUtils"

class MockWorker {
  constructor() {
    this.onmessage = () => {}
  }

  postMessage(msg) {
    const [formula, identifiers] = msg
    const returnMessage = { data: evalFormula(formula, identifiers) }
    this.onmessage(returnMessage)
  }

  terminate() {}
}

export const initializeWorker = () => {
  if (typeof(Worker) !== "undefined") {
    return new FormulaWorker()
  } else {
    return new MockWorker()
  }  
}
