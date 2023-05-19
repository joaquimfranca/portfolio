
import "../../src/Styles/components/Card.css";
import { FaReact } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';


export const ProjectCard = ({
  img,
  title,
  showLink = true,
  url1,
  url2,
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
      <button className="Card-btn"><FaReact/><a target="_blank" href={url1}>{" "}Deploy (site)</a> </button>
      <button className="Card-btn"><BsGithub/><a target="_blank" href={url2}>{" "}Repostório Github</a> </button>
      </div>
    </div>
  )
}