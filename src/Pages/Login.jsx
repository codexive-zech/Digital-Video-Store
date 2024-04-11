import { Link } from "react-router-dom";
import loginImg from "../assets/login.svg";
import { useState } from "react";
import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";
import useLogin from "../hooks/useLogin";
import { HiHome } from "react-icons/hi2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, isSubmitting } = useLogin();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <section className=" grid lg:grid-cols-2 place-items-center m-0 relative">
      <Link to={"/"} className=" absolute top-10 left-10 text-white">
        <HiHome />
      </Link>
      <form
        className="my-10 md:my-0 p-3 flex flex-col gap-y-4 w-[95vw] mx-auto md:w-9/12 "
        onSubmit={handleSubmit()}
      >
        <h1 className=" text-2xl lg:text-3xl font-bold text-center mb-3 text-white">
          Welcome Back, Login!
        </h1>

        <FormInput
          type="email"
          label="Email"
          name="email"
          size="input-md"
          {...register("email", { required: "Email is required" })}
        />

        <div className=" relative">
          <FormInput
            type={showPassword ? "text" : "password"}
            label="Password"
            name="password"
            size="input-md"
            {...register("password", { required: "Password is required" })}
          />
          <span
            className=" absolute right-4 bottom-4 cursor-pointer text-secondary"
            onClick={handleShowPassword}
          >
            {showPassword ? (
              <AiTwotoneEyeInvisible size={20} />
            ) : (
              <AiTwotoneEye size={20} />
            )}
          </span>
        </div>
        <div className=" mt-3">
          <SubmitBtn text="Login" disabled={isSubmitting} />
        </div>
        <p className="text-center font-semibold text-white">
          Do Not Have an Account?
          <Link
            to="/signup"
            className=" text-[#BE123C] ml-2 "
            style={{ textDecorationLine: "none" }}
          >
            Register
          </Link>
        </p>
      </form>
      <div className=" hidden lg:flex items-center lg:justify-center lg:h-screen bg-[#BE123C] w-full">
        <img
          src={loginImg}
          alt="Register"
          className=" w-96 h-auto object-fit"
        />
      </div>
    </section>
  );
};

export default Login;
