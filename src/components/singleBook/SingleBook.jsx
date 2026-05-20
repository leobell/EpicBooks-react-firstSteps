import React, { useContext, useState } from 'react'
import Card from 'react-bootstrap/Card'
import CommentArea from '../commentArea/CommentArea'
import { ThemeContext } from '../../contexts/themeContext/ThemeContext'

const SingleBook = (props) => {
  const [selected, setSelected] = useState(false)
  const { isDarkMode } = useContext(ThemeContext)
  const computedTheme = isDarkMode ? 'bg-light text-dark' : 'bg-dark text-light'
  const computedThemeBorder = isDarkMode ? 'black' : 'white' 
  const onSelected = () => {
    setSelected(!selected)
  }

  return (
    <div className="col-12 col-md-6 col-lg-4 col-xxl-3 mb-4">
      <Card 
        style={{ width: '100%' , border: selected ? `4px solid ${computedThemeBorder}` : "none"}}
        className={`${computedTheme} p-3`}
      >
        <Card.Img onClick={onSelected} variant="top" src={props.img} style={{aspectRatio: '1', objectFit: 'contain'}}/>
        <Card.Body>
          <Card.Title 
            style={{display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              lineHeight: "1.4em",
              minHeight: "2.8em"}}
            >{props.title}
          </Card.Title>
          <Card.Text>
            {props.category}
          </Card.Text>
          {selected && <div>
            <CommentArea 
              key = {props.asin}
              asin = {props.asin}
            /> 
          </div>}
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleBook
