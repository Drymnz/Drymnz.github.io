import "../components/ProgressCard.css";

// eslint-disable-next-line react/prop-types
function ProgressCard({ title, img, percentage }) {
  return (
    <div className="contentContainer">
      <div className="skillBar">
        <h4>{title}</h4>
        <img src={img} alt={title} />
        <div className="bar">
          <div className="skillBarContainer">
            <div
              className="skillBarValue "
              style={{
                width: `${percentage}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

//Desarrollador Junior: Porcentaje aproximado: alrededor del 20% al 40%.
//Desarrollador Senior: Porcentaje aproximado: alrededor del 70% al 90% o más.

export default ProgressCard;
