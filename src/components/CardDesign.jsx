
import "../../src/Styles/components/Card.css";

import { Link } from "react-router-dom";

export const ProjectCard2 = ({
  img,
  title,
  showLink = true,
  url,
  description,  
  ...rest
}) => {
  return (
    <div className="project-card" {...rest}>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{description}</h3>
      <h4>{}</h4>
      <div className="buttons">
      <button className="Card-btn"><Link to={url}>{" "}Projeto</Link> </button>
     
      </div>
    </div>
  )
}