import { Link } from 'react-router-dom';
import './index.css'


const Header = ()=>{



    return (

        <nav className='my-nav'>
                    <Link to="/">
                        <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png" className='web-logo' />
                    </Link>

                <ul className='nav-ul-cont'>
                    <li>
                        <Link to="/" className='my-nav-items'>Home</Link>
                    </li>
                    <li>
                        <Link to="/jobs"  className='my-nav-items'>Jobs</Link>
                    </li>
                </ul>

                <button className='btn btn-primary'>Logout</button>

        </nav>

    )
}


export default Header;