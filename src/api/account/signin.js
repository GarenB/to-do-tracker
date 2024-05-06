import axios from "axios";

const signIn = async (formData, token): Promise<any> => {
  const url = "http://localhost:5000/account/signin";

  return axios
    .post(url, formData, {
      headers: {
        "content-type": "application/json",
        Accept: "",
      },
    })
    .then((response) => {
      console.log("🚀 ~ .then ~ response:", response);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user_id", response.data.id);
      localStorage.setItem("tokenExpiration", "3600");
      localStorage.setItem("user_idExpiration", "3600");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export default signIn;
