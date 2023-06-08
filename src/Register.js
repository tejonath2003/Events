import React from "react";
import "./Reg.css";
import { useNavigate } from "react-router-dom";
function Register(){
    const Msg =() =>{
        alert("Form submitted succesfully ")
    }
    const navigate=useNavigate();
    const Handleclick = () =>{
       
        navigate('/events');
    };
    return(<>
    <div className="t">
    <div className="r"><h1> Registration Form</h1></div>
    <div className="details">
    <form>
        <label
        for="name"> First Name :</label>
        <br></br>
        <input type="text" placeholder="your first name"></input>
        <br></br>
        <label
        for="name"> Last Name :</label>
        <br></br>
        <input type="text" placeholder="your last name"></input>
        <br></br>
        <label
        for="age"> Age :</label>
        <br></br>
        <input type="number" placeholder="how old are you?"></input>
        <br></br>
        <label
        for="gender"> Gender:</label>
        <br></br>
        <input type="radio" id="male"></input>
        &nbsp;
        <span id="male">Male</span>
        &nbsp;&nbsp;&nbsp;
        <input type="radio" id="female"></input>
        &nbsp;
        <span id="female">Female</span>
        &nbsp;&nbsp;&nbsp;
        <input type="radio" id="none"></input>
        &nbsp;
        <span id="none">None</span>
        <br></br>
        <label
        for="email"> E-mail :</label>
       <br></br>
        <input type="email" placeholder="your valid e-mail"></input>
        <br></br>
        <label
        for="number"> Mobile Number :</label>
        <br></br>
        <input type="number" placeholder="your mobile number"></input>
        <br></br> <label
        for="country"> Country :</label>
        <br></br>
        <input type="text" placeholder="your country"></input>
        <br></br><label
        for="organ"> Organisation :</label>
        <br></br>
        <input type="text" placeholder="your school or college"></input>
        <br></br><label
        for="course"> Course :</label>
        <br></br>
        <input type="text" placeholder="pursuing course"></input>
        <br></br><label
        for="year">Current Year:</label>
        <br></br>
        <input type="number" placeholder="studying year"></input>
        <br></br><br></br><div className="btn">
            <button onClick={Handleclick} type="b">Back</button>
        <button onClick={Msg} type="submit">Submit</button></div>
    </form>
    </div>
    </div>
   </>)

}
export default Register;