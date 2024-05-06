import axios from "axios";

const createTask = async (formData): Promise<any> => {
  const url = "http://localhost:5000/tasks/create";
  const { title } = formData;

  const data = {
    title,
    user_id: localStorage.getItem("user_id"),
  };

  //TODO check the token expiration date before using it
  const token = localStorage.getItem("token");

  return axios
    .post(url, data, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
export default createTask;
