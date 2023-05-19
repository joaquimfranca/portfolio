import video from "../../videos/iphone.mp4"
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
    <video
      className="video"
      src={video}
      autoPlay={true}
      loop={true}
    ></video>

    </section>
        )}