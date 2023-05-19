import video from "../../videos/iphone_AdobeExpress.webp"
import "../../Styles/components/Video.css"
export default function Video() {
 return (

    <section>
    <div className="video-title">
    <h1>
      Meu <br /> Trabalho
    </h1>
    <p>
      Sites Responsivos, Web e Mobile
      Apps usando React e Typescript
    </p>
    </div>
    <img
      className="video"
      src={video}
      loop={true}
    ></img>

    </section>
        )}