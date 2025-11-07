import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((u) => setUser(u));
  }, []);

  const username = user?.email ? user.email.split("@")[0] : null;

  const handleLogout = () => {
    signOut(auth);
    navigate("/");
  };

  return (
    <nav style={{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      padding:"15px 30px",
      background:"#0d1b2a",
      color:"white",
      fontSize:"18px",
      fontWeight:"600",
      position:"sticky",
      top:0,
      zIndex:100
    }}>
      
      <div style={{ fontSize:"22px", fontWeight:"700", cursor:"pointer" }} onClick={() => navigate("/")}>
        Career Compass
      </div>

      <div style={{ display:"flex", gap:"22px", alignItems:"center" }}>

        <Link to="/" style={{color:"white", textDecoration:"none"}}>Home</Link>

        {user ? (
          <>
            {/* Profile Avatar */}
            <div 
              style={{
                width:"38px", height:"38px",
                borderRadius:"50%", background:"#3a86ff",
                display:"flex", alignItems:"center",
                justifyContent:"center", cursor:"pointer",
                color:"white", fontWeight:"700", fontSize:"16px"
              }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {username[0].toUpperCase()}
            </div>

            {/* Dropdown menu */}
            {menuOpen && (
              <div style={{
                position:"absolute", right:"30px", top:"70px",
                background:"#1b263b",
                borderRadius:"10px", padding:"12px",
                width:"160px", boxShadow:"0 0 15px rgba(0,0,0,0.4)"
              }}>
                <p style={{color:"#64f4ac", margin:"5px 0 12px 0", fontSize:"14px"}}>
                  @ {username}
                </p>
                
                <button
                  onClick={() => navigate("/dashboard")}
                  style={{
                    width:"100%", background:"#3a86ff", padding:"8px",
                    border:"none", borderRadius:"6px",
                    color:"white", cursor:"pointer", marginBottom:"6px"
                  }}
                >
                  Dashboard
                </button>

                <button
                  onClick={handleLogout}
                  style={{
                    width:"100%", background:"#ef233c", padding:"8px",
                    border:"none", borderRadius:"6px",
                    color:"white", cursor:"pointer"
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              style={{
                background:"transparent",
                border:"none",
                color:"white",
                cursor:"pointer",
                fontWeight:"600"
              }}>
              Login
            </button>

            <button
              onClick={() => navigate("/signup")}
              style={{
                background:"#ff4d6d",
                padding:"8px 18px",
                borderRadius:"25px",
                color:"white",
                border:"none",
                cursor:"pointer",
                fontWeight:"600"
              }}>
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
