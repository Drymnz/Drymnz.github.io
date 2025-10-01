function PlatformList({ title, data, dataKey }) {

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
      <h2 className="platforms-title">{title}</h2>
      <div className="platforms-list">
        {data.map((item, index) => (
          <div key={index} className="platform-item">
            <img
              src={getImage(item.Img)}
              alt={item.Title}
              className="platform-icon"
              onError={(e) => console.log('Error en imagen:', item.Img)}
            />
            <span className="platform-name">{item.Title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlatformList;