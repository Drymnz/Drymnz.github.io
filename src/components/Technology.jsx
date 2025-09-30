import TECHNOLOGY_DATA from "../assets/Json/ListTechnology.json"

function Technology() {
  return (
    <div className="platforms">
        <h2 className="platforms-title">enum PLATFORMS</h2>
        <div className="platforms-list">
            {TECHNOLOGY_DATA.Technology.map((tech, index) => (
                <div key={index} className="platform-item">
                    <img src={tech.Img} alt={tech.Title} className="platform-icon" />
                    <span className="platform-name">{tech.Title}</span>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Technology;