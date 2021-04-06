import { useState } from 'react';
import AddUserForm from './AddUserForm';
import './App.css';
import UserTable from './tables/UserTables';
import EditFormUser from './EditUserForm';
import EditUserForm from './EditUserForm';


function App() {

  const userData = [
    {id: 1, name: "Munna", username: "munna@kumar"},
    {id: 2, name: "Shanu", username: "shanu@kumar"},
    {id: 3, name: "Aman", username: "aman@kumar"},
  ]

  const initialFormState = {id: null, name: '', username:''}
  
  

  const [users, setUsers] = useState(userData);
  // edit state
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialFormState)

  //add Uaser
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  // delete user
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  //edit
  const editRow = (user) => {
    setEditing(true)

    setCurrentUser({id: user.id, name: user.name, username: user.username})
  }  

  //update
  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id == id ? updatedUser : user)))
  }

  

return (
    <div className="App">
       <div>
       <h1>Crud App with hook</h1>
       {editing ? (
         <div>
         <h2>Edit User</h2>
       <EditUserForm setEditing={setEditing}
                     currentUser={currentUser}
                     updateUser={updateUser} />
         </div>
       ): (
         <div>
         <h2>Add User</h2>

       <AddUserForm addUser={addUser} />
         </div>
       )}
      
       
       </div>

       <div>
         <h2>View User</h2>
         <UserTable users={users} deleteUser = {deleteUser} editRow={editRow} />
       </div>
       
    </div>
  );
}

export default App;
