import {
  Card,
  CardBody,
  Avatar,

} from "@material-tailwind/react";

import { useNavigate, NavLink } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { ref, onValue, update } from "firebase/database";
import { auth, db } from "../firebase";
import { profilepic } from "../assets";
import { signOut } from "firebase/auth";
import styles from "../style";
import { maghe,logo } from "../assets";
import easyinvoice from "easyinvoice";
import JsPDF from 'jspdf';
import ReactDOMServer from "react-dom/server";



export function Profile() {


  const { currentUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [paymentstatus, setPayment] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [event, setEvent] = useState("");
  const [event1, setEvent1] = useState("");
  const [event2, setEvent2] = useState("");
  const [totalfee, setFee] = useState("");
  const [team, setTeam] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      const starCountRef = ref(db, "users/" + currentUser.uid);
      onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
          var data = snapshot.val();
          setUsername(data.firstName + " " + data.lastName);
          setEmail(data.email);
          setPayment(data.payment);
          setMobile(data.mob);
          setAddress(data.address);
          setCity(data.city);
          setState(data.state);
          setAddress(data.address);
          setEvent(data.event1+" , "+data.event2);
          setEvent1(data.event1);
          setEvent2(data.event2);
          setTeam(data.team);
          setFee(1500);

        }
      });
    }
  }, [currentUser]);

  const clickLogin = () => {
      signOut(auth)
      navigate("/login")

  };

  const clickPrint = () => {
    navigate("/print")

};

  const clickJohar = () => {
    const updates = {};
    // update(ref(db, `/${auth.currentUser.uid}/${tempId}`), {
    //   event1:"JoharNite",
    // });
    updates['/users/' + currentUser.uid + '/event1'] = "Johar Nite";
    update(ref(db), updates);


};

const clickSolo = () => {
  const updates = {};
  // update(ref(db, `/${auth.currentUser.uid}/${tempId}`), {
  //   event1:"JoharNite",
  // });
  updates['/users/' + currentUser.uid + '/team'] = "Solo";
  update(ref(db), updates);
};

const clickDuet = () => {
  const updates = {};
  // update(ref(db, `/${auth.currentUser.uid}/${tempId}`), {
  //   event1:"JoharNite",
  // });
  updates['/users/' + currentUser.uid + '/team'] = "Duet";
  update(ref(db), updates);
};

const clickGroup = () => {
  const updates = {};
  // update(ref(db, `/${auth.currentUser.uid}/${tempId}`), {
  //   event1:"JoharNite",
  // });
  updates['/users/' + currentUser.uid + '/team'] = "Group";
  update(ref(db), updates);
};

const clickMaghe = () => {
  const updates = {};
    // update(ref(db, `/${auth.currentUser.uid}/${tempId}`), {
    //   event1:"JoharNite",
    // });
    updates['/users/' + currentUser.uid + '/event2'] = "Maghe Susun";
    update(ref(db), updates);


  };


  const generatePDF = () => {
    let element = (
      <div className="flex w-full h-max "><div className="mainContainer bg-primary xl:pt-0 ml:pt-0 flex-initial mx-4 flex-col top-0 items-center min-h-screen sm:justify-center sm:pt-0">
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-green-500/50" />
      </div>
      <div>
      <Card className=" mx-2 -mt-16 mb-6 w-full-4 items-center mr-2 -pr-4 overflow-hidden ">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between gap-6">
            <div className="flex flex-col items-center gap-6">
              <Avatar
                src= {profilepic}
                alt="bruce-mars"
                size="xl"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <p className="mb-1 font-bold font-sans text-xl">
                   Name :<p className="font-serif mb-1 font-bold text-xm">
                   {username}
                </p>
                </p>
                <p className="mb-1 font-bold font-sans text-xl">
                   Email :<p className="font-serif mb-1 font-bold text-xm">
                   {email}</p>
                </p>
                <p className="mb-1 font-bold font-sans text-xl">
                   Mobile Number :<p className="font-serif mb-1 font-bold text-xm">
                   {mobile}</p>
                </p>
                <p className="mb-1 font-bold font-sans text-xl">
                   Participating In :<p className="font-serif mb-1 font-bold text-xm">
                   {event}</p>
                </p>
                <p className="mb-1 font-bold font-sans text-xl">
                   Address :<p className="font-serif mb-1 font-bold text-xm">
                   {address}</p>
                </p>
                <p className="mb-1 font-bold font-sans text-xl">
                   City :<p className="font-serif mb-1 font-bold text-xm">
                   {city}</p>
                </p>
                <p className="mb-1 font-bold font-sans text-xl">
                   State :<p className="font-serif mb-1 font-bold text-xm">
                   {state}</p>
                </p>
                <p className="mb-1 font-bold font-sans text-xl">
                   Payment Status :<p className="font-serif mb-1 font-bold text-xm">
                   { paymentstatus? <p className="text-green-800">Done</p>: <p className="text-red-800">Not Done</p>}</p>
                </p>
                <p className="mb-1 font-bold font-sans text-xl">
                  Register For:
                <img src={logo} alt="johar-nite" className="object-contain" />
                {event1 ? <p className="text-green-600">Registered ✓</p>  : <button onClick={clickJohar} className={`w-full my-4 py-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
                  Register
                </button>}
                
                </p>
                <p className="mb-1 font-bold font-sans text-xl">
                  Register For:
                <img src={maghe} alt="maghe-susun" className="w-[210.6px] object-contain" />
                
                {event2 ? <p className="text-green-600">Registered ✓</p>  : <button onClick={clickMaghe} className={`w-full my-4 py-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
                  Register
                </button>}
                </p>
                {event2 && <div>{team ? <p className="mb-1 font-bold font-sans text-xl">
                   Team Type:<p className="font-serif mb-1 font-bold text-xm">
                    {team}
                   </p>
                </p>  : <div>
                  <p className="mb-1 font-bold font-sans text-xl">Select Only One</p>
                <div className="flex flex-row">
                  <button onClick={clickSolo} className={`w-full mx-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
                    Solo
                  </button>
                  <button onClick={clickDuet} className={`w-full mx-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
                    Duet
                  </button>
                  <button onClick={clickGroup} className={`w-full mx-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
                    Group
                  </button>
                </div>
                </div>}</div> }
                

                


                <p className="mb-1 font-bold font-sans text-xl">
                   Total Entry Fee:<p className="font-serif mb-1 font-bold text-xm">
                    {totalfee}
                   </p>
                </p>


              </div>
            </div>
            
          </div>


        </CardBody>
      </Card>
      </div>

    </div>
    </div>
    );
    const doc = new JsPDF("p", "pt", "letter");
    doc.html(ReactDOMServer.renderToString(element), {
      callback: function (doc) {
        doc.save('sample.pdf');
      }
    });
  };


  




  return (
    <div className="mainContainer bg-primary xl:pt-0 ml:pt-0 flex-initial mx-4 flex-col top-0 items-center min-h-screen sm:justify-center sm:pt-0">
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-green-500/50" />
      </div>
      <div>
      <Card className=" mx-2 -mt-16 mb-6 w-full-4 items-center mr-2 -pr-4 overflow-hidden ">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between gap-6">
            <div className="flex flex-col items-center gap-6">
              <Avatar
                src= {profilepic}
                alt="bruce-mars"
                size="xl"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <p className="mb-1 font-bold font-sans text-xl">
                   Name :<p className="font-serif mb-1 font-bold text-xm">
                   {username}
                </p>
                </p>
                <p className="mb-1 font-bold font-sans text-xl">
                   Email :<p className="font-serif mb-1 font-bold text-xm">
                   {email}</p>
                </p>
                <p className="mb-1 font-bold font-sans text-xl">
                   Mobile Number :<p className="font-serif mb-1 font-bold text-xm">
                   {mobile}</p>
                </p>
                <p className="mb-1 font-bold font-sans text-xl">
                   Participating In :<p className="font-serif mb-1 font-bold text-xm">
                   {event}</p>
                </p>
                <p className="mb-1 font-bold font-sans text-xl">
                   Address :<p className="font-serif mb-1 font-bold text-xm">
                   {address}</p>
                </p>
                <p className="mb-1 font-bold font-sans text-xl">
                   City :<p className="font-serif mb-1 font-bold text-xm">
                   {city}</p>
                </p>
                <p className="mb-1 font-bold font-sans text-xl">
                   State :<p className="font-serif mb-1 font-bold text-xm">
                   {state}</p>
                </p>
                <p className="mb-1 font-bold font-sans text-xl">
                   Payment Status :<p className="font-serif mb-1 font-bold text-xm">
                   { paymentstatus? <p className="text-green-800">Done</p>: <p className="text-red-800">Not Done</p>}</p>
                </p>
                <p className="mb-1 font-bold font-sans text-xl">
                  Register For:
                <img src={logo} alt="johar-nite" className="object-contain" />
                {event1 ? <p className="text-green-600">Registered ✓</p>  : <button onClick={clickJohar} className={`w-full my-4 py-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
                  Register
                </button>}
                
                </p>
                <p className="mb-1 font-bold font-sans text-xl">
                  Register For:
                <img src={maghe} alt="maghe-susun" className="w-[210.6px] object-contain" />
                
                {event2 ? <p className="text-green-600">Registered ✓</p>  : <button onClick={clickMaghe} className={`w-full my-4 py-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
                  Register
                </button>}
                </p>
                {event2 && <div>{team ? <p className="mb-1 font-bold font-sans text-xl">
                   Team Type:<p className="font-serif mb-1 font-bold text-xm">
                    {team}
                   </p>
                </p>  : <div>
                  <p className="mb-1 font-bold font-sans text-xl">Select Only One</p>
                <div className="flex flex-row">
                  <button onClick={clickSolo} className={`w-full mx-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
                    Solo
                  </button>
                  <button onClick={clickDuet} className={`w-full mx-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
                    Duet
                  </button>
                  <button onClick="downloadInvoice()" className={`w-full mx-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
                    Group
                  </button>
                </div>
                </div>}</div> }
                

                


                <p className="mb-1 font-bold font-sans text-xl">
                   Total Entry Fee:<p className="font-serif mb-1 font-bold text-xm">
                    {totalfee}
                   </p>
                </p>
                <button onClick={clickLogin} className={`w-full my-4 py-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
                  Log Out
                </button>


                  

                <button onClick={generatePDF}  className={`w-full my-4 py-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
                  Print Reciept
                </button>

              </div>
            </div>
            
          </div>


        </CardBody>
      </Card>
      </div>
      <NavLink
                    className="navbar-link"
                    to="/">
                    <button
                    class="fixed z-90 bottom-10 right-4 bg-blue-gradient w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-green-700 hover:drop-shadow-2xl ">&#127968;</button>
                    </NavLink>
    </div>
  );
}

export default Profile;
