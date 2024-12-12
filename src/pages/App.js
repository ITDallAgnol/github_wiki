import gitLogo from "../assets/github.png";

import {Container} from "./styles";

function App() {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo"/>
      ola
    </Container>
  );
}

export default App;
