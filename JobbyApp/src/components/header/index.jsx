import './index.css';
import { Link } from 'react-router-dom';


const Header = ()=>{

    
     return(

      
          <nav className="my-nav">

                  <Link to= "/" className='job-logo'>
              
                  </Link> 
        
                  <ul className="nav-ul-cont">
                    <li>
                      <Link to="/" className='my-nav-items'>Home</Link>
                    </li>
                    <li>
                      <Link to="/jobs" className='my-nav-items'>Jobs</Link>
                    </li>
                  </ul>
        
                  <button className="logout-button">Logout</button>
        
                </nav>
            
     )


}

export default Header;