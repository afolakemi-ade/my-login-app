"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import styles from "../styles/Register.module.css";

export default function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const confirmRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
  
    if (confirmRef.current) {
      confirmRef.current.focus();
      console.log("confirm input focused programmatically");
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
 
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    console.log("change event:", { name, value, type, checked });

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      setError("Please fill in all required fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (form.password.length < 4) {
      setError("Password must be at least 4 characters.");
      return;
    }

    if (!form.terms) {
      setError("You must accept the terms and privacy policy.");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
      };

      const response = await axios.post(
        "https://staging-api.payfusion.io/users/v1/auths/register",
        payload
      );

      console.log("Registration successful:", response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      alert("Account created successfully!");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false,
      });
    } catch (err: any) {
      console.error(err);
      setError(err?.response?.data?.message || "Registration failed. Try again.");
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
          {error && <p className={styles.error}>{error}</p>}

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
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="sample@mail.com"
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
                    
                    style={{ pointerEvents: "auto" }}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className={styles.eyeBtn}
                    onClick={() => setShowPassword((s) => !s)}
                    aria-label="Toggle password visibility"
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
                    ref={confirmRef}
                    type={showConfirmPwd ? "text" : "password"}
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className={styles.passwordInput}
                    required
                  
                    style={{
                      pointerEvents: "auto",
                      zIndex: 10,
                      display: "block",
                      height: "auto",
                    }}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className={styles.eyeBtn}
                    onClick={() => setShowConfirmPwd((s) => !s)}
                    aria-label="Toggle confirm password visibility"
                  >
                    {showConfirmPwd ? <EyeOff size={18} /> : <Eye size={18} />}
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
              <Link href="/terms" className={styles.link}>
                Terms and privacy Policy
              </Link>
            </label>
          </div>

          <button type="submit" className={styles.btn} disabled={loading}>
            {loading ? (
              <div className={styles.loader}>Creating Account ...</div>
            ) : (
              "Create account"
            )}
          </button>

          <div style={{ marginTop: 12, fontSize: 12, color: "#444" }}>
            <strong>Debug:</strong> confirmPassword value = "{form.confirmPassword}"
          </div>
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
