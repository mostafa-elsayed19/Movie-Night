// import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const password = watch("password");
  return (
    <div className="container my-5">
      <div className="w-75 mx-auto text-center">
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column w-100 justify-content-around p-3 border border-primary-subtle"
        >
          <div className="mb-4 d-flex flex-column align-items-center">
            <div className="w-100 d-flex align-items-center justify-content-between">
              <label className="fw-bold" htmlFor="name">
                Name
              </label>
              <input
                className={`w-75 border form-control shadow-none
                            ${
                              errors.name ? "border-danger" : "border-primary"
                            } `}
                id="name"
                type="text"
                {...register("name", { required: true })}
              />
            </div>
            {errors.name && (
              <span className="text-danger">Please type your name</span>
            )}
          </div>

          <div className="mb-4">
            <div className="w-100 d-flex align-items-center justify-content-between">
              <label className="fw-bold" htmlFor="email">
                Email
              </label>
              <input
                className={`w-75 border form-control shadow-none
                            ${
                              errors.email ? "border-danger" : "border-primary"
                            } `}
                id="email"
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
              />
            </div>
            {errors.email && (
              <span className="text-danger">Invalid email format</span>
            )}
          </div>

          <div className="mb-4">
            <div className="w-100 d-flex align-items-center justify-content-between">
              <label className="fw-bold" htmlFor="username">
                Username
              </label>
              <input
                className={`w-75 border form-control shadow-none
                            ${
                              errors.username
                                ? "border-danger"
                                : "border-primary"
                            } `}
                id="username"
                type="username"
                {...register("username", {
                  required: true,
                  validate: (value) =>
                    !value.includes(" ") ||
                    "Username must not contain whitespaces.",
                })}
              />
            </div>
            {errors.username && (
              <span className="text-danger">Please don&apos;t use spaces</span>
            )}
          </div>

          <div className="mb-4">
            <div className="w-100 d-flex align-items-center justify-content-between">
              <label className="fw-bold" htmlFor="password">
                Password
              </label>
              <div className="position-relative w-75">
                <input
                  className={`w-100 border form-control shadow-none
                        ${
                          errors.password ? "border-danger" : "border-primary"
                        } `}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@+*\-_]).{8,}$/,
                  })}
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
            {errors.password && (
              <span className="text-danger">
                Invalid password, please type a stronger password
              </span>
            )}
          </div>

          <div className="mb-4">
            <div className="w-100 d-flex align-items-center justify-content-between">
              <label className="fw-bold" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className={`w-75 border form-control shadow-none
                            ${
                              errors.confirmPassword
                                ? "border-danger"
                                : "border-primary"
                            } `}
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => value === password,
                })}
              />
            </div>
            {errors.confirmPassword && (
              <span className="text-danger">Passwords don&apos;t match</span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
