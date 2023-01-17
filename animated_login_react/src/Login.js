import loginImg from "./assets/login.svg";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
const Login = ( {onRegister, onReset, onShowPassword, onTogglePassword}) => {


return (

        <>
         <div className="main-container --flex-center">
            <div className="img-container">
                <img src= {loginImg} alt='login' />
                
            </div>

            <div className="form-container">
                <form className="form-control">
                    <h2 className = "color-danger">Login</h2>
                    <input type= "text" className="--width-100"  placeholder="Username" />
                    {/*<input type= "password" className="--width-100"  placeholder="Password" />*/}

                    <div className="password">

                        <input type= {onShowPassword ? "text" : "password"} className="--width-100" placeholder="Password"/>
                        <span className="icon" onClick={onTogglePassword}>

                            {onShowPassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                        </span>
                    </div>

                    <button className="--btn --btn-primary --btn-block"> Login </button>

                    <a href="#" className="--text-sm"  onClick={onReset}> Forgot Password</a>

                    <span className="--text-sm --block">
                        Don't have an account? 
                        <a href="#" className="--text-sm" onClick={onRegister}> Register Now </a>
                    </span>
                </form>
            </div>
         </div>
           
        </>
    );
}

export default Login;