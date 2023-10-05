import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();



export const UserProvider = (props) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    console.log(" INSIDE USEEFFECRT ");
    const fetchUser = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Authorization: "Bearer " + token,
        },
      };
      console.log(" Triggeringg ");
      // const response = await fetch("http://localhost:8000/test/getuser", requestOptions);
      const response = {"ok" : "sd"};
      if (!response.ok) {
        console.log(" baler response " + JSON.stringify(response));
        setToken(null);
      }
      else{
        console.log(" DATA FETCHED IN ERROR " + JSON.stringify(response));
      }
      localStorage.setItem("awesomeLeadsToken", token);
      console.log(" TOKEN SET in CONTEXT ");
    };
    fetchUser();
  }, [token]);

  const onLogin = () => {

  }

  return (
    <UserContext.Provider value={[token, setToken]}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useStateContext = () => useContext(Context);