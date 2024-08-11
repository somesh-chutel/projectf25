import Header from '../header';
import { useParams } from 'react-router-dom';
import './index.css';
import { useEffect } from 'react';

const jobsDetailedSection = ()=>{

    const {id} = useParams();

    useEffect(()=>{

        const fetchDetiledData = async()=>{

            const api = `https://apis.ccbp.in/jobs/${id}`;

        }

        fetchDetiledData();


    },[])

    return (

        <>  
        <Header/> 
        <h1> {id} </h1>
        
        </>

    )
}



export default jobsDetailedSection;