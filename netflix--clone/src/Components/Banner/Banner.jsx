import React, { useEffect, useState }  from "react";
import axios from '../../Utils/axios'
import requests from '../../Utils/requests'

function Banner(){
    const [movie,setMovie]=useState({});


         useEffect(()=>{

          async()=>{
            try {
                const request=await axios.get(requests.fetchNetflixOriginals)
                     

            } catch (error) {
                console.log(`Error: ${error}`)
            }
          }




         },[])







    return(
    
        <div className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url('https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
            backgroundPosition:'center',
            backgroundRepeat:"no-repeat"
        }}>
            <div className="banner_contents">
                <h1 className="banner_title"></h1>
                <div className="banner_button">
                    <button className="banner_button play">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h3 className="banner_description"></h3>
            </div>
        </div>
    )
}
export default Banner;