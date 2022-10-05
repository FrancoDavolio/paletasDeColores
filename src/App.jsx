import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";
import Container from "react-bootstrap/Container";
import "./App.css";

function App() {
  return (
    <Container className="my-5">
      <Formulario></Formulario>
    </Container>
  );
}

export default App;
