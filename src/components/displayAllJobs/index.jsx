import { FaStar } from "react-icons/fa";
import './index.css';


/*

"id": "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751",
"title": "Devops Engineer",
"rating": 4,
"company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
"location": "Delhi",
"job_description": "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners to minimize/avoid any production outages. The role will focus on production support.",
"employment_type": "Internship",
"package_per_annum": "10 LPA"

*/

const DisplayAllJobs = (props)=>{

    const {jobsItem} = props;


    return (
        <li className='jobs-list-cont'>
            <div className='title-logo-cont'>
                <img className='web-logo' src={jobsItem.company_logo_url} alt="" />
                <div>
                    <h3>{jobsItem.title}</h3>
                    <FaStar className="mr-2 text-warning"/>
                    <span>{jobsItem.rating}</span>
                </div>
            </div>

        </li>
    )
}




export default DisplayAllJobs;