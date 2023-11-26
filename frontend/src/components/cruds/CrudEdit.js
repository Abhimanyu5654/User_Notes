import React, { useState, useEffect } from "react";
import { get, put} from "axios";
import { useNavigate, useParams } from "react-router-dom";
function CrudEdit(props) {
    const initialState = {
        userName: "",
        phone: "",
        email: "",
        description: "",
    };
    const [crud, setCrud] = useState(initialState);
    const { _id } = useParams();
    const navigate = useNavigate();
    useEffect(
        function () {
            async function updateCrud() {
                try {
                    const response = await get(`http://localhost:8080/api/cruds/${_id}`);
                    setCrud(response.data);
                } catch (error) {
                    console.log(error);
                }
            }
            updateCrud();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [props]
    );
    function handleSubmit(event) {
        event.preventDefault();
        async function updateCrud() {
            try {
                await put(`http://localhost:8080/api/cruds/${crud._id}`, crud);
                navigate(`/cruds/${crud._id}`);
            } catch (error) {
                console.log(error);
            }
        }
        updateCrud();
    }
    function handleChange(event) {
        setCrud({ ...crud, [event.target.name]: event.target.value });
    }
    function handleCancel() {
        navigate(`/cruds/${crud._id}`);
    }
    return (
        <div className="container">
            <h1>Edit {crud.userName}</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>User Name</label>
                    <input
                        name="userName"
                        type="text"
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
                <div className="form-group">
                    <label>Email</label>
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
                        row="5"
                        value={crud.description}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="btn-group">
                    <button type="submit" className="btn btn-primary">
                        Update
                    </button>
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
export default CrudEdit;