import Header from "../header";
import DisplayAllJobs from "../displayAllJobs";
import FilterSection from "../filterSection";
import "./index.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Jobs = () => {
  const [allValues, setValues] = useState({
    jobsList: [],
    userInput :"",
    minPakage:"",
    empTypeList : []
  });

  const token = Cookies.get("jwtToken");

  useEffect(() => {
    const fetchAllJobsData = async () => {

      
      const api = `https://apis.ccbp.in/jobs?employment_type=${allValues.empTypeList}&minimum_package=${allValues.minPakage}&search=${allValues.userInput}`;

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(api, options);
      const data = await response.json();

      console.log(data.jobs);

      if (response.ok === true) {
        setValues({ ...allValues, jobsList: data.jobs });
      }
    };

    fetchAllJobsData();
  }, [allValues.userInput,allValues.empTypeList]);


  const onChangeUserSearch = (e)=>{
    
    if(e.key === "Enter"){

      setValues({...allValues, userInput : e.target.value});

    }

    
  }

  const onCHangeEmpTypeList = (value,isChecked)=>{

    if( isChecked === true){

      setValues({...allValues, empTypeList : [...allValues.empTypeList,value]});

    }
    else{

      setValues({...allValues, empTypeList : allValues.empTypeList.filter( each=> each !== value)});

    }

  }

  return (
    <div>
      <Header />

      <div className="jobs-main-cont">
        <div className="filter-section">
          <FilterSection empTypeFunction = {onCHangeEmpTypeList}/>
        </div>

        <div className="all-jobs-card-cont">
            <input onKeyUp={onChangeUserSearch} type="search" className="form-control w-50 mb-3 ml-5"/>
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
