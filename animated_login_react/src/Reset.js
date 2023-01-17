import resetImg from "./assets/forgot.svg";
import { AiOutlineClose } from 'react-icons/ai';


const Reset = ( {onLogin}) => {

    return(

        <>
        <div className="main-container --flex-center">
            <div className="form-container reset">
                <form className="form-control">
                    <h2 className = "color-danger">
                        Reset
                    </h2>
                    <input className="--width-100" type ="email"/>
                    <button className="--btn --btn-primary --btn-block"> Reset Password</button>

                    <span className="--text-sm --block">
                        We will sent you reset link !!!
                    </span>
                    <div className="close" onClick={onLogin} >

                        <AiOutlineClose color="red"/>

                        
                    </div>
                </form>
            </div>
            <div className="img-container">
                <img src={resetImg} alt="login"/>
            </div>
        </div>
        </>

    );
}

export default Reset;