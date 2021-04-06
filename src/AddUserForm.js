import React, { useState } from 'react'

const AddUserForm = (props) => {

    const initialFormState = {id: null, name:'', username:''}
    const [user, setUser] = useState('');


    const handleInputChange = (e) => {
        const {name, value} = e.target

        setUser({...user, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!user.name || !user.username) return

        props.addUser(user)
        setUser(initialFormState)
        //setUser({name: '', username: ''})
    }

    return (
      <form onSubmit={handleSubmit}>    
          <div>
          <label>Name</label>
          <input type="text" name="name" value={user.name}
                onChange={handleInputChange} />
          </div>    
     
          <div>
          <label>UserName</label>
          <input type="text" name="username" value={user.username}
              onChange={handleInputChange} />
          </div>              
     
         <div><button>Add New User</button></div>         
      </form>
    )
}

export default AddUserForm
