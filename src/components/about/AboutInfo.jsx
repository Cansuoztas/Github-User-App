import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Row } from "react-bootstrap";
import CardFollowers from "../CardFollowers";
import Paginate from "../Paginate";


const AboutInfo = ({ allFollowing, allFollowers }) => {

  const farkFollowers = allFollowing.filter((item) => !allFollowers.map((e) => e.id).includes(item.id)) //benim takip edip, beni takip etmeyenler
  console.log("deneme", farkFollowers);

  const farkFollowing = allFollowers.filter((item) => !allFollowing.map((e) => e.id).includes(item.id))  //benim takip etmediklerim ama beni takip edenler

  const [select, setSelect] = useState(farkFollowers);

  console.log(allFollowing);
  console.log(allFollowers);
  const [followersPerPage] = useState(12)
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastFollower = currentPage * followersPerPage
  const indexOfFirstFollower = indexOfLastFollower - followersPerPage
  const currentFollowers = select.slice(indexOfFirstFollower, indexOfLastFollower)
  const totalPages = Math.ceil(select.length / followersPerPage)



  return (
    <div>
      <Container>
        <h1 className='text-warning m-3 text-center'> In this section please select a list</h1>
        <div className='m-4 d-flex justify-content-center'>
          <button className='btn btn-danger m-1 fs-5' onClick={() => setSelect(farkFollowers)}>List of users which you are following but <span className='text-warning'>they don't follow you.</span> </button>
          <button className='btn btn-danger m-1 fs-5' onClick={() => setSelect(farkFollowing)}>List of users who follow you but <span className='text-warning'> you don't follow them back.</span></button>

        </div>
        {currentFollowers.length == 0 ? <h1 className='text-center text-light'>This list is empty... 👀</h1> :
          <Row xs={2} md={3} lg={4}>
            {currentFollowers?.map((follower, index) => (
              <div key={index}>
                <CardFollowers follower={follower} />
              </div>
            ))}
          </Row>
        }
        {/* <Row xs={2} md={3} lg={4}>
          {currentFollowers?.map((follower, index) => (
            <div key={index}>
              <CardFollowers follower={follower} />
            </div>
          ))}
        </Row> */}
      </Container>


      <div>
        <Paginate pages={totalPages} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  )
}

export default AboutInfo