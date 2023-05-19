
import img1 from "../../images/PagesImg/5.TAIANNY/1.png"
import img2 from "../../images/PagesImg/5.TAIANNY/2.png"
import img3 from "../../images/PagesImg/5.TAIANNY/3.png"
import img4 from "../../images/PagesImg/5.TAIANNY/4.png"

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
          title={"Taianny Santana"}
          description="e-Commercer Shopping Cart"
      
              
        />

        </div>
   
    </section>
  )
}