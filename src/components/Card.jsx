const Card = ({personaje}) => {
    return (
        <div className="card">
          <span>El nombre de tu personaje favorito de Marvel es:</span>
          <h3>{personaje.name}</h3>
          <span>Mejor conocido como:</span>
          <h2>{personaje.hero}</h2>
        </div>
    );
};

export default Card;