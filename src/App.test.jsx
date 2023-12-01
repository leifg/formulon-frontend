import React from "react"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import App from "./App"

describe("displaying of element", () => {
  test("Renders Everything", async () => {
    render(<App />)
    expect(screen.queryAllByTestId("identifier-list")).toHaveLength(1)
    expect(screen.queryAllByTestId("formula-input")).toHaveLength(1)
    expect(screen.queryAllByTestId("formula-output")).toHaveLength(1)
  })

  test("It Correctly Calculates Formula", async () => {
    const result = render(<App />)
    const dataTypeSelector = result.container.querySelector("#data-type-selector")
    fireEvent.change(dataTypeSelector, {target: {value: "Number"}})

    const formulaInput = result.container.querySelector("#formula-input").querySelector("textarea")
    fireEvent.change(formulaInput, {target: {value: "2411 + 1291"}})

    const formulaOutput = await screen.findByTestId("formula-output")

    await waitFor(
      () => expect(formulaOutput).toHaveTextContent("3702")
    )
  })

  test("It shows correct result for example 01", async () => {
    render(<App />)

    fireEvent.click(screen.getByTestId("example01"))

    const formulaOutput = await screen.findByTestId("formula-output")
    await waitFor(
      () => expect(formulaOutput).toHaveTextContent("20")
    )
  })

  test("It shows correct result for example 02", async () => {
    render(<App />)

    fireEvent.click(screen.getByTestId("example02"))

    const formulaOutput = await screen.findByTestId("formula-output")
    await waitFor(
      () => expect(formulaOutput).toHaveTextContent("West")
    )
  })

  test("It shows correct result for example 03", async () => {
    render(<App />)

    fireEvent.click(screen.getByTestId("example03"))

    const formulaOutput = await screen.findByTestId("formula-output")
    await waitFor(
      () => expect(formulaOutput).toHaveTextContent("1250")
    )
  })
})
