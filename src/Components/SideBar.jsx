import React from 'react'
import {Link} from 'react-router-dom'
import {FaSpotify} from 'react-icons/fa'
import Cookies from 'js-cookie'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
const SideBar = (props) => 
{
     const onClickLogOut = ()=>
    {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
    }

    return (<div className="d-flex flex-column justify-content-between p-4 border-end border-secondary"
                style={{width: '240px', minHeight: '100vh'}}>

                {/* Spotify Logo */}
                <div>
                    <Link to='/home'>
                        <FaSpotify size={40} className="text-success" />
                    </Link>
                </div>

                {/* Logout Button */}
                <button className="btn btn-outline-light" onClick={onClickLogOut}>
                    Logout
                </button>
     </div>)
}
  


export default withRouter(SideBar)