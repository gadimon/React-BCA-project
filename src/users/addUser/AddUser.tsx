import React, { useState } from 'react'
import { Link } from 'react-router-dom';

interface User{
  username: string;
  email: string;
  age: number;
  img: string;
};

interface Props {
  addUser: (newUser: User) => void;
}
const NewUser = (props: Props) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState(0)
  const [img, setImg] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.addUser({
      username,
      email,
      age,
      img
    });
    setUsername("");
    setEmail("");
    setAge(0);
    setImg("");
  }
  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>

        <div className='form-group'>
          <label htmlFor='username'>User Name</label>
            <input required name='username'
            id='username'
             type='text'
             value={username}
              onChange={(event) =>
               setUsername(event.target.value)}></input>
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
            <input required name='email'
            id='email'
             type='text'
             value={email}
              onChange={(event) =>
               setEmail(event.target.value)}></input>
        </div>
        <div className='form-group'>
          <label htmlFor='age'>Age</label>
            <input required name='age'
            id='age'
             type='number'
             value={age}
              onChange={(event) =>
               setAge(Number(event.target.value))}></input>
        </div>
        <div className='form-group'>
          <label htmlFor='img'>Image</label>
            <input required name='img'
            id='img'
             type='text'
             value={img}
              onChange={(event) =>
               setImg(event.target.value)}></input>
        </div>
       
      </form>
      <Link to={"/users"}><button type='submit'>Add User</button></Link>
    </div>
  );
}

export default NewUser;
