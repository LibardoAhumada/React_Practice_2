
import { useState } from "react";
import CreateUserCard from "./components/CreateUserCard";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [background, setBackground] = useState("");

  const createUser = () => {
    const addUser = "Usuario Agregado";
    const fullUser = "Equipo Completo. ¡Solo se pueden agregar tres usuarios al equipo!."
    if (users.length < 3) {
      let userData = {
        name: name,
        photo: photo
      };
      setUsers([userData, ...users]);
      setMessage(addUser);
      setBackground("bg-success")
    } else {
      setMessage(fullUser); 
      setBackground("bg-danger")
    }
  };

  const nameHandler = (event) => {
    let name = event.target.value;
    setName(name);
  };
  const imgHandler = (event) => {
    let photo = event.target.value;
    setPhoto(photo);
  };
  return (
    <>  
    <h1 className="bg-success text-center  align-items-center rounded">"REACT" Practica 2</h1>  
      <div className="row">
        <div className="col-6 bg-info-subtle h-25 m-4" style={{maxWidth: '540px', border: "3px solid black"}}>
          <form >
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Name </label>
              <input type="text" className="form-control"   onChange={nameHandler}/>
            </div>

            <div className="mb-3">
              <label  className="form-label">Photo</label>
              <input type="text" className="form-control" onChange={imgHandler}/>
            </div>

            <button
              type="button" className="btn btn-primary" onClick={createUser}>Create
            </button>
          </form>         
        </div>
        

        <div className="col-6 d-flex flex-wrap text-center  align-items-center rounded">

        {users.map((user) => {
           const {name, photo} = user;
           return <CreateUserCard Data = {user} photo={photo} />
        }  
         
        )}


       
      </div>
       
      </div>
      <div className="row">
        <div className="col-5 text-center  align-items-center rounded">
         <h2 className={background}><b>{message}</b></h2>
        </div>

      </div>
    </>
  );
}
export default App;