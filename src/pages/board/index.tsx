import NavBar from "components/layout/navbar";
import ProjectBoard from "components/pageComponents/projectBoard";

export default function Board() {
  return (
    <div className="  overflow-hidden h-screen w-screen bg-no-repeat bg-[url('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/cd634b6f5db083968904538191fe3958/photo-1679041006302-cf5e318da08c.jpg')]">
      <NavBar />

      <ProjectBoard />


    </div>
  );
}
