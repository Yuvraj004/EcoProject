import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";
import './appoint.css';
import styles from "../../style";
import '../../index.css';
import Navbar from "../Navbar";
import Footer from "../Footer";

// import Cookies from "js-cookie";
// import Departments from "../Departments";
class Appointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Email: "",
      Contact: "",
      Age: "",
      Day: "",
      Speciality: "",
      Description: "",
      Id: "",
    };
    this.inputRef = React.createRef();
  }
  async handleSubmit(e) {
    console.log(this.state);
    try {
      const response = await axios.post(
        "http://localhost:3500/appointment/appointmentList",
        JSON.stringify(this.state),
        {
          headers: { "Content-Type": "application/json" ,'Access-Control-Allow-Origin': '*'},
          // withCredentials: true,
          
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      alert(response?.data);
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
      // errRef.current.focus();
    }
    // axios
    //   .post("http://localhost:3500/appointment/appointmentList", this.state, {
    //     headers: headers,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     alert(res.data);
    //   });
  }
  // componentDidMount() {
  // 	this.inputRef.current.focus();
  // }
  render() {
    return (
      <>
        <div id="appointmentpatient" className="bg-primary w-full overflow-hidden loginDiv appointmentdiv ">
          <Navbar/>
          <Nav tabs className={` ${styles.flexCenter}`} >
            <NavItem className="links" >
              <NavLink >
                <Link to="/doctorlist">Doctor List</Link>
              </NavLink>
            </NavItem>
            <NavItem className="links" >
              <NavLink active>
                <Link to="/getPatientProfile">Manage Appointment</Link>
              </NavLink>
            </NavItem>
            <NavItem className="links" >
              <NavLink  >
                <Link to="/getPatientProfile">Edit Profile</Link>
              </NavLink>
            </NavItem>
            <NavItem className="links">
              <NavLink >
                <Link to="/patientAppointments">
                  View Patient History
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
          <section className="appointment">
            <div className="container">
              <div className="section-title" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <h1 style={{ justifyContent: "center", fontSize: "56px", marginLeft: "4.5rem" }}>Make an Appointment</h1>
              </div>

              <form
                // action="forms/appointment.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                  <div className=" inputdiv">
                    <label htmlFor="name">Name: </label>
                    <input
                      type="text"
                      name="name"
                      className="inputfield"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                      onChange={(e) => {
                        this.setState({ Name: e.target.value });
                      }}
                    />
                      {/* <div className="validate"></div> */}
                    
                  </div>

                  <div className="inputdiv">
                    
                      <label htmlFor="email">Email: </label>
                      <input
                        type="email"
                        className="inputfield"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                        onChange={(e) => {
                          this.setState({ Email: e.target.value });
                        }}
                      />
                      <div className="validate"></div>
                    
                  </div>

                  <div className="inputdiv mt-3">
                    
                      <label htmlFor="phone">Phone Number: </label>
                      <input
                        type="tel"
                        className="inputfield"
                        name="phone"
                        id="phone"
                        placeholder="Your Phone"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                        onChange={(e) => {
                          this.setState({ Contact: e.target.value });
                        }}
                      />
                      <div className="validate"></div>
                    
                  </div>

                  <div className="inputdiv mt-3">
                      <label htmlFor="date">Appointment Date: </label>
                      <input
                        type="datetime"
                        name="date"
                        id="date"
                        className="inputfield"
                        placeholder="Appointment Date"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                        onChange={(e) => {
                          this.setState({ Day: e.target.value });
                        }}
                      />
                      <div className="validate"></div>
                  </div>

                  <div className="inputdiv mt-3" style={{ color: "black" }}>
                  
                      <label style={{ color: "white" }} htmlFor="department">Department: </label>
                      <select
                        name="department"
                        id="department"
                        className="form-select inputfield"
                      >
                        <option value="">Select Department</option>
                        <option value="Department 1">Neurosurgeon</option>
                        <option value="Department 2">Department 2</option>
                        <option value="Department 3">Department 3</option>
                      </select>
                    
                  </div>

                  <div className="inputdiv mt-3" style={{ color: "black", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    
                      <label style={{ color: "white" }} htmlFor="doctor">Doctor: </label>
                      <select name="doctor" id="doctor" className="form-select inputfield">
                        <option value="">Select Doctor</option>
                        <option value="Doctor 1">Doctor 1</option>
                        <option value="Doctor 2">Doctor 2</option>
                        <option value="Doctor 3">Doctor 3</option>
                      </select>
                    
                  </div>
                {/* </div> */}

                <div className="inputdiv mt-3">
                 
                    <label htmlFor="message">Any message for the Doctor: </label>
                    <textarea
                      className="form-control inputfield"
                      name="message"
                      id="message"
                      rows="5"
                      placeholder="Message (Optional)"
                    ></textarea>
                    {/* <div className="validate"></div> */}
                  
                </div>

                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your appointment request has been sent successfully. Thank you!
                  </div>
                </div>

                <div className="text-center" style={{ paddingBottom: "1rem" }}>
                  <button type="submit" onClick={(e) => { this.handleSubmit(e) }}>Make an Appointment</button>
                </div>
              </form>
            </div>
          </section>
          <Footer/>
        </div>
      </>
    );
  }
}

export default Appointment;
