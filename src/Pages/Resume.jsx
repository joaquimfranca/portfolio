import "../Styles/Resume.css";

import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import perfil from "../images/my-photo.png";
import inss from "../images/inss.png";
import pet from "../images/pet.png";
export default function Resume() {
  return (
    <>
      <div className="main-resume">
        <article>
          <div className="sumary">
            <div className="icons-resume">
              <a
                href="https://www.linkedin.com/in/joaquim-franca/"
                target="_blank"
              >
                <BsLinkedin />
              </a>
              <a href="https://github.com/joaquimfranca" target="_blank">
                <BsGithub />
              </a>
              <a href="https://www.instagram.com/thejojoca/" target="_blank">
                <BsInstagram />
              </a>
            </div>
            <div className="intro">
              <div className="intro-text">
                <h1>Joaquim França</h1>
                <h2 className="h2-sumary">
                  Desenvolvedor especialista em Frontend e Engenheiro de
                  Experiência do Usuário (UX)".
                </h2>
                <p className="p-sumary">
                  Valorizo impulsionar experiências web
                  acessíveis de alta performance, 
                  amigáveis ao usuário e responsivos.
                </p>
              </div>
              <div className="div-perfil">
                {" "}
                <img src={perfil}></img>
              </div>
            </div>
            <section className="brief">
              <h1>Apresentação</h1>
              <span>
                Como um jovem engenheiro de software e designer, estou
                profundamente comprometido com a indústria de tecnologia,
                constantemente procurando oportunidades para expandir meu
                conhecimento e compartilhar minha experiência com outras
                pessoas. Possuo habilidades em desenvolvimento front-end, com
                foco no desenvolvimento de sites para comércio eletrônico e na
                construção e desenvolvimento de aplicativos de alto desempenho.
              </span>
            </section>
            <div className="skills">
              <h1>Skills</h1>
              <p>
              -JavaScript
      -TypeScript
      -HTML 5
      -CSS3
      -UI/UX
      -Figma
      -Bootstrap
<br />
      -Interfaces responsivas
      -API Rest
      -Swagger
      -Insomnia
      -Inglês avançado/fluente.
               
              </p>
            </div>
            <div className="experience">
              <h1>Experiência Profissional</h1>
              <div className="back-topic">
                <div className="container-topic">
                  <div className="head-topic">
                    <h2>Estágiario(TI) | GEX INSS</h2>
                    <h3>
                      <b>Desenvolvedor Front-end. </b>  Janeiro 2017 - Abril 2018
                    </h3>
                  </div>
                  <div className="img-topic">
                    <img src={inss}></img>
                  </div>
                </div>

                <span>
                  Na GEX, minhas principais atribuições foram implementar novas
                  soluções com base na melhoria da eficiência do sistema interno
                  no setor da corregedoria, melhorando o layout e outras
                  funcionalidades.<br/>
                  Trabalhamos como uma equipe de quatro
                  pessoas.<br/><br/>
                  -Estabelecemos um sistema de design robusto para
                  garantir uniformidade em toda a aplicação.<br/><br/>
                  -Removemos códigos
                  inativos, resultando em uma redução de aproximadamente 15% no
                  tamanho de cada pacote de página.
                </span>
              </div>

              <div className="back-topic">
                <div className="container-topic">
                  <div className="head-topic">
                    <h2>Desenvolvimento e-Comercial | Pet Shop Amarelo</h2>
                    <h3>
                      <b>Desenvolvedor Front-end.</b> Julho 2019 - Janeiro 2023
                    </h3>
                  </div>
                  <div className="img-topic">
                    <img src={pet}></img>
                  </div>
                </div>
                <span>
                  Como Engenheiro Frontend Pleno no Pet Shop Amarelo, fui
                  responsável por criar, implementar e documentar novas soluções
                  com base nos requisitos dos clientes para desenvolver, criar
                  novos recursos ou solucionar bugs no sistema de controle da
                  empresa.
                </span>
              </div>
            </div>

            <div className="education">
              <h1>Educação</h1>
              <div className="back-topic">
                <h2>Graduação</h2>
                <span>
                  2017- Bacharelado em Sistema de informação – Universidade
                  Maurício de Nassau – Incompleto{" "}
                </span>
                <br />
                <span>
                  2022 - Udemy: Node JS,React,React Native, Typescript -
                  Completo
                </span>
                <br />
                <span>
                  2023- Bacharelado em Análise e Desenvolvimento de Sistema –
                  Uninassau – Cursando{" "}
                </span>
              </div>
              <h1>Idioma</h1>
              <div className="back-topic">
                <br />
                <span>Português - Nativo</span>
                <br />
                <span>
                  Inglês - C2 - Proficiente Avançado (CNA- Completo 2007-2012)
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
