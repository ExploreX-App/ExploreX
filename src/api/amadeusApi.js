import axios from "axios";

const AMADEUS_API_ID = process.env.REACT_APP_AMADEUS_API_ID;
const AMADEUS_API_SECRET = process.env.REACT_APP_AMADEUS_API_SECRET;

let token = null;
let tokenExpirationTime = null;

const isTokenValid = () => {
  if (!token || !tokenExpirationTime) return false;
  const currentTime = Math.floor(Date.now() / 1000);
  return currentTime < tokenExpirationTime;
};

export const getAmadeusToken = async () => {
  if (isTokenValid()) {
    return token;
  }

  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", AMADEUS_API_ID);
  params.append("client_secret", AMADEUS_API_SECRET);

  try {
    const response = await axios.post(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      params.toString(),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    token = response.data.access_token;
    tokenExpirationTime = Math.floor(Date.now() / 1000) + response.data.expires_in;

    return token;
  } catch (error) {
    throw error;
  }
};

const api = axios.create({
  baseURL: "https://test.api.amadeus.com/v1",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

api.interceptors.request.use(
  async (config) => {
    if (config.url.includes("/security/oauth2/token")) {
      return config;
    }

    const authToken = await getAmadeusToken();
    config.headers.Authorization = `Bearer ${authToken}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
