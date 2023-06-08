import React from "react";
import { useNavigate } from "react-router-dom";
import "./Events.css";

function Events(){
    const navigate=useNavigate();
    const Clickhandle = () =>{
       
        navigate('/register');
    };
    return(<><br></br>
    <br></br>
    <div className="ev">
    <h1>Events</h1>
    </div>
    
    <div className="el">
        <div className="column">
            <div className="e">
            <div className="img">
                </div><br></br>
            <h1 className="title">Event-1</h1><br></br>
            <p>An event description is a piece of text or copy, outlining the details of your event. These details come together to create a compelling statement which will help to draw in your target audience !</p><br></br>
            <button onClick={Clickhandle}>Register Here</button>
            </div>
            </div>
            <div className="column">
            <div className="e">
            <div className="img">
                </div><br></br>
            <h1 className="title">Event-2</h1><br></br>
            <p>An event description is a piece of text or copy, outlining the details of your event. These details come together to create a compelling statement which will help to draw in your target audience !</p><br></br>
            <button onClick={Clickhandle}>Register Here</button>
            </div>
            </div>
            <div className="column">
            <div className="e">
            <div className="img">
                </div><br></br>
            <h1 className="title">Event-3</h1><br></br>
            <p>An event description is a piece of text or copy, outlining the details of your event. These details come together to create a compelling statement which will help to draw in your target audience !</p><br></br>
            <button onClick={Clickhandle}>Register Here</button>
            </div>
            </div>
            <div className="column">
            <div className="e">
            <div className="img">
                </div><br></br>
            <h1 className="title">Event-4</h1><br></br>
            <p>An event description is a piece of text or copy, outlining the details of your event. These details come together to create a compelling statement which will help to draw in your target audience !</p><br></br>
            <button onClick={Clickhandle}>Register Here</button>
            </div>
            </div>
            <div className="column">
            <div className="e">
            <div className="img">
                </div><br></br>
            <h1 className="title">Event-5</h1><br></br>
            <p>An event description is a piece of text or copy, outlining the details of your event. These details come together to create a compelling statement which will help to draw in your target audience !</p><br></br>
            <button onClick={Clickhandle}>Register Here</button>
            </div>
            </div>
            <div className="column">
            <div className="e">
            <div className="img">
                </div><br></br>
            <h1 className="title">Event-6</h1><br></br>
            <p>An event description is a piece of text or copy, outlining the details of your event. These details come together to create a compelling statement which will help to draw in your target audience !</p><br></br>
            <button onClick={Clickhandle}>Register Here</button>
            </div>
            </div>
            <div className="column">
            <div className="e">
            <div className="img">
                </div><br></br>
            <h1 className="title">Event-7</h1><br></br>
            <p>An event description is a piece of text or copy, outlining the details of your event. These details come together to create a compelling statement which will help to draw in your target audience !</p><br></br>
            <button onClick={Clickhandle}>Register Here</button>
            </div>
            </div>
            <div className="column">
            <div className="e">
            <div className="img">
                </div><br></br>
            <h1 className="title">Event-8</h1><br></br>
            <p>An event description is a piece of text or copy, outlining the details of your event. These details come together to create a compelling statement which will help to draw in your target audience !</p><br></br>
            <button onClick={Clickhandle}>Register Here</button>
            </div>
            </div>
            
            
        </div></>)
}
export default Events;