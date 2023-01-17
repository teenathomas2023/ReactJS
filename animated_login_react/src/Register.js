import { useState, useEffect } from "react";
import registerImg from "./assets/register.svg";
import {FaCheck } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Register = ({onLogin, onShowPassword, onTogglePassword}) => {

    const [showIndicator, setShowIndicator] = useState(false);
    const [pass, setPass] = useState("");

    const [passLetter, setPassLetter] = useState(false);
    const [passNumber, setPassNumber] =useState(false);
    const [passChar, setPasschar] =useState(false);
    const [passLength, setPassLength] =useState(false);
    
    const [passComplete, setPassComplete] = useState(false);
    
    const handleShowIndicator = () => {

        setShowIndicator(true);
    }

    const handlePasswordChange = (e) => {

        setPass(e.target.value);
    }

    useEffect(() => {
       //console.log("useeffect working");

       //check Lowercase and uppercase Letters


        if (pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))

        {
            setPassLetter(true);
        }

        else{

            setPassLetter(false);

        }


    

    //check for Numbers

    if (pass.match(/([0-9])/))
    {
        setPassNumber(true);

    } else{
        setPassNumber(false);
    }

    //check for special characters
    if (pass.match(/([!,@,#,$,@,^,*,&,?,_,-,~])/))
    {
        setPasschar(true);
    }else
    {
        setPasschar(false);
    }

    if (pass.length > 7) {

        setPassLength(true);
    } else {

        setPassLength(false);
    }

    if ( passChar && passNumber && passLetter && passLength){

        setPassComplete(true);
    } else {
        setPassComplete(false);
    }

},[pass,passLetter,passNumber,passChar,passLength]);

    
    
    return (

        <>
           <div className="main-container --flex-center">
            <div className="form-container">
                <form className="form-control">
                    <h2 className = "color-danger">Register</h2>
                    <input type="text" className="--width-100" placeholder="Username" />
                    <input type="email"className="--width-100" placeholder="Email" />
                    {/*<input type="password" className="--width-100" placeholder="Password" />*/}
                    <div className="password">

                        <input type={onShowPassword ? "text" : "password"} className="--width-100" placeholder="Password" 
                        onFocus={handleShowIndicator} value={pass} onChange={handlePasswordChange}/>

                        <span className="icon" onClick={onTogglePassword}>

                             {onShowPassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                        </span>

                    </div>

                    
                    
                    {/*<button className="--btn --btn-primary --btn-block">Register</button>*/}
                    <button disabled={!passComplete} className={passComplete? "--btn --btn-block":"--btn --btn-block btn-disabled"}>
                        Register
                    </button>

                    
                    
                    <span className="--text-sm --block">
                        Have an account?
                        <a href="#" className="--text-sm" onClick={onLogin}>Login</a>
                    </span>

                    {/*Password Strength Indicator*/}

                    <div className ={showIndicator ? "show-indicator" : "hide-indicator"}>
                        <ul className="list-style-none card --text-sm --p">
                            <p className="--text-sm"> Password Strength Indicator</p>
                            <li className={passLetter ? "pass-green":"pass-red"}>
                                <span className="txtalign">
                                    {passLetter ? <FaCheck /> : <GoPrimitiveDot />}
                                    Lowercase & UpperCase

                                </span>

                            </li >

                            <li className={passNumber ? "pass-green":"pass-red"}>
                                <span className="txtalign">
                                    {passNumber ? <FaCheck /> : <GoPrimitiveDot />}
                                    Numbers (0-9)

                                </span>

                            </li>

                            <li className={passChar ? "pass-green":"pass-red"} >
                                <span className="txtalign">
                                    {passChar ? <FaCheck /> : <GoPrimitiveDot />}
                                    Special characters (!@#$%^&*)

                                </span>

                            </li>

                            <li className={passLength ? "pass-green":"pass-red"}>
                                <span className="txtalign">
                                    {passLength ? <FaCheck /> : <GoPrimitiveDot />}
                                    At least 8 Character

                                </span>

                            </li>


                        </ul>
                    </div>

                </form>
            </div>
            <div className="img-container">
                <img src={registerImg} alt="login"/>
            </div>
           </div>
        </>
    );
}

export default Register;