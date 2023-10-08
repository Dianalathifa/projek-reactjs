import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css';
import Navbar from "./Navbar"; // Import Navbar

import GoogleIcon from "@mui/icons-material/Google";

const handleSignUpWithGoogle = () => {
  // Tambahkan logika autentikasi Google di sini
  alert("Sign Up with Google clicked");
};
const SignUp = () => {
  return (
    <>
      <Navbar /> {/* Letakkan Navbar di luar elemen <main> */}
      <main className="form-container">
        <Form className="form-box w-100 m-auto">
          <h1 className="h3 mb-3 fw-normal">Sign Up</h1>

          <Form.Group controlId="formNama">
            <Form.Label>Nama</Form.Label>
            <Form.Control className="atas" type="text" placeholder="Nama Lengkap" />
          </Form.Group>

          <Form.Group controlId="formUserID">
            <Form.Label>E-mail</Form.Label>
            <Form.Control className="tengah" type="text" placeholder="Enter e-mail" />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className="tengah" type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formUlangiPassword">
            <Form.Label>Verifikasi Password</Form.Label>
            <Form.Control className="bawah" type="password" placeholder="Password" />
          </Form.Group>

          <Button className="w-100 mt-3">Sign Up</Button>
          
          <Button className="w-100 mt-3 google-button" onClick={handleSignUpWithGoogle}><GoogleIcon /> Sign Up with Google</Button>

          <p>Do you have an Account? <Link to="/SignIn">Sign In</Link></p>

        </Form>
      </main>
    </>
  );
}

export default SignUp;
