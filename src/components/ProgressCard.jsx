import '../components/ProgressCard.css'

// eslint-disable-next-line react/prop-types
function ProgressCard({ title, img, percentage }) {
    const strokeDashoffset = 290 - (290 * (percentage / 100));
    return (
        <div className="element">
            <div className="box">
                <div className="percent">
                    <svg>
                        <circle cx="45" cy="45" r="45" />
                        <circle
                            cx="45"
                            cy="45"
                            r="45"
                            style={{ strokeDashoffset: `${strokeDashoffset}px` }}
                        />
                    </svg>
                    <div className="number">
                        <img src={img} alt={title} />
                    </div>
                </div>
            </div>
            <h4>{title}</h4>
        </div>
    );
}

//Desarrollador Junior: Porcentaje aproximado: alrededor del 20% al 40%.
//Desarrollador Senior: Porcentaje aproximado: alrededor del 70% al 90% o más.

export default ProgressCard;
