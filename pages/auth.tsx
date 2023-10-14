import Input from "@/components/Input";
import axios from "axios";
import Image from "next/image";
import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Auth = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [error, setError] = useState("");

  const [variant, setVariant] = useState("login");

  const toogleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(async () => {
    if (email === "" || password === "") {
      setError("Email or password is required");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    try {
      await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl: "/",
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    if (name === "" || email === "" || password === "") {
      setError("Name, Email or password is required");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
    try {
      await axios.post("/api/register", {
        name,
        email,
        password,
      });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, password, name, login]);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-center bg-fixed bg-cover">
      <div className="h-full w-full bg-black md:bg-opacity-50">
        <nav className="px-12 py-5 ">
          <Image src="/images/logo.png" alt="logo" width={150} height={50} />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 md:w-3/5 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-medium">
              {variant === "login" ? "Sign In" : "Register Now"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="name"
                  onChange={(e: any) => setName(e.target.value)}
                  id="name"
                  value={name}
                />
              )}
              <Input
                label="Email"
                onChange={(e: any) => setEmail(e.target.value)}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(e: any) => setPassowrd(e.target.value)}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button
              onClick={variant === "login" ? login : register}
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={error !== "" ? true : false}
            >
              {variant === "login" ? "Sign In" : "Register"}
            </button>
            <p className="text-red-600 mt-4">{error}</p>
            <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              <div
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="w-10 h-10 flex justify-center items-center bg-white rounded-full cursor-pointer hover:opacity-80 transition"
              >
                <FcGoogle size={30} />
              </div>
              <div
                onClick={() => signIn("github", { callbackUrl: "/" })}
                className="w-10 h-10 flex justify-center items-center bg-white rounded-full cursor-pointer hover:opacity-80 transition"
              >
                <FaGithub size={30} />
              </div>
            </div>
            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? "Don't have an account? "
                : "Already have an account? "}
              <span
                onClick={toogleVariant}
                className="cursor-pointer text-white hover:underline "
              >
                {variant === "login" ? "Sign up now." : "Sign In"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
