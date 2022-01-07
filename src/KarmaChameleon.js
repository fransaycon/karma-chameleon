import { useState } from "react"
import stitches, { darkTheme, funkyTheme } from "./stitches"

const { styled } = stitches

const Container = styled("div", {
  alignItems: "center",
  backgroundColor: "$bg",
  color: "$fg",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "100vh",
  width: "100vw",
  transition: "background-color ease-in 0.5s",
})

const ButtonContainer = styled("div", {
  display: "flex",
  fontSize: "$xxl",
  marginTop: "$lg",
  maxWidth: "1200px",
  flexDirection: "column",
  "@bp2": {
    flexDirection: "row",
  },
  "> button": {
    "+ button": {
      marginTop: "$lg",
      "@bp2": {
        marginTop: 0,
        marginLeft: "$lg",
      },
    },
  },
})

const Button = styled("button", {
  backgroundColor: "$bg",
  border: "2px solid",
  borderColor: "$fg",
  borderRadius: "25px",
  boxShadow: "none",
  color: "$fg",
  fontSize: "$rg",
  padding: "$rg $lg",
  "&:hover": {
    cursor: "pointer",
  },
})

const themeMap = {
  light: null,
  dark: darkTheme,
  funky: funkyTheme,
}

const App = () => {
  const [theme, setTheme] = useState('light')

  return (
    <Container className={themeMap[theme]}>
      <h1>Karma Chameleon</h1>
      <ButtonContainer>
        <Button onClick={() => setTheme('light')}>Light</Button>
        <Button onClick={() => setTheme('dark')}>Dark</Button>
        <Button onClick={() => setTheme('funky')}>Funky</Button>
      </ButtonContainer>
    </Container>
  );
}

export default App;
