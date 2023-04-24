import { useState } from "react";
//value=user (object) name is our properties (userName etc). We can use dot notation here
const ContactForm = () => {
    const [user, setUser] = useState({
        userName: "",
        email: "",
        message: "",
    });

//state that will hold all our users and their messages in an array
const [clients, setClients] = useState ([]);
//dynamic handlechange method to update our input fields
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
         
        //updating the user state
        setUser({...user, [name]: value});
    };

const handleSubmit = (e) => {
    e.preventDefault();
    //creating middle handler to transport users to clients array
    if (user.userName && user.email && user.message) {
        const newUser = {...user};
        //updating the array with new user
        setClients([...clients, newUser]);
        setUser({ userName:"", email:"", message:""});
    }
    
}




    return (
    <div className="usersInput">
        <form className="form">
            <h1>Contact info</h1>
            <div className="form-control">
                <label htmlFor="userName">Name:</label>
                <input type="text"
                id="username" 
                name="userName" 
                value={user.userName} 
                onChange={handleChange} />
            </div>

            <div className="form-control">
                <label htmlFor="email">Email:</label>
                <input type="text"
                id="email" 
                name="email" 
                value={user.email} 
                onChange={handleChange} />
            </div>

            <div className="form-control">
                <label htmlFor="message">Message:</label>
                <input type="text"
                id="message"
                 name="message" 
                 value={user.message} 
                 onChange={handleChange} />
            </div>
            <button className="form-btn" type="submit" onClick={handleSubmit}>Submit</button>
        </form>
        <div>
            {clients.map((user) =>{
                const {userName, email, message} = user;
                return (
                    <div className="item">
                        <div className="item-row">
                            <p>{userName} </p>
                            <p>{email}</p>
                            </div>
                            <p>{message}</p>
                        </div>
                )
            })};
        </div>
    </div>
    )
}

export default ContactForm;