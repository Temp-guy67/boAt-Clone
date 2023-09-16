import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();
export const UserProvider = (props) => {
  const [token, setToken] = useState();

  useEffect(() => {
    
    const fetchUser = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Authorization: "Bearer " + token,
        },
      };
      console.log(" Triggeringg ");
      const response = await fetch("http://localhost:8000/getuser", requestOptions);

      if (!response.ok) {
        console.log(" baler response " + JSON.stringify(response));
        setToken(null);
      }
      else{
        console.log(" DATA FETCHED SUCCESSFULLY " + JSON.stringify(response));
      }
      localStorage.setItem("awesomeLeadsToken", token);
      console.log(" TOKEN SET");
    };
    fetchUser();
  }, [token]);

  return (
    <UserContext.Provider value={[token, setToken]}>
      {props.children}
    </UserContext.Provider>
  );
};