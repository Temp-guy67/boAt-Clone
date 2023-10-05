import React from 'react'
import { useStateContext } from '../context/StateContext';


function userpage({ user, orderData }) {
  const { userData, getUserData } = useStateContext();

  // getUserData(user);

  // localStorage.setItem("currentUser" , user);
  return (
      <div>
          <h1>
              {user.username}
          </h1>
      </div>
  );
}

export async function getServerSideProps(context) {
    // Fetch user data from an API or database based on context.params.id
    const token = context.query.customData;
    console.log("AUTH DATA GOT IN USER OAGE",token , " => ", JSON.stringify(token));


    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    const userData = await fetch(`http://127.0.0.1:8000/test/getuser`, requestOptions);
    const user = await userData.json();

    // console.log("AUTH DATA GOT IN RESPONSE ", response.json());
    
    console.log("USER DATA DATA GOT IN RESPONSE ", user);
    
    const orderData = NaN;


    
    // const orderData = await fetch(`http://127.0.0.1:8000/test/getuser`);
  
    return {
      props: {
        user,
        orderData
      },
    };
  }
  
  export default userpage;