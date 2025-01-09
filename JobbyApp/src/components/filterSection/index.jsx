import './index.css';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const employmentTypeList = [
    {
        label: 'Full Time',
        employmentTypeId: 'FULLTIME',
    },
    {
        label: 'Part Time',
        employmentTypeId: 'PARTTIME',
    },
    {
        label: 'Freelance',
        employmentTypeId: 'FREELANCE',
    },
    {
        label: 'Internship',
        employmentTypeId: 'INTERNSHIP',
    },
];

const salaryRangeList = [
    {
        salaryRangeId: '1000000',
        label: '10 LPA and above',
    },
    {
        salaryRangeId: '2000000',
        label: '20 LPA and above',
    },
    {
        salaryRangeId: '3000000',
        label: '30 LPA and above',
    },
    {
        salaryRangeId: '4000000',
        label: '40 LPA and above',
    },
];

const FilterSection = (props) => {
    const [allValues, setValues] = useState({
        profileDetails: {},
    });

    const { empFunc } = props;

    const token = Cookies.get('jwtToken');

    useEffect(() => {
        const getProfileDetails = async () => {
            const apiUrl = 'https://apis.ccbp.in/profile';

            const options = {
                headers: {
                    Authorization: `Bearer ${token}`, // Corrected: Use backticks for string interpolation
                },
                method: 'GET',
            };

            try {
                const response = await fetch(apiUrl, options);
                if (response.ok) {
                    const data = await response.json();
                    setValues({...allValues, profileDetails : data.profile_details});
                } else {
                    console.error(`Failed to fetch profile details: ${response.status}`);
                }
            } catch (error) {
                console.error('Error fetching profile details:', error);
            }
        };

        getProfileDetails();
    }, [token]);


    const renderEmploymentTypesList = () =>{
        const onChangeEmpType = (e) => {
            empFunc(e.target.value, e.target.checked);
        }

        return employmentTypeList.map(eachType => {
            
            return (
            <li className='filter-list-item' key={eachType.employmentTypeId}>
                <input
                   type='checkbox'
                   className='checkbox-input'
                   value={eachType.employmentTypeId}
                   id={eachType.employmentTypeId}
                   onChange={onChangeEmpType}
                />

                <label className='filter-label' htmlFor={eachType.employmentTypeId}>
                    {eachType.label}
                </label>
            </li>
        )
        })
       }

        const renderEmploymentTypes = () => (

            <>
              <h1 className='filter-heading'> Type of Employment </h1>
              <ul className='filters-list'> {renderEmploymentTypesList()} </ul>
            </>
        )

        
        const renderSalaryRangesList = () => {

        return salaryRangeList.map(eachType => {
            
            return (
            <li className='filter-list-item' key={eachType.salaryRangeId}>
                <input
                   type='radio'
                   className='checkbox-input'
                   value={eachType.salaryRangeId}
                   id={eachType.salaryRangeId}
                   name='salary ranges'
                />

                <label className='filter-label' htmlFor={eachType.salaryRangeId}>
                    {eachType.label}
                </label>
            </li>
        )
        })
       }

       
       const renderSalaryRangesTypes = ()=> (
        <>
        <h1 className='filter-heading'> Salary Range </h1>
        <ul className='filters-list'> {renderSalaryRangesList()} </ul>
         </>
       )

       const renderProfileDetails = () => (
         <div className='profile-details-container'> 
         <img src={allValues.profileDetails.profile_image_url} alt='profile' className='profile-image' />
         <h1 className='profile-name text-secondary'> {allValues.profileDetails.name} </h1>
         <p className='profile-bio text-secondary'> {allValues.profileDetails.short_bio} </p>
         </div>
       )

       return(
        <div className='filters-group-container'>
          {renderProfileDetails()}
          {renderEmploymentTypes()}
          <hr className='separetor'/>
          {renderSalaryRangesTypes()}
        </div>
       )
       
 }


export default FilterSection;
