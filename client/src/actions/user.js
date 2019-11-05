import axios from "axios";
import { setAlert } from "./alert";

export const joinSubscriber = email => async dispatch => {
  try {
    await axios.post("http://localhost:5000/user/saveemail", email);
    dispatch(
      setAlert(
        "Thank you for registering! We will keep you updated.",
        "info",
        10000
      )
    );
  } catch (error) {
    dispatch(setAlert("Registeration failed ", "danger", 10000));
  }
};
