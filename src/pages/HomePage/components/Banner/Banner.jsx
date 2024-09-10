import React from 'react'
import { useActivityQuery } from '../../../../hooks/useFetchActivityById'
import { Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Banner = () => {
    // const {id} = useParams()
  //   const { data:bannerData, isLoading,isError, error } = useActivityQuery({keyword: "vancouver"});
  // console.log("banner", bannerData)
  
  //     if (isLoading) {
  //       <h1>Loading...</h1>
  //   }
  //   if (isError) {
  //       <Alert variant='danger'>{error.message}</Alert>
  //   }
  //   if (bannerData && bannerData.results && bannerData.results.length > 0) {
  return (
<div style={{
          // backgroundImage:`${bannerData.results[0]?.pictures[0]}`,
      }}
      className='banner'
      >
               <div className='text-white banner-text-area'>
                   <h1>Hello</h1>
                   <p>Find the activities you like</p></div>
      
    </div>
  )   

}
  
        // }

export default Banner
