import React from 'react'
import { cn } from '@bem-react/classname'
import "./opportunities.css"
import Title from '../pages/Title/Title'
import Block from '../pages/Block/Block'
import Squares from "../pictures/Squares.png"
import SquareCircle from "../pictures/SquareCircle.png"
import Spinner from "../pictures/Spinner.png"
import Lypa from "../pictures/Lypa.png"
import Processor from "../pictures/Processor.png"
import Flaky from "../pictures/Flaky.png"

const Opportunities = () => {
    const cnOpportunities = cn("Opportunities")
    const arr = [{imgurl:Squares, title:"1:1 Product recommendations", body:"Use deep learning recommendations to engage customers in seconds."}, {imgurl:Lypa, title:"Product insights", body:'A platform packed with insights helping you discover the hard hitting things you can do next.'},
    {imgurl:SquareCircle,title:"1:1 Product badging",body:"Guide discovery with personalized product badging. Push sales with social proofing."}, {imgurl:Processor, title:"CommerceAI",body:`Your customer's behavioral data is telling you a story. Use predictive and affinity based algorithms to serve them better.`} ,
    {imgurl:Spinner,title:'Personalized content',body:"Your customers are unique. Present them with content that shows you know them."}, {imgurl:Flaky, title:"Platform integrations", body:"Connect Qubit to any tool via API. Import data or trigger an experience on any platform."}
  ]
  return (
    <div className={cnOpportunities()} >
        <div className={cnOpportunities("Content")}>
            <Title mods={{size:"mm", textAlign:'center'}} text={"What you can do with Qubit."} />
            <div className={cnOpportunities("Items")}>
                  {arr.map((el, index) =>
                    <Block imgurl={el.imgurl} title={el.title} body={el.body} key={index} />
                  )}
            </div>
        </div>
    </div>
  )
}

export default Opportunities