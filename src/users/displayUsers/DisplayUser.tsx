import React, { useState } from 'react'
import EditUser from '../editUser/EditUser';
import { NavLink } from 'react-router-dom';

interface User{
    id?: string;
    username: string;
    email: string;
    age: number;
    img: string;
  };
interface Props {
    users: User[];
    deleteUser: (id: string) => void;
    updateUser: (user: User) => void;
}

const DisplayUser = ({ users, deleteUser, updateUser}: Props) => {
    const [flag, setFlag] = useState(false)
  return (
   <>
   <NavLink to={'/users/add'}>
    <button>Add user</button>
   </NavLink>
   <div className='card-list'>
       {users.map((user) => (
        <div key={user.id} className='user-card'>
            <img
              src={user.img}
              alt={`${user.username}'s avatar`}
              className="user-avatar"
            />
            <div className="user-info">
            <h3>{user.username}</h3>
            <p>Email{user.email}</p>
            <p>Age{user.age}</p>
            </div>
            <div className='user-actions'>
            <button
                onClick={() => {
                  updateUser(user);
                }}
                >
                  <NavLink to={`/users/edit/${user.id}`}>Edit</NavLink>
                </button>
            </div>
            <button onClick={()=> {deleteUser(user.id!)}}>DELETE</button>
            <button onClick={()=> {setFlag(true)}}>UPDATE</button>
            {flag && <EditUser editUser={updateUser} user={user}/>}
           </div>
        ))} 
    </div>
  </>  
  )
}




export default DisplayUser