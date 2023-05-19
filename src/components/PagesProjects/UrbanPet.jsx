
import img1 from "../../images/PagesImg/4.URBAN-PET/1.png"
import img2 from "../../images/PagesImg/4.URBAN-PET/2.png"
import img3 from "../../images/PagesImg/4.URBAN-PET/3.png"
import img4 from "../../images/PagesImg/4.URBAN-PET/4.png"
import img5 from "../../images/PagesImg/4.URBAN-PET/5.png"
import img6 from "../../images/PagesImg/4.URBAN-PET/6.png"
import { ProjectPages } from "../ProjectPages"


export default function UrbanPage() {


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
          title={"Urban Pet"}
     
          style={{ backgroundColor: "white" }}
              
        />

        </div>
   
    </section>
  )
}