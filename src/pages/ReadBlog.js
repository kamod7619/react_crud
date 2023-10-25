
import React, { useEffect, useState } from 'react';
// import { Table,Button } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function ReadBlog() {

    const navigate = useNavigate();
    
    const [APIData, setAPIData] = useState([]);

    const getData=()=>{
        axios.get(`https://653248994d4c2e3f333de874.mockapi.io/userData`)
            .then((response) => {
                setAPIData(response.data);
            })
    }

    useEffect(() => {
        getData()

    }, [])

    const setData = (data) => {
        
        let { id, name, email, mobile,password } = data;
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('mobile', mobile)
        localStorage.setItem('password', password)

        navigate('/update')
    }

    const deleteData=(id)=>{
        
            alert("Are you sure delete this item.!")

            axios.delete(`https://653248994d4c2e3f333de874.mockapi.io/userData/${id}`)
            .then(response=>{
                console.log("response",response)
                getData()
            }).catch(error=>{
                console.log("error",error)
            })
        
    }
    let margin={
        marginLeft:"10px",
        marginRight:"10px"
    }
    return (
        <div>
            <h2 className="main-header pt-4">React Crud Operations</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Mobile</td>
                        <td>Created At</td>
                        <td>Action</td>
                    </tr>
                </thead>

                <tbody>
                {APIData.map((data) => {
                    return (
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.mobile}</td>
                            <td>{data.createdAt}</td>
                            <td>
                            {/* <a href="/update"> */}
                                <button className='btn btn-info' onClick={() => setData(data)}>Update</button>
                            {/* </a> */}
                            <button className='btn btn-danger' style={margin} onClick={() => deleteData(data.id)}>Delete</button>
                            </td>
                        </tr>
                    )})}
                </tbody>
            </table>
            {/* <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>E-mail address</Table.HeaderCell>
                        <Table.HeaderCell>Mobile</Table.HeaderCell>
                        <Table.HeaderCell>Create At</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                {APIData.map((data) => {
                    return (
                    <Table.Row>
                        <Table.Cell>{data.id}</Table.Cell>
                        <Table.Cell>{data.name}</Table.Cell>
                        <Table.Cell>{data.email}</Table.Cell>
                        <Table.Cell>{data.mobile}</Table.Cell>
                        <Table.Cell>{data.createdAt}</Table.Cell>
                        <Table.Cell>
                            <Link to="/update"><Button onClick={() => setData(data)}>Update</Button></Link>
                            <Button onClick={() => deleteData(data.id)}>Delete</Button>
                        </Table.Cell>
                        
                        </Table.Row>
                )})}
            </Table> */}
        </div>
    )
}