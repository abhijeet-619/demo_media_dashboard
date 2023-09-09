import "./login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { appContext } from "../../App";

export default function Login() {
  const schema = yup.object().shape({
    name: yup.string().required("Your Name is Required!"),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords Don't Match")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate= useNavigate();
  const {setUser}=useContext(appContext);
  
  const onSubmit = (data) => {
    setUser(data);
     console.log(data)
     navigate('/home');
     
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Demosocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Demosocial.
          </span>
        </div>
        <div className="loginRight">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="loginBox"> 
            <input placeholder="Name" className="loginInput" {...register("name")} />
            <input placeholder="Email" className="loginInput" {...register("email")} />
            <input placeholder="Password" className="loginInput" {...register("password")}/>
            <input placeholder="confirm Password" className="loginInput" {...register("confirmPassword")}/>
            <button className="loginButton" type="submit">Log In</button>       
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
