import { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import ClearIcon from "@material-ui/icons/Clear";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import "./Users.css";
import { Route, Link, useRouteMatch, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
function AddUser({ getUsers,addFlag,setAddFlag }) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const AdduserData = () => {
    const userData = {
      name: name,
      avatar: avatar,
      createdAt: Date.now(),
    };
    //adding data to the api so only we used post method
    fetch("https://609e2a6033eed80017957df0.mockapi.io/recipies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...userData,
        createdAt: new Date().toISOString(),
      }),
    })
      .then((res) => res.json())
      .then((res) => getUsers());
    console.log(userData);
    setAddFlag(false)
  };

  return (
    <div className="addUserDiv"style={{ display:addFlag? 'block':'none' }}>
      <TextField
        style={{ display: "block", margin: "10px" }}
        onChange={(e) => setName(e.target.value)}
        id="outlined-helperText"
        label="Enter name"
        variant="outlined"
      />
      <TextField
        style={{ display: "block", margin: "10px" }}
        onChange={(e) => setAvatar(e.target.value)}
        id="outlined-helperText"
        label="Enter url"
        variant="outlined"
      />
      <Button
        style={{ display: "block", margin: "10px" }}
        onClick={AdduserData}
        variant="contained"
        color="primary"
      >
        submit
      </Button>
    </div>
  );
}

function Users() {
  // callback & dependency array
  const [users, setUsers] = useState([]);
  const [addFlag,setAddFlag]=useState(false)
  const [name, setName] = useState();
  const [avatar, setAvatar] = useState();
  useEffect(() => getUsers(setUsers), []);
  let { path, url } = useRouteMatch();
  console.log(url);
  // to get all users from API we used GET method
  function getUsers() {
    console.log("User is mounted");

    fetch("https://609e2a6033eed80017957df0.mockapi.io/recipies", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }
  // to delete users from API we used DELETE method
  function deleteUser(id) {
    fetch(`https://609e2a6033eed80017957df0.mockapi.io/recipies/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => getUsers())
      .then((res) => console.log(res));
  }

  const [flag, setFlag] = useState(false);
  return (
    <div id="usersDiv">
        <h3>Users</h3>
      {users.map((user, idx) => (
          <div>
           <div className="card userCard">
                <div  className="card-body userCardBody">
                    <div className="userContent">
                    <p>{user.name}</p>
                    <p 
                    id="lastSeen"
                    >{new Date(user.createdAt).toDateString()}</p>
                    </div>
                    <img 
                    className="usersImage"
                    src={user.avatar} alt=""/>

                </div>
                <div className="card-footer">
                <DeleteIcon
                className="deleteIcon"
            onClick={() => deleteUser(user.id)}
          />
           <Link 
           className="crudIcons"
            to={`${url}/${idx}`}>
            <EditIcon />
          </Link>
                </div>
                <Route path={`${path}/${idx}`}>
            <EditUser
              user={user}
              flag={flag}
              setFlag={setFlag}
              getUsers={getUsers}
              name={name}
              setName={setName}
              avatar={avatar}
              setAvatar={setAvatar}
            />
          </Route>
            </div>
      
        </div>
      ))}
      <Button className="userContent" onClick={()=>setAddFlag(true)}variant="contained" color="primary">
        Add User ?
      </Button>
      

      <AddUser addFlag={addFlag} setAddFlag={setAddFlag}getUsers={getUsers} />
    </div>
  );
}

export { Users };

function EditUser({
  name,
  setName,
  avatar,
  setAvatar,
  flag,
  setFlag,
  getUsers,
  user,
}) {
  const history = useHistory();

  const userData = {
    name: name,
    avatar: avatar,
    createdAt: Date.now(),
  };
  //updating data to the api so only we used put method
  function editUser(user) {
    fetch(`https://609e2a6033eed80017957df0.mockapi.io/recipies/${user.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...userData,
        createdAt: new Date().toISOString(),
      }),
    })
      .then((res) => res.json())
      .then((res) => getUsers());
    console.log(userData);
  }

  return (
    <div
      className="editForm"
    >
      <ClearIcon className="clearIcon" onClick={() => history.goBack()} />
      <TextField 
        style={{
          margin: "20px",
          display: "block",
        }}
        onChange={(e) => setName(e.target.value)}
        id="outlined-helperText"
        label="Enter New Name"
        variant="outlined"
      />
      <TextField
        style={{
          margin: "20px",
          display: "block",
        }}
        onChange={(e) => setAvatar(e.target.value)}
        id="outlined-helperText"
        label="Enter New Url"
        variant="outlined"
      />
      <Button

        id="submitButton"
        onClick={() => {
          editUser(user);
          setFlag(!flag);
        }}
        variant="contained"
        color="primary"
      >
        submit
      </Button>
    </div>
  );
}
