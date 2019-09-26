import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID c860af0bca40d3c0ea205320e934f0af7718e8944216c1807cec8d2086c94f6f"
  }
});
