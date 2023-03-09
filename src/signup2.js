import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default function signup2() {

    
    return (
        <body>
        <div style={{ backgroundColor: "#63b8c7", paddingTop: "0.3%", paddingBottom: "0.3%", paddingLeft: "1%", margin: "0" }}> 
            <h1>Exploratory</h1>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <center><form>
            <div className="form-group">
            <label>Username</label>
            <input type="text" className="w-25 form-control"  placeholder="Enter username"/>
            </div>
            <br />
            <br />
            <div className="form-group">
            <label>Password</label>
            <input type="password" className="w-25 form-control" id="Password"  placeholder="Password" /> 
            <small id="passwordHelp" className="form-text text-muted">Your password must contain a capital letter and number, that is not at the begining or end (ie. XXAX7XX 7 and A within)</small>
            </div>
            <br />
            <button type="button" className="btn btn-outline-primary">Sign Up</button>
        </form></center>
    </body>
    )
}