import React, { useEffect, useState } from 'react'

interface User{
    id?: string;
    username: string;
    email: string;
    age: number;
    img: string;
};

interface Props {
    children: React.ReactNode
}
export const UserPro = React.createContext<User[] | null>(null);

const UserProvider = (props: Props) => {
    const [users, setUsers] = useState<User[]>([]);
    
    useEffect(() => {
        fetch('/data.json')
        .then((res) => {
            return res.json();
        })
        .then(data => setUsers(data))
        .catch(error => console.error('There has been a problem with your fetch operation:', error))
    }, [])
  return (
    <UserPro.Provider value={users}>
        {props.children}
    </UserPro.Provider>
  )
}

export default UserProvider