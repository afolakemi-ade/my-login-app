"use client";

import { useState, useEffect } from "react";
import styles from "../styles/Login.module.css";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");
  const [countries, fetchCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    if (savedEmail) setEmail(savedEmail);
    if (savedPassword) setPassword(savedPassword);
  }, []);

  useEffect(() => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  }, [email, password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (password.length < 4) {
      setError("Incorrect Password please try again");
      setLoading(false);
    } else {
      const data = {
        email,
        password,
      };

      const response = await axios.post(
        "https://staging-api.payfusion.io/users/v1/auths/login",
        data
      );
      console.log("Login successful", response.data);
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   async function fetchCountries() {
  //     try {
  //       const response = await fetch(
  //         "https://staging-api.payfusion.io/mobipurse/public/v1/countries"
  //       );
  //       const data = await response.json();
  //       console.log("Fetched countries:", data);
  //     } catch (error) {
  //       console.error("Error fetching countries:", error);
  //     }
  //   }
  //   fetchCountries();
  // }, []);

  return (
    <div className={styles.loginInner}>
      <div className={styles.logo}>
        <Image src="/Union.svg" alt="logo" width={13.4} height={20.86} />
      </div>

      <h1 className={styles.title}>Welcome back</h1>
      <p className={styles.subtitle}>Sign in to your account</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>Email</label>
        <input
          className={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="samle@mail.com"
        />

        <label className={styles.label}>Password</label>
        <div className={styles.passwordWrapper}>
          <input
            className={`${styles.input} ${error ? styles.inputError : ""}`}
            type={showPwd ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password Here"
          />
          <button
            type="button"
            disabled={loading}
            className={styles.eyeBtn}
            onClick={() => setShowPwd(!showPwd)}
          >
            {showPwd ? (
              <EyeOff size={18} color="#8E98A8" />
            ) : (
              <Eye size={18} color="#8E98A8" />
            )}
          </button>
        </div>

        {error && <div className={styles.errorText}>{error}</div>}

        <div className={styles.row}>
          <Link href="/forgotPassword" className={styles.forgot}>
            Forgot Password?
          </Link>
        </div>
        <button className={styles.primaryBtn} type="submit" disabled={loading}>
          {loading ? (
            <div className={styles.loader}> Signing In ...</div>
          ) : (
            "Sign in"
          )}
        </button>

        <p className={styles.signupText}>
          Don't have an account?{" "}
          <Link href="/signIn" className={styles.create}>
            Create new account
          </Link>
        </p>
      </form>
    </div>
  );
}
