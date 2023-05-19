
import img1 from "../../images/PagesImg/3.VICE-VERSA/1.png"
import img2 from "../../images/PagesImg/3.VICE-VERSA/2.png"
import img3 from "../../images/PagesImg/3.VICE-VERSA/3.png"
import img4 from "../../images/PagesImg/3.VICE-VERSA/4.png"

import { ProjectPages } from "../ProjectPages"


export default function ViceVersaPage() {


  return(
    <section>
      <div>
        <ProjectPages
          img1={img1}
          img2={img2}
          img3={img3}
          img4={img4}
          title={"Vice Versa"}
          description="Nesse projeto de capa de album fizemos uma arte conceitual,
           a proposta do artista era uma vibe psicodélica, onde nas canções abordava muito 
           o tema localidade e espaço, então fizemos uma distorção de uma fotografia que nos foi 
           enviada. Como o título do album é Vice Versa, colocamos a fotografia em uma pespectiva 
           contrária a observação padrão. A fotografia original está justamente no verso do disco,
           pra fazer a ligação ''Vice Versa''.
           "
          style={{ backgroundColor: "white" }}
        
         
              
        />

        </div>
   
    </section>
  )
}