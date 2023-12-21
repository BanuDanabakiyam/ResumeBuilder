import React from "react";
import './RegistrationForm.css';
import { Logo } from "../logo/logo";
export const RegistrationForm = () => {
    return (
        <>
        <div className="check">
        </div>
        <div className="">
            <form action="" className="wrapper">
                <h1>Registration</h1>
                <div className="input-box">
                    <div className="input-field">
                        <input type="text" placeholder="FullName" required/>
                        <box-icon name='user' type='solid'  color = '#ffff'></box-icon>
                    </div>
                    <div className="input-field">
                        <input type="text" placeholder="UserName" required/>
                        <box-icon name='user' type='solid'color = '#ffff' ></box-icon>                    </div>
                </div>
                {/* ------------ */}
                <div className="input-box">
                    <div className="input-field">
                        <input type="email" placeholder="Email" required/>
                        <box-icon type='solid' name='envelope' color = '#ffff'></box-icon>
                    </div>
                    <div className="input-field">
                        <input type="number" placeholder="PhoneNumber" required/>
                        <box-icon name='phone' type='solid' color = '#ffff' ></box-icon>
                    </div>
                </div>
                {/* ------------- */}
                <div className="input-box">
                    <div className="input-field">
                        <input type="password" placeholder="Password" required/>
                        <box-icon  name='lock-alt' type='solid' color = '#ffff'  ></box-icon>
                    </div>
                    <div className="input-field">
                        <input type="ConfirmPassword" placeholder="ConfirmPassword" required/>
                        <box-icon name='lock-alt' type='solid' color = '#ffff' ></box-icon>
                    </div>
                </div>
                {/* ----------- */}
                <label><input type="checkbox"/>
                I hereby declare that the above information provided is true and correct
                </label>
                {/* ------------ */}
                <button type="submit" className="btn">Register</button>
            </form>

        </div>
        </>
    );
}