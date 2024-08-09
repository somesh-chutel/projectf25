import Header from '../header';
import DisplayAllJobs from '../displayAllJobs';
import FilterSection from '../filterSection';
import './index.css'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';



const Jobs =()=>{
    const [allValues, setValues] = useState({
        jobsList : []
    });

    const token = Cookies.get("jwtToken");

    useEffect( ()=>{

        const fetchAllJobsData = async()=>{

            const api = "https://apis.ccbp.in/jobs"; 

            const options = {
                method: 'GET',
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }

            const response = await fetch( api, options ); 
            const data = await response.json(); 

            if(response.ok === true){

                setValues({...allValues, jobsList : data.jobs});

            }


        }


        fetchAllJobsData();

    },[])

    return (
        <div>
            <Header/>
            
            <div className='jobs-main-cont'>

                <div className='filter-section'>
                    <FilterSection/>
                </div>

                <ul className='all-jobs-card-cont'>

                        {allValues.jobsList.map( each=> <DisplayAllJobs key={each.id} jobsItem = {each}/>)}

                </ul>

            </div>

        </div>
    )
}



export default Jobs;