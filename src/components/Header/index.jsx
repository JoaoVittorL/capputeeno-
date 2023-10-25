import Link from "next/link";
import { Container } from "./styles";
import { InputSearch } from "../InputSearch";
import { FiShoppingBag } from "react-icons/fi";

export function Header() {
  return (
    <Container>
      <Link
        style={{
          textDecoration: "none",
          fontSize: "40px",
          fontWeight: "700",
          color: "inherit",
        }}
        href="/"
      >
        capputeeno
      </Link>
      <div>
        <InputSearch />
        <FiShoppingBag/>
      </div>
    </Container>
  );
}
