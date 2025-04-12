// eslint-disable-next-line react/prop-types
function Proyect({ title, urlImg, description, useTechnology, urlGithub, isPreview}) {
  return (
    <div className="proyect">
      <h3>{title}</h3>

      {isPreview ? (
        <iframe
          src={urlGithub}
          frameBorder="0"
          allowFullScreen
        />
      ) : (
        <img src={urlImg} alt="" />
      )}
      <p>{description}</p>
      <div>{useTechnology}</div>
      <a href={urlGithub}>Visita nuestra página web</a>
    </div>
  );
}

export default Proyect;
