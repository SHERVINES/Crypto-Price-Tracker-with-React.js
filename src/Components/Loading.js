import React from 'react';

//Gif
import Spinner from "../Gif/Spinner.gif"
const Loading = () => {
    return (
        <div>
            <img src={Spinner} alt='loading' style={{width:"200px"}} />
            <h5>Loading..</h5>
        </div>
    );
};


export default Loading;