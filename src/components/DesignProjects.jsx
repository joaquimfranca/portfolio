
import "../Styles/components/DevProjects.css"
import Heloiza from "../images/thumb-design/Heloiza.png"
import PetAmarelo from "../images/thumb-design/PetAmarelo.png"
import ViceVersa from "../images/thumb-design/ViceVersa.png"
import UrbanPet from "../images/thumb-design/UrbanPet.png"
import Taianny from "../images/thumb-design/Taianny.png"
import Helena from "../images/thumb-design/Helena.png"
import { ProjectCard2 } from '../components/CardDesign'


export default function DesignProjects() {


  return(
    <section id="projects-grid">
   
      <div className="projects-container">
      <h1 id="title">Projetos <b>Design</b></h1>
      <div className="grid">
        <ProjectCard2
          img={Heloiza}
          title="Heloiza Andrade"
          description="Branding e Identidade Visual"
          url="/work/Heloiza-Andrade"
       
        />
        <ProjectCard2 
          img={PetAmarelo}
          title="Pet Amarelo"
          description="Branding e Identidade Visual"
          url="/work/Pet-Amarelo"
        
        />
        <ProjectCard2 
          img={ViceVersa}
          title="Vice Versa"
          description="Branding"
          url="/work/Vice-Versa"
         
        />
          <ProjectCard2 
            img={UrbanPet}
            title="Urban Pet"
            description="Branding e Identidade Visual"
            url="/work/Urban-Pet"
          />
        <ProjectCard2 
          img={Taianny}
          title="Taianny Santana"
          description="Branding"
          url="/work/taianny-santana"
        
        />
        <ProjectCard2 
          img={Helena}
          title="Helena Andrade"
          description="Branding"
          url="/work/Helena-andrade"
        />
        </div>
      </div>
    </section>
  )
}