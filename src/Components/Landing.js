import React, { useEffect, useState } from 'react';


//API
import { getCoin } from '../Services/api';

//Components
import Loading from './Loading';

const Landing = () => {

    const [coins,setCoins] = useState([])

useEffect(()=>{
    const fetchAPI =async () => {
    
        const data = await getCoin() 
    console.log(data);
    setCoins(data);  
    }
    fetchAPI();
},[])


    return (
        <>
            <input type="text" placeholder="Search" />
        {
            coins.length ?
            <div>
        {coins.map(coin => <p key={coin.id}>{coin.name}</p>)}    
        </div> :
            <Loading />

        }
        </>
    );
};

export default Landing;