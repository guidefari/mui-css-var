import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import { Container } from "@mui/material"
import { Button } from "./styles"

function App() {
  return (
    <>
      <h1>
        <ul>
          <li>the container below is styled using MUI's sx object</li>
          <li>that purple color is --primary-dark-whitelabelled</li>
        </ul>
      </h1>
      <code>
        {`<Container
            maxWidth="xl"
            className="App"
            sx={{ backgroundColor: "var(--primary-dark-whitelabelled)" }}>`}
        <br />
        <br />
      </code>
      <Container
        maxWidth="xl"
        className="App"
        // so we can either use the sx prop, or styles.ts to use css variables
        sx={{ backgroundColor: "var(--primary-dark-whitelabelled)" }}
      >
        <h1>MUI Button + styles.ts + css var</h1>
        <Button variant="contained">
          {`background-color: var(--custom-success)`}
        </Button>
        <ul>
          <li>
            these css vars are injected into the dom via a separate/custom css
            file. similar to what our php asset file can provide per tenant.
          </li>
        </ul>
      </Container>
    </>
  )
}

export default App
