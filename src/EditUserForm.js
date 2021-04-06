import React, { useEffect, useState } from 'react'

const EditUserForm = (props) => {

    const [user, setUser] = useState(props.currentUser)


    const handleInputChange = (e) => {
        const {name, value} = e.target

        setUser({...user, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.updateUser(user.id, user)
    }

    useEffect( () => {
        setUser(props.currentUser)
    }, [props])

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
     
         <button>Update User</button>  

         <button onClick={() => props.setEditing(false)}>Cancel</button>       
      </form>
    )
}

export default EditUserForm

