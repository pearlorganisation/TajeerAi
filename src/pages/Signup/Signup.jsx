import React, {useRef, useState} from "react";
import { useForm } from "react-hook-form";

const Signup
 = () => {

  const [errorMsg, setErrorMsg] = useState('')

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if(data.password === data.confirmPassword){
      console.log(`data from Signup
       page`, data);
       setErrorMsg("")
    } else {
      setErrorMsg("Passwords do not match, please check")
    }
  };

  return (
    <div className="w-screen h-screen relative flex flex-col justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="bg-white w-full md:w-1/2 border border-gray-400 rounded-lg shadow-md mx-auto p-6 flex flex-col gap-5">
        <div className="w-full text-center text-3xl font-semibold">
            Sign Up
        </div>
        <form 
          className="w-full max-w-[500px] mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-[14px] font-medium text-gray-900 dark:text-white"
            >
              E-Mail
            </label>
            <input
            {...register(`email`, { required: true })}
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your E-Mail"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-[14px] font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input      
              {...register(`password`, { required: true })}       
              type="password"
              id="password"
            
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-[14px] font-medium text-gray-900 dark:text-white"
            >
              Confirm Password
            </label>
            <input
             {...register(`confirmPassword`, { required: true })}
              type="password"
              id="confirmPassword"
              
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          {errorMsg.length > 0 && (
            <div className="mb-5 text-red-500">
              {errorMsg}
            </div>
          )}

          <button
            type="submit"
            className="w-full text-white text-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 tranisiton duration-300"
            // onClick={handleSubmit}
          >
            Sign-Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup
;
