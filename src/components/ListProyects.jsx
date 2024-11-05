import Proyect from "./Proyect";
import "./Proyect.css";
import LIST_PROYECT from "../assets/Json/ListProyect.json";

// eslint-disable-next-line react/prop-types
function ListProyects({ refDiv }) {
  const listProyects = LIST_PROYECT.List;
  return (
    <>
    <h2 ref={refDiv}>Proyectos</h2>
      <div className="proyects">
        {listProyects.map((proyect, index) => (
          <Proyect
            key={`${proyect.Title}-${index}`}
            title={proyect.Title}
            urlImg={proyect.UrlImg}
            description={proyect.Description}
            useTechnology={proyect.UseTechnology}
            urlGithub={proyect.Link}
          />
        ))}
      </div>
    </>
  );
}

export default ListProyects;
