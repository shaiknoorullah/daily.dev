"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getUser, setUser } from "@/app/utils/auth";

const Auth: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      const user = getUser();
      if (user && user.username === username && user.password === password) {
        router.push("/");
      } else {
        alert("Invalid credentials");
      }
    } else {
      const newUser = {
        username,
        password,
        joinDate: new Date().toLocaleDateString(),
      };
      setUser(newUser);
      alert("Account created successfully!");
      setIsLogin(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 to-blue-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 bg-opacity-50 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-white">daily.dev</h2>
          <h1 className="mt-2 text-2xl font-semibold text-pink-400">
            {isLogin ? "Login" : "Sign Up"}
          </h1>
        </div>
        <form onSubmit={handleAuth} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <div className="mt-6 text-center">
          <p
            onClick={() => setIsLogin(!isLogin)}
            className="text-gray-300 cursor-pointer hover:underline"
          >
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Login"}
          </p>
        </div>
        <p className="mt-8 text-xs text-center text-gray-400">
          By signing up, I accept the Terms of Service and the Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Auth;
