import TECHNOLOGY_DATA from "../assets/Json/ListTechnology.json"
//https://www.svgrepo.com/show/376337/node-js.svg

function Technology() {
  const getImage = (imageName) => {
    try {
      // Intenta cargar la imagen
      return new URL(`../assets/Img/list_icos/${imageName}`, import.meta.url).href;
    } catch (error) {
      console.error('Error cargando imagen:', imageName, error);
      return '';
    }
  };

  return (
    <div className="platforms">
      <h2 className="platforms-title">enum TECHNOLOGIES</h2>
      <div className="platforms-list">
        {TECHNOLOGY_DATA.Technology.map((tech, index) => (
          <div key={index} className="platform-item">
            <img 
              src={getImage(tech.Img)} 
              alt={tech.Title} 
              className="platform-icon" 
              onError={(e) => console.log('Error en imagen:', tech.Img)}
            />
            <span className="platform-name">{tech.Title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technology;