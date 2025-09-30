import EXPERIENCE_DATA from "../assets/Json/ListProyect.json"

function Experience() {
  return (
    <div className="experience">
        <h1 className="section-title">public static EXPERIENCE</h1>
        {EXPERIENCE_DATA.List.map((exp, index) => (
            <div key={index} className="experience-item">
                <p className="comment">// {exp.Description}</p>
                <p><span className="keyword">public void</span> <span className="function">{exp.Title.replace(/\s+/g, '')}</span></p>
                <p className="indent"><span className="keyword">var</span> UseTechnology = <span className="string">"{exp.UseTechnology}"</span></p>
                <p className="indent"><span className="keyword">var</span> Link = <a href={exp.Link} target="_blank" rel="noopener noreferrer" className="string">"{exp.Link}"</a></p>
            </div>
        ))}
    </div>
  );
}

export default Experience;