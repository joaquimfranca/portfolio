
import img1 from "../../images/PagesImg/1.HELOIZA/1.png"
import img2 from "../../images/PagesImg/1.HELOIZA/2.png"
import img3 from "../../images/PagesImg/1.HELOIZA/3.png"
import img4 from "../../images/PagesImg/1.HELOIZA/4.png"
import img5 from "../../images/PagesImg/1.HELOIZA/5.png"
import img6 from "../../images/PagesImg/1.HELOIZA/6.png"
import { ProjectPages } from "../ProjectPages"


export default function HeloizaPage() {


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
          description=" O desafio foi criar uma marca que transmitisse os conceitos de elegância e seriedade.
           A identidade da cliente tem uma linguagem visual marcante e sútil, além de ser totalmente expansível para os diversos desdobramentos, online ou offline.
           A tipografia representa conceitos importantes da marca, combinado as inicias de Heloiza Andrade com os traços do elemento feminino, juntamente com uma paleta de cores usando o bordô que remetem a elegância."
    
          title={"Heloiza Andrade"}
          style={{ backgroundColor: "white" }}
              
        />

        </div>
   
    </section>
  )
}