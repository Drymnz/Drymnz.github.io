import "../components/ProgressCard.css";

function ProgressCard({ title, img, percentage }) {
  return (
    <div className="contentContainer">
      <div className="skillBar">
        <img src={img} alt={title} />
        <h4>{title}</h4>
      </div>
    </div>
  );
}


//Desarrollador Junior: Porcentaje aproximado: alrededor del 20% al 40%.
//Desarrollador Senior: Porcentaje aproximado: alrededor del 70% al 90% o más.

export default ProgressCard;

//<div className="skillBarContainer">
//          <div
//            className="bar"
//            style={{
//              width: `${percentage}%`,
//            }}
//          ></div>
//        </div>