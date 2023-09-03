const CreateUserCard = ({Data}) =>{
  const {name, photo} = Data;
  return (
  <div className="card w-25 m-3" style={{maxWidth: '540px', border: "3px solid black"}}>
    <img
      src={photo}
      className="card-img-top"             
      alt="..."
    />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <a href="#" className="btn btn-primary">
        Guardar
      </a>
    </div>
  </div>
  )
}

export default CreateUserCard;