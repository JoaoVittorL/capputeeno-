import { Container } from "./styles";
import { FiSearch } from "react-icons/fi";

export function InputSearch() {
  return (
    <Container>
      <input type="text" placeholder="Procurando por algo especifico?"/>
      <FiSearch />
    </Container>
  );
}
