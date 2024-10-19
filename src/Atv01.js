import Relogio from "./Relogio";
import Letreiro from "./Letreiro";
import { Link } from "react-router-dom";


function Atv01() {
  return (
    <>
        <h2>Atividade 1</h2>
        <Letreiro />
        <Relogio />

        <Link to="/">Voltar</Link>
    </>
  );
}

export default Atv01;
