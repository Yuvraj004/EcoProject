import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import styles from "../../style";
import axios from "../../api/axios";
const LOGIN_URL = "/auth";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CTA from "../CTA";
import { Link,useNavigate } from "react-router-dom";
import Appointment from '../Appointments/appointment';
import patientimg from "../../assets/patient.png";
import "./login.css"
const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const history = useNavigate()
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");
  const [admin, setAdmin] = useState("");
  useEffect(() => {
    userRef.current.focus();
    if(success==true){
      history("/afterlogin");
    }
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          // withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      console.log(accessToken);
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          {history("/afterlogin")}
          <Appointment/>
        </section>
      ) : (
        <div className="bg-primary w-full overflow-hidden loginDiv ">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
          <div className="formlogin">
            <img src={patientimg} alt="Image of a person" style={{ float: "left" }} />

            <form
              className="loginForm"
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                float: "right",
                alignItems: "center",
              }}
            >
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <h1 className="loginElement">Sign In</h1>
              <label htmlFor="username" className="inputLabels">Username:</label>
              <input
                type="text"
                style={{ color: "black" }}
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />

              <label htmlFor="password" className="inputLabels">Password:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                style={{ color: "black" }}
              />
              <label className="inputLabels">Login For:</label>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input
                  type="radio"
                  id="Patient"
                  onChange={(e) => setPatient(e.target.value)}
                  value={patient}
                  required
                />
                &nbsp;
                <label htmlFor="type" className="inputLabels">Patient</label>&nbsp;&nbsp;&nbsp;
                <br></br>
                <input
                  type="radio"
                  id="doctor"
                  name="doctor"
                  onChange={(e) => setPatient(e.target.value)}
                  value={patient}
                />
                &nbsp;
                <label htmlFor="doctor" className="inputLabels">Doctor</label>&nbsp;&nbsp;&nbsp;
                <br />
                <input
                  type="radio"
                  id="admin"
                  name="admin"
                  onChange={(e) => setAdmin(e.target.value)}
                  value={admin}
                />
                &nbsp;
                <label htmlFor="admin" className="inputLabels">Admin</label>
              </div>
              <button ><a href=" http://localhost:3000">Sign In</a></button>
              <p>
                Need an Account?
                <br />
                <span className="lines">
                  {/*put router link here*/}
                  <a href="/register" style={{ marginLeft: "2rem" }}>
                    Sign Up
                  </a>
                </span>
              </p>
            </form>
          </div>
          <CTA />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Login;
