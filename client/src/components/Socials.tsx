import * as React from 'react'
import FacebookSignIn from './FacebookSignIn'
import GoogleAuthorize from './GoogleSignIn'
import * as google from '../../public/images/google-icon.png'
import * as fb from '../../public/images/fb-icon.png'
import * as twitter from '../../public/images/twitter-icon.png'

const Socials = (props) => {
  return (
    <div>
      <ul className="login-options">
        <li>
          <FacebookSignIn />
        </li>

        <li>
          <GoogleAuthorize />
        </li>

        <li>
          <a className="login-options__link" href="/auth/twitter" >
            <img className="social-link__icon" src={twitter.default}  id="twitter" />
          </a>
        </li>
      </ul>
    </div>
    
  )
}

export default Socials