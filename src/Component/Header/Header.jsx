import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <nav className='header'>

    <Link to={"/login"} className='header__link'>

     <img src='https://pngimg.com/d/amazon_PNG11.png' className='header__logo'/>

     </Link>


    <div className='header__search' >

    <input type="text" className="header__searchInput" />
    <svg className='srch__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>

    </div>


  <div className='header__nav'>

          {/* 1st link */}
    <Link to="/" className='header__link'>

      <div className='header__option'>
        <span className='headerOption__one'>Your</span>
        <span className='headerOption__two'>Prime</span>
      </div>

    </Link>

{/* 2nd Link */}

    <Link to="/" className='header__link'>

      <div className='header__option'>
        <span className='headerOption__one'>Hello</span>
        <span className='headerOption__two'>Sign in</span>
      </div>

    </Link>


{/* 3rd link */}

    <Link to="/" className='header__link'>

      <div className='header__option'>
        <span className='headerOption__one'>Returns</span>
        <span className='headerOption__two'>& Orders</span>
      </div>

    </Link>

  </div>

  <div className='header__shopingBasket'>

  </div>


  <Link to="/checkout" className='header__link'>
  <div className="cart__div">
  <svg

  className='cart__icon'
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      viewBox="0 0 256 256"
    >
      <g
        fill="#000"
        strokeMiterlimit="10"
        strokeWidth="0"
        transform="matrix(2.81 0 0 2.81 1.407 1.407)"
      >
        <path d="M72.975 58.994h-41.12a3.5 3.5 0 01-3.347-2.477L15.199 13.006H3.5a3.5 3.5 0 110-7h14.289a3.5 3.5 0 013.347 2.476l13.309 43.512h36.204l10.585-25.191h-6.021a3.5 3.5 0 110-7H86.5a3.5 3.5 0 013.227 4.856L76.201 56.85a3.5 3.5 0 01-3.226 2.144z"></path>
        <circle cx="28.88" cy="74.33" r="6.16"></circle>
        <circle cx="74.59" cy="74.33" r="6.16"></circle>
        <path d="M63.653 21.403a3.499 3.499 0 00-4.949 0L53.3 26.807v-17.3a3.5 3.5 0 10-7 0v17.3l-5.404-5.404a3.5 3.5 0 00-4.95 4.95L47.324 37.73c.163.163.343.309.535.438.084.056.176.095.264.143.112.061.22.129.338.178.115.047.234.075.353.109.1.03.197.068.301.089.226.045.456.069.685.069s.459-.024.685-.069c.104-.021.2-.059.301-.089.118-.035.238-.062.353-.109.119-.049.227-.117.338-.178.088-.048.18-.087.264-.143.193-.129.372-.274.535-.438l11.378-11.377a3.5 3.5 0 00-.001-4.95z"></path>
      </g>
    </svg>
    <span className='headerOption__two'>0</span>
  </div>
  </Link>

  </nav>
  )
}

export default Header