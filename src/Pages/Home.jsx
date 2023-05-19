import "../Styles/Home.css";
import Welcome from "../components/Home Components/Welcome";
import Description from "../components/Home Components/Description";
import Video from "../components/Home Components/Video";
import DevProjects  from "../components/DevProjects";
import DesignProjects  from "../components/DesignProjects";

export default function Home() {
  return (
    <>
    <Welcome/>
    <Description/>
    <Video/>
    <DevProjects/>
    <DesignProjects />
    </>
  );
}
