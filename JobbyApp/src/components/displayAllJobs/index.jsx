import './index.css';
import { FaStar, FaBriefcase } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const DisplayAllJobs = (prop) => {

    const { jobsItem } = prop;

    return (
        <Link to={`jobs/${jobsItem.id}`}>
            <li className='jobs-card'>
                <div className='d-flex'>
                    <img className='mr-3' src={jobsItem.company_logo_url} width="70px" alt={`${jobsItem.title} logo`} />
                    <div>
                        <h3>{jobsItem.title}</h3>
                        <FaStar className='mr-2 text-warning' />
                        <span>{jobsItem.rating}</span>
                    </div>
                </div>

                <div className='mt-3 d-flex justify-content-between'>
                    <div>
                        <FaLocationDot />
                        <span className='mr-2'>{jobsItem.location}</span>
                        <FaBriefcase />
                        <span className='mr-2 ml-1'>{jobsItem.employment_type}</span>
                    </div>
                    <h5>{jobsItem.package_per_annum}</h5>
                </div>

                <hr style={{ backgroundColor: "white" }}></hr>

                <h5 style={{color: "white"}}>Description</h5>
                <br />
                <p>{jobsItem.job_description}</p>
            </li>
        </Link>
    );
}

export default DisplayAllJobs;
