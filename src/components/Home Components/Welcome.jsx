
import "../../Styles/components/Welcome.css"
import test from "../../images/Welcome.png";


export default function Welcome() {
  
    return ( <section>
        <div className="cavalier_content">
          <p>Design. Construir. Melhorar.</p>
          <span>
            {" "}
            <h1 className="title">
              Frontend <br /> Developer
            </h1>
          </span>
          <p>
          Gosto de criar soluções em front-end robustas e responsivas
          ​​que oferecem ótimas experiências ao usuário.
          </p>
        </div>
        <div className="imagem">
          {" "}
          <img src={test}></img>
        </div>
      </section> )}
      
       