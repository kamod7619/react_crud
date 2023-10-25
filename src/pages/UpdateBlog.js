import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function UpdateBlog() {
    const navigate = useNavigate();
    const [id, setID] = useState(null);

    useEffect(() => {
            setID(localStorage.getItem('id'))
            setName(localStorage.getItem('name'));
            setEmail(localStorage.getItem('email'));
            setMobile(localStorage.getItem('mobile'))
            setPassword(localStorage.getItem('password'))
    }, []);

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitData=()=>{
        var form=new FormData()
        form.append("name",name)
        form.append("email",email)
        form.append("mobile",mobile)
        form.append("password",password)

        axios.put(`https://653248994d4c2e3f333de874.mockapi.io/userData/${id}`, form
        ).then((response)=>{
            if(response.status===200){
                navigate('/')
                console.log("response",response.data)
            }
            
        }).catch(error=>{
            console.log("error",error)
        })
    }



    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email...' value={email} type="email" onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Mobile</label>
                    <input placeholder='Mobile' value={mobile} onChange={(e) => setMobile(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Field>
                
                <Button type='submit' onClick={submitData}>Update</Button>
            </Form>
        </div>
    )
}