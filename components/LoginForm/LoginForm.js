import React from "react";
import { signIn } from "next-auth/react";
import GoogleButton from "react-google-button";

const LoginForm = () => {
  return (
    <div>
      <GoogleButton
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      />
      <button
        type="button"
        onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
        style={{ marginLeft: "10px", padding: "5px" }}
      >
        Login with GitHub
      </button>
    </div>
  );
};

export default LoginForm;
