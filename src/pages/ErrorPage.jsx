import React from "react";
 import "./ErrorPage.css";
import NavBar from "../components/NavBar";  
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <header>
        <NavBar />
        <h1>Error Page</h1>
      </header>
      <main>
        <div className="error-message">
          <h1>Oops! Something went wrong.</h1>
          <p>We couldn't find the page you were looking for.</p>
          <Link to="/">Go back to Home</Link>
        </div>
      </main>
    </>
  );
}

export default ErrorPage;