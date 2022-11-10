import styled from "@emotion/styled"
import { Button as MuiButton } from "@mui/material"

// another example of using css variables with MUI component
export const Button = styled(MuiButton)`
  background-color: var(--custom-success);
`
