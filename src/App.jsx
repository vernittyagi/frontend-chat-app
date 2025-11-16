import { useState, useSyncExternalStore, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useForm } from 'react-hook-form'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom';
import ChatPage from './pages/ChatPage'


function App() {
  const [existingUser, setexistingUser] = useState(true)
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data,e) => {
    
    if(e.nativeEvent.submitter.name === "Log in"){
      const r = await fetch("https://backend-chat-app-di8u.onrender.com:3000/api/auth/login",
        {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(data)
        }
      )
      const res = await r.json()
      if(res.success){
        navigate('/chat')
      }
      else{
        alert("You are not registered yet or wrong credentials pls check again!");
      }
    }
    else{
      const r = await fetch("https://backend-chat-app-di8u.onrender.com:3000/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });
      setexistingUser(true)
      const res = await r.json()
      console.log("response from server - ", res.success);
      reset()
      if (res.success) {
        alert("User has been registered successfully !!!")
        navigate('/')
      } else {
        alert("Invalid credentials");
        navigate('/')
      }
    }

  }

  const handleClick = (e) => {
    console.log("handleClick called");
    if (e.target.name === "Create new account") {
      setexistingUser(false)
    }
    if (e.target.name === "Log in") {
      setexistingUser(true)
    }
  }

  useEffect(() => {
    console.log("existing user - ", existingUser);
  }, [existingUser])


  return (

    <Routes>
      <Route
        path='/'
        element={
          <div className="flex flex-col justify-center  h-[100vh] bg-[#F5FAE1] items-center">
            <h1 className='font-bold text-5xl'>TalkMate</h1>
            <div className="form-container bg-[#E5BEB5] rounded-2xl h-fit flex flex-col justify-center items-center w-[50vw] text-[#111c21] mt-3 p-5">
              <form action="" onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 w-3/4'>
                {!existingUser && <input className='p-3 rounded-2xl' placeholder='First name' type="text" {...register("firstname")} />}
                {!existingUser && <input className='p-3 rounded-2xl' placeholder='Surname' type="text" {...register("surname")} />}
                <input className='p-3 rounded-2xl' placeholder='John1234@xyz.com' type="email" {...register("email")} />
                <input className='p-3 rounded-2xl' placeholder='***************' type="password" {...register("password")} />
                <button type="submit" name={existingUser ? "Log in" : "Sign Up"} className='bg-[#F5FAE1] rounded-2xl p-3 font-bold'>{existingUser ? "Log in" : "Sign Up"}</button>
              </form>
              <div className='h-[1px] bg-gray-500 w-3/4 mt-4 mb-7'></div>
              {!existingUser && <div className='mb-2'><span>Already a user ?</span></div>}
              <button type="submit" name={existingUser ? "Create new account" : "Log in"} className='bg-[#F5FAE1] rounded-2xl p-3 font-bold' onClick={handleClick}>{existingUser ? "Create new account" : "Log in"}</button>
            </div>
          </div>
        }
      />
      <Route path='/chat' element={<ChatPage/>} />
    </Routes >
  )
}

export default App
