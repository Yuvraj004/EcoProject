import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import styles from "../../style";
import axios from "../../api/axios";
const LOGIN_URL = "/auth";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CTA from "../CTA";
import { Link, useNavigate } from "react-router-dom";
import Appointment from "../Appointments/appointment";
import patientimg from "../../assets/patient.png";
import "./Login.css";
const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const history = useNavigate();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");
  const [admin, setAdmin] = useState("");

  useEffect(() => {
    userRef.current.focus();
    if (success) {
      history("/afterlogin");
    }
  }, [success]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/auth",
        JSON.stringify({ user, pwd }),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
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
    <div className="bg-primary w-full overflow-hidden loginDiv">
      {success ? (
        <section>
          {history("/afterlogin")}
          <Appointment />
        </section>
      ) : (
        <>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
          <div className="formlogin">
            <img
              src={patientimg}
              alt="Image of a person"
              className="float-left"
            />

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
              <h1 className="loginElement">SIGN IN</h1>
              <label htmlFor="username" className="inputLabels">
                Username:
              </label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                className="text-black"
              />

              <label htmlFor="password" className="inputLabels">
                Password:
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                className="text-black"
              />

              <label className="inputLabels">Login For:</label>
              <div className="flex flex-col justify-between">
                <div className="flex flex-row" >
                  <input
                    type="radio"
                    id="Patient"
                    onChange={(e) => setPatient(e.target.value)}
                    value={patient}
                    required
                  />
                  <label htmlFor="type" className="inputLabels">
                    Patient
                  </label>
                </div>
                <div className="flex flex-row">
                  <input
                    type="radio"
                    id="doctor"
                    name="doctor"
                    onChange={(e) => setPatient(e.target.value)}
                    value={patient}
                  />
                  <label htmlFor="doctor" className="inputLabels">
                    Doctor
                  </label>
                </div>
                <div className="flex flex-row">
                  <input
                    type="radio"
                    id="admin"
                    name="admin"
                    onChange={(e) => setAdmin(e.target.value)}
                    value={admin}
                  />
                  <label htmlFor="admin" className="inputLabels">
                    Admin
                  </label>
                </div>
              </div>

              <button className="loginBtn">
                <Link to="http://localhost:3000">Sign In</Link>
              </button>
              
              <p className="mt-4">
                Need an Account?&nbsp;
                {/* <br /> */}
                <span className="loginBtn">
                  <Link to="/register" >
                    Sign Up
                  </Link>
                </span>
              </p>
            </form>
            
          </div>
          <CTA />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Login;
