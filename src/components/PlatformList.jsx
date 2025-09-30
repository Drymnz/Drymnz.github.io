function PlatformList({ title, data, dataKey }) {
  return (
    <div className="platforms">
        <h2 className="platforms-title">{title}</h2>
        <div className="platforms-list">
            {data.map((item, index) => (
                <div key={index} className="platform-item">
                    <img src={item.Img} alt={item.Title} className="platform-icon" />
                    <span className="platform-name">{item.Title}</span>
                </div>
            ))}
        </div>
    </div>
  );
}

export default PlatformList;