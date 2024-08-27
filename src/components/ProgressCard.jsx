import '../components/ProgressCard.css'

// eslint-disable-next-line react/prop-types
function ProgressCard({ title, img , percentage }) {
    return (
        <div className="technology">
            <h1>{title}</h1>
            <img src={img} alt={title} />
            <h3>{percentage}</h3>
        </div>
    );
}
//Desarrollador Junior: Porcentaje aproximado: alrededor del 20% al 40%.
//Desarrollador Senior: Porcentaje aproximado: alrededor del 70% al 90% o más.

export default ProgressCard;
