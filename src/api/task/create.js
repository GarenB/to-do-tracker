import axios from "axios";

const createTask = async (formData, token): Promise<any> => {
  const url = "http://localhost:5000/tasks/create";

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
export default createTask;
