import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { login } from "../redux/actions/authActions"

function SignIn() {
  const [token, setToken]= useState("")
  const authStore = useSelector(store=> store.authStore)
  const [formData, setFormData] = useState({
    email: "",
    contraseña: "",
  });
 
  let error = authStore.error
  
 console.log(authStore);
 
  
  
  const dispatch = useDispatch();

  const handleChange = (e) => {
  
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
   
    
  };

  const handleSubmit = (e) => {
    let token = localStorage.getItem("token")
    e.preventDefault();
    const { email, contraseña } = formData;
    dispatch(login({ email, password: contraseña }))
    setToken(token)

   
  
  };
  const google = ()=>{
    window.location.href="https://mytinerary-back-josedavidrodriguez.onrender.com/api/auth/signIn/google"
  }

  return (<>

    <div className="registrese">
          <img src="https://images.pexels.com/photos/552785/pexels-photo-552785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="fotoHeader2"></img>

      <form className="logIn" onSubmit={handleSubmit}>
        <p>Sign In</p>
        <div className="inputs">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="inputs">
          <label htmlFor="contraseña" className="font-bold">
            Password
          </label>
          <input
            type="password"
            id="contraseña"
            autoComplete="new-password"
            placeholder="Contraseña..."
            value={formData.contraseña}
            onChange={handleChange}
          />
        </div>
        <div className="crear">

{error && <p style={{color:"red"}}>Incorrect email or password</p>}

          <a href="/SignUp">Or create account</a>
          <button type="submit">Sign In</button>
          <p className="opcion">Or</p>
          <button
onClick={google}
type="button"
className="google active:scale-95 transition-all flex gap-4 items-center justify-center w-full border bg-slate-50 px-4 py-3 rounded-full font-medium text-neutral-500 dark:text-neutral-300 shadow-md dark:bg-white/20 hover:brightness-[.98] dark:hover:brightness-[.9] border-neutral-300 dark:border-neutral-500"
>
<svg
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width="1.5em"
  height="1.5em"
  viewBox="0 0 48 48"
>
  <path
    fill="#FFC107"
    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
  ></path>
  <path
    fill="#FF3D00"
    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
  ></path>
  <path
    fill="#4CAF50"
    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
  ></path>
  <path
    fill="#1976D2"
    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
  ></path>
</svg>

Continue with Google

</button>
          
        </div>
      </form>
    </div>
    </>
  );
 
}

export { SignIn };
