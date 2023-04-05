import LandingCSS from "./Landing.module.css"
import { Link} from "react-router-dom";

function Landing(){

    return(
    <div className={LandingCSS.container}>
        <Link to={"/encrypt"}>
            <button 
                class={LandingCSS.button}
                >Ejercicio Encriptación
            </button>
        </Link>



        <button class={LandingCSS.button}>Ejercicio CRUD</button>
    </div>)
}

export {Landing};