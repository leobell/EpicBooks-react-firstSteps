import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'

const SingleBook = (props) => {
  const [selected, setSelected] = useState(false)

  const onSelected = () => {
    setSelected(!selected)
  }

  //console.log(selected)

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <Card 
        onClick={onSelected}
        style={{ width: '100%' , border: selected ? "4px solid green" : "none"}}
      >
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

export default SingleBook
