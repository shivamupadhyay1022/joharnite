import React, { useState, useContext, useEffect } from "react";
import { auth, db } from "../firebase";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import styles from "../style";

function Dashboard() {
  const { currentUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      const starCountRef = ref(db, "users/" + currentUser.uid);
      onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
          var data = snapshot.val();
          setUsername(data.firstName + " " + data.lastName);
        }
      });
    }
  }, [currentUser]);

  const clickLogin = () => {
    if (currentUser) {
      signOut(auth);
    } else {
      navigate("/login");
    }
  };

  const clickSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="mainContainer bg-primary flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
      {currentUser ? navigate("/profile") : navigate("/login")}
      <div>
                    <h3 className="text-4xl font-bold text-purple-600">
                    <span className="text-gradient">SignUp</span>
                    </h3>
            </div>
      {currentUser && <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Welcome, {username}</p>}
      <div className="buttons">
        <button onClick={clickLogin} className={`w-full py-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
          {currentUser ? "Log Out" : "Login"}
        </button>
        <NavLink
              className="navbar-link"
              to="https://buy.stripe.com/test_28o01RgZ261PcucfYY">
                <Button styles={`mt-10`} />
            </NavLink>
        {!currentUser && <button onClick={clickSignup} className={`w-full py-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>Sign Up</button>}
      </div>
    </div>
  );
}

export default Dashboard;