
  import "../Styles/components/DevProjects.css"
  import FourStars from "../images/thumb-dev/FourStars.png";
  import AM from "../images/thumb-dev/AM.png";
  import Rate from "../images/thumb-dev/Rate.png";
  import todo from "../images/thumb-dev/todo.png";
  import AppleBag from "../images/thumb-dev/AppleBag.png";
  import Portfolio from "../images/thumb-dev/Portfolio.png";
  import { ProjectCard } from '../components/Card'
  
  
  export default function DevProjects() {
  
  
    return(
      <section id="projects-grid">
     
        <div className="projects-container">
          <br/><br/>
        <h1 id="title">Projetos <b>Frontend</b></h1>
        <div className="grid">
          <ProjectCard 
            img={AppleBag}
            title="Apple Bag"
            description="Carrinhos de compras e-Commercer"
            url1="https://loja-apple.vercel.app/"
            url2="https://github.com/joaquimfranca/loja-apple"
          />
          <ProjectCard 
            img={AM}
            title="Arctic Monkeys"
            description="Re-build do site do Arctic Monkeys"
            url1="https://am-site-xi.vercel.app/"
            url2="https://github.com/joaquimfranca/AM-site"
          />
          <ProjectCard 
            img={Rate}
            title="Avaliação Interativa"
            description="Desenvolvimento Web em Typescript"
            url1="https://componente-de-avaliacao-interativa.vercel.app/"
            url2="https://github.com/joaquimfranca/Rating"
          />
            <ProjectCard 
              img={todo}  
              title="Lista de Tarefas"
              description="Apenas um lista de tarejas :)"
              url1="https://lista-todo-beta.vercel.app/"
              url2="https://github.com/joaquimfranca/lista-todo"
            />
          <ProjectCard 
            img={FourStars}
            title="Four Stars out Five"
            description="Requisição de API"
            url1="https://4stars.vercel.app/"
            url2="https://github.com/joaquimfranca/4stars"
          />
          <ProjectCard 
            img={Portfolio}
            title="Portfolio em React e Typescript"
            description="Typescript & React App"
            url1="/"
            url2="https://github.com/joaquimfranca/4stars"
          />
          </div>
        </div>
      </section>
    )
  }