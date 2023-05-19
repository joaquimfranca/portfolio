import "../Styles/globalProjectPages.css"

export const ProjectPages = ({
    img1, img2, img3, img4, img5, img6,
    description,
    title,
    style
  }) => {
  return (
    
    <>
     <div className="content" style={style}>
        <div className="global-cover">
          {" "}
          <img src={img1} />
          <h2>{title}</h2>
        </div>
        
        <div className="brand">
         
          <h2>Objetivo:</h2>
          <p>
          {description}
          </p>
         
          <img src={img2} />
        </div>
        <div className="global-grid">
          <h2>Aplicações:</h2>
  
          <img src={img3} />
          <img src={img4} />
          <img src={img5} />
          <img src={img6} />
          <img src={img1} />
          <img src={img2} />
        </div>
      </div>
    </>
  );
}
