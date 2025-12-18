"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import styles from "../styles/Register.module.css";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    businessName: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    setForm((prev) => ({
      ...prev,
      email: savedEmail || "",
      password: savedPassword || "",
    }));
  }, []);

  useEffect(() => {
    localStorage.setItem("email", form.email);
    localStorage.setItem("password", form.password);
  }, [form.email, form.password]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      const data = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
        businessName: form.businessName,
        phoneNumber: form.phoneNumber,
      }

      const response = await axios.post(
        "https://staging-api.payfusion.io/users/v1/auths/register",
        data
      );

      console.log("Registration successful:", response.data);

      localStorage.setItem("userData", JSON.stringify(response.data));

      alert("Account created successfully!");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        businessName: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        terms: false,
      });
    } catch (err: any) {
      console.error(err);
      alert(err?.response?.data?.message || "Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Image
          src="/Frame.svg"
          alt="logo"
          width={60}
          height={60}
          className={styles.frameImage}
        />

        <h1 className={styles.title}>Create Account</h1>
        <p className={styles.subtitle}>Join Payfonte to get started.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.nameGroup}>
            <div className={styles.inputGroup}>
              <label>First Name</label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="John"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Last Name</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className={styles.input}
                required
              />
            </div>
          </div>

          <label className={styles.header}>Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="sample@mail.com"
            className={styles.input}
            required
          />
          <div className={styles.businessNameField}>
            <label className={styles.header}>Business Name</label>
            <input
              name="businessName"
              value={form.businessName}
              onChange={handleChange}
              placeholder="Your Business Name"
              className={styles.input}
              required
            />
          </div>
          <label className={styles.header}>PhoneNumber</label>
          <input
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className={styles.input}
            required
          />

          <div className={styles.passwordField}>
            <label className={styles.header}>Create Password</label>
            <div className={styles.passwordWrapper}>
              <div className={styles.inputGroup}>
                <div className={styles.passwordContainer}>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter Password Here"
                    className={styles.passwordInput}
                    required
                  />
                  <button
                    type="button"
                    className={styles.eyeBtn}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.passwordField}>
            <label className={styles.header}>Confirm Password</label>
            <div className={styles.passwordWrapper}>
              <div className={styles.inputGroup}>
                <div className={styles.passwordContainer}>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className={styles.passwordInput}
                    required
                  />
                  <button
                    type="button"
                    className={styles.eyeBtn}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={form.terms}
              onChange={handleChange}
              required
            />
            <label className={styles.terms}>
              By clicking create account, you are agreeing to our{" "}
              <a href="/terms" className={styles.link}>
                Terms and Privacy Policy
              </a>
            </label>
          </div>

          <button type="submit" className={styles.btn} disabled={loading}>
            {loading ? "Creating Account ..." : "Create account"}
          </button>
        </form>

        <p className={styles.loginText}>
          Already have an account?{" "}
          <Link href="/" className={styles.loginLink}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
