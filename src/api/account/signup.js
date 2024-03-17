import axios from "axios";

const signUp = async (formData, token): Promise<any> => {
  const url = "http://localhost:5000/account/signup";

  return axios
    .post(url, formData, {
      headers: {
        "content-type": "application/json",
        Accept: "",
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export default signUp;
