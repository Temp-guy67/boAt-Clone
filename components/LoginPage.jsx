import {useState, useContext} from 'react';
import { UserContext } from "../context/UserContext";
import { useRouter } from 'next/router';

const LoginPage = () => {
  const router = useRouter();
  const url = "http://127.0.0.1:8000/signup";
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [, setToken] = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/test/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const auth_data = await response.json();
        console.log('Response data: AUTH _DATA ', auth_data);
        setToken(auth_data.access_token);
        console.log('Token set');
        // router.push('/userpage')

        const customContext = {
          customData: auth_data.access_token
        };

        router.push({
          pathname: '/userpage/', // Specify the target page
          query: { id: 123 , customData: auth_data.access_token}, // Specify any query parameters if needed
        });


      } else {
        console.error('Request failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <>
        <div className='login-page-container'>
          <div className='login-page-container-left'>
              left
          </div>
          <div className='login-page-container-right' >
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Sign Up</button>
            </form>
          </div>
      </div>
    </>
    
  )
}

export default LoginPage