import './index.css';
import Header from '../header';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import FilterSection from '../filterSection';
import DisplayAllJobs from '../displayAllJobs';

const Jobs = () => {
    const [allvalues, setValues] = useState({
        jobsList: [],
        empType: [],
        minPackage: "",
        userInput: "",
    });

    const token = Cookies.get("jwtToken");

    useEffect(() => {
        const fetchAllJobs = async () => {

            const { userInput, empType, minPackage } = allvalues;

            console.log(empType);

            const api = `https://apis.ccbp.in/jobs?employment_type=${empType}&minimum_package=${minPackage}&search=${userInput}`;

            const options = {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                const response = await fetch(api, options);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                setValues({...allvalues,jobsList: data.jobs });
            } catch (error) {
                console.log("Error fetching jobs:", error);
            }
        };

        fetchAllJobs();
    }, [allvalues.userInput, allvalues.empType, allvalues.minPackage, token]);

    const onSearchUserIn = (e) => {
        if (e.key === "Enter") {
            setValues({...allvalues, userInput : e.target.value});
        }
    };

    const  empTypeChange = (value,isChecked) =>{
        if( isChecked ){
        setValues({...allvalues, empType : [...allvalues.empType,value]});
        }
        else{
           setValues({...allvalues, empType : allvalues.empType.filter( each => each !== value)});
        }
    }

    return (
        <div className="jobs-main-cont">
            <Header />
            <div className="filter-alljobs-cont">

                <div className="filter-cont">
                    <FilterSection empFunc = {empTypeChange} />
                </div>

                <div style={{ width: "60%" }}>
                    <input onKeyUp={onSearchUserIn} placeholder='search' type="search" className="form-control w-75 text-dark mt-3 ml-3"/>
                    <ul className="alljobs-cont">
                        {
                        allvalues.jobsList.map((each) => (<DisplayAllJobs key={each.id} jobsItem={each} /> ))
                        }
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Jobs;
