import React from 'react'
import {Col,Card,Button} from "react-bootstrap"

const CardFollowers = ({follower}) => {
  return (
    <div>
      <Col>
        <Card bg="light" className='m-2'>
        <Card.Img variant="top" src={follower.avatar_url} />
        <Card.Body>
        <Card.Text><h3>{follower.login}</h3></Card.Text>
        <Button
        href={follower.html_url}
        style={{borderRadius:'50px'}}
        variant="success">VIEW PROFILE</Button>
        </Card.Body>
        </Card>
      </Col>
    </div>
  )
}

export default CardFollowers