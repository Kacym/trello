import { styled } from "styled-components"
import LoginForm from "./components/login-form/LoginForm";

function App() {
  return (
    <StyledApp>
      <LoginForm/> 
    </StyledApp>
  );
}

const StyledApp = styled.div`
  text-align: center;
`

export default App;
