
import React, { useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import Cart from '../components/Cart';
import { useStateContext } from '../context/StateContext';



const Navbar = () => {
  const { showCart ,setShowCart , totalQuantities, userData } = useStateContext();
  useEffect(() => {
  }, [userData])
  const but = userData ? userData.username : NaN;

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">boAt Clone</Link>
      </p>

      <div className="navbar-container-side">
        {/* <p className="login-icon"> */}
          {/* <Link href="/loginpage">
            {
              "Loging"
            }
          </Link>
        </p> */}

        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>

      </div>



      {showCart && <Cart/>}

    </div>
  )
}

export default Navbar