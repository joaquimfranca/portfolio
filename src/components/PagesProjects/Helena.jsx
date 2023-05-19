
import img1 from "../../images/PagesImg/6.HELENA/1.png"
import img2 from "../../images/PagesImg/6.HELENA/2.png"
import img3 from "../../images/PagesImg/6.HELENA/3.png"
import img4 from "../../images/PagesImg/6.HELENA/4.png"
import img5 from "../../images/PagesImg/6.HELENA/5.png"
import img6 from "../../images/PagesImg/6.HELENA/6.png"
import { ProjectPages } from "../ProjectPages"


export default function HelenaPage() {


  return(
    <section>
      <div>
        <ProjectPages
          img1={img1}
          img2={img2}
          img3={img3}
          img4={img4}
          img5={img5}
          img6={img6}
          title={"Helena Andrade"}
          description="Foi proposto o desafio de criar uma marca
           que incorporasse dois elementos distintos: a borboleta e um símbolo grego.
           Unindo dois simbolos (β) de cabeça para baixo atingimos os dois objetivos. Utilizamos
           uma paleta de cor vibrante justamente para destacar a jovialide da cliente. O dourado
           para remeter elegância e o rosa para o lado feminino. "
          style={{ backgroundColor: "white" }}
              
        />

        </div>
   
    </section>
  )
}