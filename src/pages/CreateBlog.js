import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

 let CreateBlog= ()=> {
    
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const postData = () => {
        var form=new FormData()

        form.append("name",name)
        form.append("mobile",mobile)
        form.append("email",email)
        form.append("password",password)

        axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, form
        )
        .then(response=>{

            navigate('/')
            
        }).catch((error) => {
            
                console.log(error); 
            
        });
    }
    return (
        <Form className="create-form">
            <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email...' type="email" onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Mobile</label>
                    <input placeholder='Mobile' onChange={(e) => setMobile(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                </Form.Field>
            <Button type='submit' onClick={postData}>Submit</Button>
        </Form>
        )
}

export default CreateBlog