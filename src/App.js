import { styled } from "styled-components"
import AppRoute from "./routes/AppRoute";

function App() {
  return (
    <StyledApp>
      <AppRoute/>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  text-align: center;
`

export default App;
