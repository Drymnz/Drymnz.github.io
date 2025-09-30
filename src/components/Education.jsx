import EDUCATION_DATA from "../assets/Json/ListEducation.json"

function Education() {
  return (
    <div className="education">
        <h1 className="section-title">purip static class EDUCATION</h1>
        {EDUCATION_DATA.List.map((edu, index) => (
            <div key={index} className="education-item">
                <p><span className="keyword">private void</span> <span className="function">University()</span></p>
                <p className="indent"><span className="keyword">var</span> Level = <span className="string">"{edu.Title}"</span>,</p>
                <p className="indent"><span className="keyword">var</span> Date = <span className="string">"{edu.Year}"</span>,</p>
                <p className="indent"><span className="keyword">var</span> Institution = <span className="string">"{edu.Institution}"</span></p>
            </div>
        ))}
    </div>
  );
}

export default Education;