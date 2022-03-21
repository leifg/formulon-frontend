import { evalFormula } from "./formulonUtils"

import { describe, expect, test } from "vitest"

describe("evalFormula", () => {
  test("returns empty string for empty input", () => {
    const expectedOutput = [
      {
        dataType: "text",
        options: {
          length: 0,
        },
        type: "literal",
        value: "",
      },
      null,
    ]

    expect(evalFormula("")).toEqual(expectedOutput)
  })

  test("returns correct result for calculation", () => {
    const expectedOutput = [
      {
        dataType: "number",
        options: {
          length: 1,
          scale: 0,
        },
        type: "literal",
        value: 3,
      },
      null,
    ]

    expect(evalFormula("1 + 2")).toEqual(expectedOutput)
  })
})
