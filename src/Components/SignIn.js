import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css';
import Navbar from "./Navbar"; // Import Navbar

import GoogleIcon from "@mui/icons-material/Google";

// Fungsi untuk menangani tindakan saat tombol "Sign In with Google" diklik
const handleSignInWithGoogle = () => {
  // Tambahkan logika autentikasi Google di sini
  alert("Sign In with Google clicked");
};

const SignIn = () => {
  return (
    <>
      <Navbar />
      <main className="form-container">
        <Form className="form-box w-100 m-auto">
          <h1 className="h3 mb-3 fw-normal">Sign In</h1>
          <Form.Group controlId="formUserID">
            <Form.Label>User ID</Form.Label>
            <Form.Control type="text" placeholder="Enter Username Or E-mail" />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button className="w-100 mt-3">Sign In</Button>
          <hr /> {/* Garis pemisah */}
          <button className="w-100 mt-3" onClick={handleSignInWithGoogle}>
          <GoogleIcon /> Sign In with Google
          </button>

          <p>Not A Member? <Link to="/SignUp">Register Now</Link></p>
        </Form>
      </main>
    </>
  )
}

export default SignIn;
