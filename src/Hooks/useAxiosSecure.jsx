import axios from "axios";
import { use, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router";

const instance = axios.create({
  baseURL: "https://smart-deals-db-server.onrender.com",
});

const useAxiosSecure = () => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    // set token in the header for all the api call using useAxiosSecure hook
    const interceptorsReq = instance.interceptors.request.use((config) => {
    //   console.log(config);
      const token = user.accessToken
      if(token){
          config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    });

    const interceptorsRes = instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        const status = err.status;
        if (status === 401 || status === 403) {
        //   console.log("log out the user for bad req");
          logOut().then(() => {
            navigate("/login");
          });
        }
      }
    );

    return () => {
      instance.interceptors.request.eject(interceptorsReq);
      instance.interceptors.response.eject(interceptorsRes);
    };
  }, [user,navigate,logOut]);
  return instance;
};

export default useAxiosSecure;
