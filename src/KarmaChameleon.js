import { useState } from "react"
import stitches, { darkTheme, funkyTheme } from "./stitches"

const { styled, keyframes } = stitches

const goIn = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(10px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0px)",
    visibility: "visible",
  }
})

const Container = styled("div", {
  alignItems: "center",
  backgroundColor: "$bg",
  color: "$fg",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "100vh",
  transition: "background-color ease-in 0.5s",
  width: "100vw",
  "> h1": {
    animation: `${goIn} ease-in 0.5s`,
  },
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
  animation: `${goIn} ease-in 0.5s`,
  animationFillMode: "forwards",
  backgroundColor: "$bg",
  border: "2px solid",
  borderColor: "$fg",
  borderRadius: "25px",
  boxShadow: "none",
  color: "$fg",
  fontSize: "$rg",
  padding: "$rg $lg",
  visibility: "hidden",
  variants: {
    selected: {
      true: {
        color: "$bg",
        backgroundColor: "$fg",
      },
    },
  },
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
        <Button
          css={{animationDelay: "0.25s"}}
          selected={theme === 'light'}
          onClick={() => setTheme('light')}
        >
          Light
        </Button>
        <Button
          css={{animationDelay: "0.5s"}}
          selected={theme === 'dark'}
          onClick={() => setTheme('dark')}
        >
          Dark
        </Button>
        <Button
          css={{animationDelay: "0.75s"}}
          selected={theme === 'funky'}
          onClick={() => setTheme('funky')}
        >
          Funky
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default App;
