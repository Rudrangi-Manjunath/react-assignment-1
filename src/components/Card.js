function Card(props) {
  return (
    <div className="card">
      <div className="card-header text-dark">
        <b>{props.name}</b>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.sport}</h5>
        <p className="card-text">Age: {props.age}</p>
        <p className="card-text">Country: {props.country}</p>
      </div>
    </div>
  );
}

export default Card;
