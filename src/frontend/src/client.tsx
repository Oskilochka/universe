import fetch from "unfetch"

//  todo: fix any
const checkStatus = (response: any) => {
  if (response.ok) {
    return response;
  }
  const error: any = new Error(response.statusText);
  error.response = response;
  return Promise.reject(error);
}

export const getAllStudents = () => {
  return fetch("api/v1/students")
    .then(checkStatus);
}
