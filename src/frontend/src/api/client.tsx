import fetch from "unfetch"

//  todo: fix any
export const checkStatus = (response: any) => {
  if (response.ok) {
    return response;
  }
  const error: any = new Error(response.statusText);
  error.response = response;
  return Promise.reject(error);
}
