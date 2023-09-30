const Card = ({ title, desc }) => {
    return (
      <div className="cardComponent">
        <img className="card-img" src="./images/airline_logo.jpg" alt="" />
        <h1>{title} </h1>
        <p>{desc} </p>
      </div>
    );
  };
  
  export default Card;