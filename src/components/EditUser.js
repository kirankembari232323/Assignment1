
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { UserDataContext } from "../context/UserDataContext";

function EditUser() {
    const navigate = useNavigate();
    const API = `https://reqres.in/api/users`
    const { id } = useParams();

    const { editUser } = useContext(UserDataContext);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        axios.get(`${API}/${id}`).then((response) => {
            setUserData({
                ...userData,
                id: response?.data?.data?.id,
                first_name: response?.data?.data?.first_name,
                last_name: response?.data?.data?.last_name,
                email: response?.data?.data?.email,
                avatar: response?.data?.data?.avatar,
            });
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const handleSubmit = event => {
        editUser(userData, event).then(() => {
            navigate('/')
        })
    };

    const handleInputChange = event => {
        event.persist();
        setUserData(userData => ({
            ...userData,
            [event.target.name]: event.target.value
        }));
    };

    return (
        <div className="create-user">
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Create User</h3>
                        <div className="form-group mt-3">
                            <label>First Name <span className="red">*</span></label>
                            <input
                                onChange={handleInputChange}
                                type="text"
                                name="first_name"
                                value={userData.first_name}
                                placeholder="User Name"
                                className="form-control mt-1"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>last Name <span className="red">*</span></label>
                            <input
                                onChange={handleInputChange}
                                type="text"
                                name="last_name"
                                value={userData.last_name}
                                placeholder="User Name"
                                className="form-control mt-1"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email <span className="red">*</span></label>
                            <input
                                onChange={handleInputChange}
                                type="email"
                                name="email"
                                value={userData.email}
                                placeholder="User Name"
                                className="form-control mt-1"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Image Url <span className="red">*</span></label>
                            <input
                                onChange={handleInputChange}
                                type="text"
                                name="avatar"
                                value={userData.avatar}
                                className="form-control mt-1"
                                placeholder="Enter Job"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button onClick={handleSubmit} className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditUser;
