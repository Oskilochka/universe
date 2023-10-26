import fetch from "unfetch";
import { checkStatus } from "./client";

export const getAllStudents = async () => {
  return await fetch("api/v1/students")
    .then(checkStatus)
    .then(res => res.json());
};
