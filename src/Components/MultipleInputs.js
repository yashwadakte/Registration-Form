import React, { useState } from 'react';
import '../Components/style.css';

const MultipleInputs = () => {

    const [userRegistration, setuserRegistration] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });
    
    const [records, setRecords] = useState([]);
    
    const handleInput = (y) => {
        const name = y.target.name;
        const value = y.target.value;
        console.log(name, value);

        setuserRegistration({ ...userRegistration, [name]: value });
    }; 

    const handleSubmit = (y) => {
        y.preventDefault();

        const newRecord = { ...userRegistration, id: new Date().getTime().toString() };

        setRecords([...records, newRecord]);

        setuserRegistration({ username: "", email: "", phone: "", password: "" });
    };
    
    return (
        <>
            <div className="heading"><h2>Registration form</h2></div>

            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Name</label>
                    <input 
                        type="text"
                        autoComplete="off"
                        value={userRegistration.username}
                        onChange={handleInput} 
                        name="username" 
                        id="username"
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        autoComplete="off"
                        value={userRegistration.email}
                        onChange={handleInput} 
                        name="email" 
                        id="email"
                    />
                </div>

                <div>
                    <label htmlFor="phone">Phone</label>
                    <input 
                        type="text" 
                        autoComplete="off"
                        value={userRegistration.phone}
                        onChange={handleInput} 
                        name="phone" 
                        id="phone"
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        autoComplete="off"
                        value={userRegistration.password}
                        onChange={handleInput} 
                        name="password" 
                        id="password"
                    />
                </div>

                <button type="submit">Register</button>
            </form>

            <div>
                {records.map((curElem) => {
                    const { id, username, email, phone, password } = curElem;
                    return (
                        <div className="showDateStyle" key={id}>
                            <p>{username}</p>
                            <p>{email}</p>
                            <p>{phone}</p>
                            <p>{password}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default MultipleInputs;
