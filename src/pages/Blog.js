import React from "react";



export default class Blog extends React.Component{
    render(){
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
                </table>
            </div>
        )
    }
}