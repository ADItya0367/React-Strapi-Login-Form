import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import swal from 'sweetalert'

function App() {
// definig a state variable
// hooks variable
const [Users, setUsers] = useState("");

//useEffect(() => {}, []);

// defining a function to handle the form submission
const handleSubmit = () => {
  console.log(Users);

  var data= {
    "data": {
      "Aditya_Mishra": Users,
      
    }
  }

  fetch("http://localhost:1337/api/strapi-setups", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  })
    .then((d) => {
      console.log(d);
      if(d.status === 200) {
      swal("Data Submitted", "Thank you for submitting your data", "success");
    }}).catch(() => {}).finally();
}

  return (
    <div class="outer">
    <h1>Login Form</h1>
    <h4>login in to get notified</h4>
   
    <div class="inner">
        <form>
        
        <p><input class="in" type="email" value={Users} onChange={(e1)=>{setUsers(e1.target.value)}}  placeholder="Type your Name"/><i class="fa-solid fa-user"></i></p>
        
        
        
        <h4>Already have an account <a href="#">Forget Password?</a></h4>
        
        <p><input class="btn" onClick={handleSubmit} name="Users" value="Submit"/><input class="btn"  type="reset" value="Reset" /></p>
    </form>
    </div>
</div>
  );
}

export default App;
