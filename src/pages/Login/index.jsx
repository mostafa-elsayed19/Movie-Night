// import useForm from "./loginform";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
    setPasswordError("");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      return;
    }

    if (!emailPattern.test(email)) {
      setEmailError("Invalid email format");
      return;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return;
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="container my-5">
      <div className="w-75 mx-auto text-center">
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column w-100 justify-content-around p-3 border border-primary-subtle"
        >
          <div className="mb-4 d-flex flex-column align-items-center">
            <div className="w-100 d-flex align-items-center justify-content-between">
              <label className="fw-bold" htmlFor="email1">
                Email:
              </label>
              <input
                className={
                  emailError
                    ? "w-75 border form-control border-danger shadow-none"
                    : "w-75 border form-control border-primary shadow-none"
                }
                id="email1"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            {emailError && <p className="text-danger my-2">{emailError}</p>}
          </div>
          <div className="mb-6">
            <div className="mb-4 d-flex flex-column align-items-center">
              <div className="w-100 d-flex align-items-center justify-content-between">
                <label className="fw-bold" htmlFor="password1">
                  Password:
                </label>
                <div className="position-relative w-75">
                  <input
                    className={` 
                  ${
                    passwordError
                      ? "position-relative w-100 border form-control border-danger shadow-none"
                      : "position-relative w-100 border form-control border-primary shadow-none"
                  }
                    `}
                    id="password1"
                    type={showPassword ? "text" : "password"}
                    placeholder="******************"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <span
                    role="button"
                    className="position-absolute top-50 end-0 translate-middle"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </span>
                </div>
              </div>
            </div>

            {passwordError && <p className="text-danger">{passwordError}</p>}
          </div>
          <div className="flex items-center justify-center">
            <button className="btn btn-primary" type="submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
