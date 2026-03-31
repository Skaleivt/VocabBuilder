import { loginUser, RegisterRequest } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import { ApiError } from "next/dist/server/api-utils";
// import { useRouter } from "next/router";
import { useState } from "react";
import css from "./LoginForm.module.css";
import Link from "next/link";

export default function LoginForm() {
  //   const router = useRouter();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const setUser = useAuthStore((state) => state.setUser);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues: RegisterRequest = {
      name: String(formData.get("name")),
      email: String(formData.get("email")),
      password: String(formData.get("password")),
    };
    try {
      const res = await loginUser(formValues);
      if (res) {
        setUser(res);
        // router.push("/profile");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError((error as ApiError).message ?? "Oops... some error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <h1 className={css.formTitle}>Register</h1>
      <p className={css.formText}>
        To start using our services, please fill out the registration form
        below. All fields are mandatory:
      </p>

      <div className={css.formGroup}>
        <input
          // id="name"
          type="name"
          name="password"
          placeholder="Name"
          className={css.input}
          required
        />
        <input
          // id="email"
          type="email"
          name="email"
          placeholder="Email"
          className={css.input}
          required
        />
        <div className={css.passContainer}>
          <input
            // id="password"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className={css.input}
            required
          />
          <button
            type="button"
            onClick={togglePassword}
            className={css.showPassBtn}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <svg className={css.showIcon}>
                <use href="/symbol-defs.svg#icon-eye-1"></use>
              </svg>
            ) : (
              <svg className={css.showIcon}>
                <use href="/symbol-defs.svg#icon-eye-off-1"></use>
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={css.actions}>
        <button type="submit" className={css.registerButton}>
          Register
        </button>
        <Link href="/login" className={css.loginButton}>
          Login
        </Link>
      </div>
      {error && <p className={css.error}>{error}</p>}
    </form>
  );
}
