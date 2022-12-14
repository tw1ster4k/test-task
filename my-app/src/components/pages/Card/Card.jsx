import React from 'react'
import { cn } from '@bem-react/classname'
import './card.css'
import Images from '../Images/Images'
import Title from '../Title/Title'
import Note from '../Note/Note'
import Line from '../Line/Line'

const Card = ({imgurl, title, body, explore}) => {
    const cnCard = cn("Card")
  return (
    <div className={cnCard()} >
        <div className={cnCard("Content")}>
        <Images imgurl={imgurl} />
        <Title mods={{size:"s", color:"white"}} className={cnCard("Title")} text={title} />
        <Note mods={{size:'sl', color:"white"}} className={cnCard("Note")} text={body}/>
        <Note mods={{size:'s', color:"white"}} className={cnCard("Under")} text={explore}/>
        <Line mods={{color:"white", size:"ma"}} className={cnCard("Line")} />
        </div>
    </div>
  )
}

export default Card