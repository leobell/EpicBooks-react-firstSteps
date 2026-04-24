import React from 'react'
import Card from 'react-bootstrap/Card'



const MyBookCard = (props) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={props.img} style={{aspectRatio: '1', objectFit: 'contain'}}/>
        <Card.Body>
          <Card.Title 
            style={{display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              lineHeight: "1.4em",
              minHeight: "2.8em"}}
            >{props.title}</Card.Title>
          <Card.Text>
            {props.category}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MyBookCard
