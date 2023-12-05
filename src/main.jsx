import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Appointment from "./components/Appointments/appointment";
import AfterLogin from "./components/Login/AfterLogin";
import {AuthProvider} from "./context/AuthProvider";
import PatientAppointments from "./components/Appointments/PatientAppointments";
import DoctorList from "./components/Appointments/DoctorList";
import PaymentGateway from "./components/PaymentGateway";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/loginpatient" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/afterlogin" element={<AfterLogin />} />
          <Route path="/patientAppointments" element={<PatientAppointments />} />
          <Route path="/payment" element={<PaymentGateway/>}/>
          <Route path="/getPatientProfile" element={<PatientAppointments />} />
          <Route path="/doctorlist" element={<DoctorList />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
