import React from "react";


let Contact = () => {



    return (
        <div className='container pb-4'>
               
                <h2 className='text-center p-3'>Contact US</h2>
                <div className='row'>
                    <div className='col-md-6'>
                        <form>
                            <div className="form-group">
                                <label> Name</label>
                                <input type="text" className="form-control" name="name" placeholder="Enter Name"></input>
                            </div>
                            <div className="form-group">
                                <label> Mobile</label>
                                <input type="number" className="form-control" name="mobile" placeholder="Enter Mobile"></input>
                            </div>
                            <div className="form-group">
                                <label> Subject</label>
                                <input type="text" className="form-control" name="subject" placeholder="Enter Subject"></input>
                            </div>
                            <div className="form-group">
                                <label> Message</label>
                                <textarea type="text" rows="5" className="form-control" name="message" placeholder="Enter Message"></textarea>
                            </div>
                            <div className="form-group pt-3">
                                <input type="submit" className="btn btn-info" name="submit" />
                            </div>
                        </form>
                    </div>
                    <div className='col-md-6'>
                        <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-100' />
                    </div>
                </div>
                
            </div>
    )
}

export default Contact;