import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid';
import NewUser from './addUser/AddUser';
import DisplayUser from './displayUsers/DisplayUser';
import { Route, Routes } from 'react-router-dom';
import EditUser from './editUser/EditUser';
import ErrorPage from './errorPage/ErrorPage';
import Home from './Home';
import About from './About';
import Card from './Card';

interface User{
    id?: string;
    username: string;
    email: string;
    age: number;
    img: string;
};


const Users = () => {
    const [users, setUsers] = useState <User[]>([]);
    const [user, setUser] = useState<User>();

    useEffect(() => {
        fetch('/data.json')
        .then((res) => {
            return res.json();
        })
        .then(data => setUsers(data))
        .catch(error => console.error('There has been a problem with your fetch operation:', error))
    }, [])
    
    const addNewUser = (newUser: User) : void => {
        newUser.id = v4();
        setUsers([...users, newUser]);
    };

    const deleteUser = (id: string) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const UpdateUser = (updateUser: User) => {
        setUsers((prevUsers) => prevUsers.map((user) =>
        user.id === updateUser.id ?{...user, ...updateUser}: user));       
    }

    const UpdateSetUser = (user: User) => {
        setUser(user)
    }
  return (
    <>
        <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/card' element={<Card />}/>
        <Route path='*' element={<ErrorPage />}/>

        <Route path='/' element={<DisplayUser deleteUser={deleteUser} updateUser={UpdateSetUser}/>}/>
        <Route path='/add' element={<NewUser addUser={addNewUser}/>}/>
        <Route path='/edit/:id' element={<EditUser user={user!} editUser={UpdateUser}/>}/>

        </Routes>
    </>
  )
}

export default Users;
