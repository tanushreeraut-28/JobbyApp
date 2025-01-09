
import { Link } from "react-router-dom";
import Header from "../header";
import "./index.css";

const Home = () => {
  return (
    <div className="home-cont">
      <Header/>
      <div className="home-content-cont">
            <h1 className="home-heading">Match with the perfect job</h1>
            <p style={{textAlign : "start"}}>Find your dream job, fast and easy. Your skills, your goals, your path.Connecting talent with opportunity.
              Let’s make your career journey simple. Our app connects you to opportunities that match your skills and goals,
               making your job search faster and smarter. Whether you're starting your careeror taking the next step, we 
               empower you to unlock new possibilities. Let’s simplify your journey to success!</p>
            
            <Link to={"/jobs"}>
                <button className="btn btn-primary home-btn"> Find Jobs </button>
            </Link>
          </div>
    </div>
  )
}

export default Home;
