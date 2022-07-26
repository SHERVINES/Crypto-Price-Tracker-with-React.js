import React, { useEffect } from 'react';


//API
import { getCoin } from '../Services/api';

const Landing = () => {

useEffect(()=>{
    const fetchAPI =async () => {
    
        const data = await getCoin() 
    console.log(data);
    }
    fetchAPI();
},[])


    return (
        <div>
            
        </div>
    );
};

export default Landing;