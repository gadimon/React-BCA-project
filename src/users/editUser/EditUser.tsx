import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

interface User {
    id?: string;
    username: string;
    email: string ;
    age: number;
    img: string;
  }

interface Props {
  user: User;
  editUser: (user: User) => void;
}

const EditUser = ({ user, editUser }:Props) => {
  const { id } = useParams();
  const navigate = useNavigate(); 
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);
    const [img, setImg] = useState("");

    useEffect(() => {
        setUsername(user.username)
        setEmail(user.email)
        setAge(user.age)
        setImg(user.img)
    }, [])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      editUser({
        id,
        username,
        email, 
        age,
        img,
      });
      navigate("/users")
    }
    
  return (
    <>
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
      <input
      id='username'
     type="text"
     placeholder='user name'
     value={username}
     onChange={(e) => setUsername(e.target.value)}
    />
    <input
     id='email'
     type="text"
     placeholder='Email'
     value={email}
     onChange={(e) => setEmail(e.target.value)}
    />
    <input
     id='age'
     type="text"
     placeholder='Age'
     value={age}
     onChange={(e) => setAge(Number(e.target.value))}
    />
    <input
    id='img'
     type="text"
     placeholder='Img'
     value={img}
     onChange={(e) => setImg(e.target.value)}
    />
  <button type='submit'>Save!</button>
      </form>
    </div>
    </>
  );
}
export default EditUser;