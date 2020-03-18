import axios from "axios";

export function iniApi() {
  axios.defaults.baseURL = "http://localhost:3333";
  addAuthorizationApi();
}

export function addAuthorizationApi() {
  try {
    let authStorage = localStorage.getItem("auth");

    if (authStorage) {
      const auth = JSON.parse(authStorage);

      const { access_token } = auth;

      if (access_token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
      }
    }
  } catch {}
}

export function clearAuthorization() {
  axios.defaults.headers.common = [];
  localStorage.removeItem("auth");

  window.location.href = "/";
}

axios.interceptors.response.use(
  resp => resp,
  error => {
    const { response } = error;
    if (response) {
      const { status } = response;

      if (status === 401) {
        clearAuthorization();
      }
    }

    return Promise.reject(error);
  }
);
