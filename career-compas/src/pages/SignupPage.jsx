import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const socialBtn = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  background: "#ffffff",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #e5e7eb",
  cursor: "pointer",
  fontWeight: "600",
  justifyContent: "center",
};

const iconStyle = { width: "22px", height: "22px" };

export default function SignupPage() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const navigate = useNavigate();

  // Auto redirect if logged in
  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      if (u) navigate("/");
    });
  }, []);

  const handleSignup = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth,email,password)
      .then(()=> navigate("/"))
      .catch(err => setError(err.message));
  };

  return (
    <div style={{
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      background:"#0a192f"
    }}>
      <div style={{
        width:"400px",
        background:"#112240",
        padding:"40px",
        borderRadius:"12px",
        color:"white",
        textAlign:"center",
        boxShadow:"0 0 20px rgba(0,0,0,0.3)"
      }}>

        <h2 style={{fontSize:"26px", marginBottom:"25px"}}>Create Account ✨</h2>

        <form onSubmit={handleSignup} style={{display:"flex", flexDirection:"column", gap:"12px"}}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
            style={{padding:"12px", borderRadius:"6px", border:"none"}}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
            style={{padding:"12px", borderRadius:"6px", border:"none"}}
          />

          {error && <p style={{color:"red", fontSize:"14px"}}>{error}</p>}

          <button style={{
            background:"#3a86ff",
            padding:"12px",
            border:"none",
            borderRadius:"6px",
            color:"white",
            cursor:"pointer",
            fontWeight:"600"
          }}>
            Sign Up
          </button>
        </form>

        <div style={{ marginTop: "18px", color:"#8892b0" }}>or sign up with</div>

        <div style={{marginTop:"14px", display:"flex", flexDirection:"column", gap:"10px"}}>
          
          <button style={socialBtn} onClick={() => signInWithPopup(auth, googleProvider)}>
            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" style={iconStyle} />
            Continue with Google
          </button>

          <button
            style={{ ...socialBtn, background:"#f3f4f6" }}
            onClick={() => signInWithPopup(auth, githubProvider)}
          >
            <img src="https://www.svgrepo.com/show/349375/github.svg" alt="GitHub" style={iconStyle} />
            Continue with GitHub
          </button>

        </div>

        <p style={{marginTop:"20px", fontSize:"14px"}}>
          Already have an account?{" "}
          <Link to="/login" style={{color:"#3a86ff"}}>Login here</Link>
        </p>
      </div>
    </div>
  );
}
