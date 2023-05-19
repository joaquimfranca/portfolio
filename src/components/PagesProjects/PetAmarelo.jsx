
import img1 from "../../images/PagesImg/2.PET-AMARELO/1.png"
import img2 from "../../images/PagesImg/2.PET-AMARELO/2.png"
import img3 from "../../images/PagesImg/2.PET-AMARELO/3.png"
import img4 from "../../images/PagesImg/2.PET-AMARELO/4.png"
import img5 from "../../images/PagesImg/2.PET-AMARELO/5.png"
import img6 from "../../images/PagesImg/2.PET-AMARELO/6.png"

import { ProjectPages } from "../ProjectPages"


export default function PetAmareloPage() {


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
          title={"Pet Amarelo"}
          description="O desafio foi projetar uma marca que transmitisse descontração, alegria, algo lúdico, que é exatamente o que a área de Pet Shop necessita, 
           outro pedido também foi que destacasse o amarelo. A ideia da identidade visual era linkar com o nome e fazer as pessoas lembrarem do petshop através da cor."
          style={{ backgroundColor: "white" }}
              
        />

        </div>
   
    </section>
  )
}