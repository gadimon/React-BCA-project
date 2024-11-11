import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { UserPro } from '../../providers/UserProvider';

interface User{
    id?: string;
    username: string;
    email: string;
    age: number;
    img: string;
  };
interface Props {
    deleteUser: (id: string) => void;
    updateUser: (user: User) => void;
}

const DisplayUser = ({deleteUser, updateUser}: Props) => {
   const users = useContext(UserPro);
  return (
   <>
   <NavLink to={'/users/add'}>
    <button>Add user</button>
   </NavLink>
   <div className='card-list'>
       {users!.map((user) => (
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
           </div>
        ))} 
    </div>
  </>  
  )
}
export default DisplayUser;