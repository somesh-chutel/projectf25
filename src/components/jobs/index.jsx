import Header from "../header";
import DisplayAllJobs from "../displayAllJobs";
import FilterSection from "../filterSection";
import "./index.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Jobs = () => {
  const [allValues, setValues] = useState({
    jobsList: [],
    userInput :""
  });

  const token = Cookies.get("jwtToken");

  useEffect(() => {
    const fetchAllJobsData = async () => {
      const api = `https://apis.ccbp.in/jobs?employment_type=&minimum_package=&search=`;

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(api, options);
      const data = await response.json();

      if (response.ok === true) {
        setValues({ ...allValues, jobsList: data.jobs });
      }
    };

    fetchAllJobsData();
  }, []);


  const onChangeUserSearch = (e)=>{
    setValues({...allValues, userInput : e.target.value})
  }

  return (
    <div>
      <Header />

      <div className="jobs-main-cont">
        <div className="filter-section">
          <FilterSection />
        </div>

        <div className="all-jobs-card-cont">
            <input onChange={onChangeUserSearch} type="search" className="form-control w-50 mb-3 ml-5"/>
          <ul>
            {allValues.jobsList.map((each) => (
              <DisplayAllJobs key={each.id} jobsData={each} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
