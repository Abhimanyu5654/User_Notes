import React, { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";
function Create(props) {
    const initialState = {
        userName: "",
        phone: "",
        email: "",
        description: "",
    };
    const [crud, setCrud] = useState(initialState);
    const navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();
        //if (!crud.userName || !crud.email) return;
        async function postCrud() {
            try {
                const response = await post("http://localhost:8080/api/cruds", crud);
                navigate(`/cruds/${response.data._id}`);
            } catch (error) {
                console.log("error", error);
            }
        }
        postCrud();
    }
    function handleChange(event) {
        setCrud({ ...crud, [event.target.name]: event.target.value });
    }
    function handleCancel() {
        navigate("/cruds");
    }
    return (
        <div className="container" style={{ maxWidth: "400px" }}>
            <h1>User Create</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>User Name</label>
                    <input
                        name="userName"
                        type="text"
                        required
                        value={crud.userName}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input
                        name="phone"
                        type="tel"
                        required
                        value={crud.phone}
                        onChange={handleChange}
                        className="form-control"
                    />
                    
                </div>
                <div className="form-group"><label>Email</label>
                    <input
                        name="email"
                        type="email"
                        required
                        value={crud.email}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
               
                
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        name="description"
                        row="10"
                        value={crud.description}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="btn-group ">
                    <input type="submit" value="Submit" className="btn btn-primary" />
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="btn btn-secondary"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}
export default Create;
