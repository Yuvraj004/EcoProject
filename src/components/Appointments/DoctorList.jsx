import React from "react"
import Navbar from "../Navbar";
import "./doctor.css";
import "../../index.css";
import { NavItem, NavLink, Nav } from "reactstrap";
import styles from "../../style";
import { Link } from "react-router-dom";
import { people01, people02  } from "../../assets";
import  people03  from "../../assets/people03.jpg";
const DoctorList = () => {
  return (
    <>
      <div
        id="appointmentpatient"
        className="bg-primary w-full overflow-hidden loginDiv appointmentdiv"
      >
        <Navbar />
        <Nav tabs className={` ${styles.flexCenter}`}>
          <NavItem className="links">
            <NavLink>
              <Link to="/doctorlist">Doctor List</Link>
            </NavLink>
          </NavItem>
          <NavItem className="links">
            <NavLink active>
              <Link to="/getPatientProfile">Manage Appointment</Link>
            </NavLink>
          </NavItem>
          <NavItem className="links">
            <NavLink>
              <Link to="/getPatientProfile">Edit Profile</Link>
            </NavLink>
          </NavItem>
          <NavItem className="links">
            <NavLink>
              <Link to="/patientAppointments">View Patient History</Link>
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <div className="doctors grid grid-cols-1 md:grid-cols-3 gap-8 rounded-md
      ">
        <div className="card bg-white shadow-md p-4 flex flex-col items-center">
          <img src={people01} className="card-img-top w-full" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-xl font-bold">Dr. Sahil Khan</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">MD, MBBS</li>
            <li className="list-group-item">Experience: 5 years</li>
            <li className="list-group-item">VENKATESHVARA HOSPITAL</li>
          </ul>
          <div className="card-body">
            <Link
              to="/appointment"
              className="btn bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Book An Appointment
            </Link>
          </div>
        </div>

        <div className="card bg-white shadow-md p-4 flex flex-col items-center">
          <img src={people02} className="card-img-top w-full h-20" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-xl font-bold">Dr. KAILASH SHARMA</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">MD, MBBS</li>
            <li className="list-group-item">Experience: 10 years</li>
            <li className="list-group-item">MEDANTA HOSPITAL</li>
          </ul>
          <div className="card-body">
            <Link
              to="/appointment"
              className="btn bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Book An Appointment
            </Link>
          </div>
        </div>

        <div className="card bg-white shadow-md p-4 flex flex-col items-center">
          <img src={people03} className="card-img-top w-75" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-xl font-bold">Dr. BOBBY DEOL</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">MD, MBBS</li>
            <li className="list-group-item">Experience: 20 years</li>
            <li className="list-group-item">MAX HOSPITAL</li>
          </ul>
          <div className="card-body">
            <Link
              to="/appointment"
              className="btn bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Book An Appointment
            </Link>
          </div>
        </div>


        {/* Repeat similar changes for other cards */}
      </div>
    </>
  );
};

export default DoctorList;
