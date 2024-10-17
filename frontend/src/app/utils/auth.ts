"use client";
import { User } from "../interfaces/userInterface";

export const setUser = (user: User): void => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = (): User | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const removeUser = (): void => {
  localStorage.removeItem("user");
};
