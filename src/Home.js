import React from "react";
import { Link } from "react-router-dom";

const Home = ()=>{
    return(
        <div>
            <h1>Página inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Atv01">Aatividade 1</Link>
                    </li>
                    <li>
                        <Link to="/Atv0">Aatividade 2</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Home;