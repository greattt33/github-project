import React from "react"
import styled from "styled-components"
import {FaStar} from "react-icons/fa"
import {RiArrowDropDownLine} from "react-icons/ri"
 
const Card=(props)=>{
    return(
      <CardStyle>
          <RepoDetail>
            <RepoTitle>
              <Title>{props.title}</Title>
              <Scope>{props.visibility}</Scope>
            </RepoTitle>
            <Brief>{props.description}</Brief>
            <LastDetail>
              <span>{props.topic}</span>
              <StarRating>
              <FaStar/>
              <span>{props.watchers}</span>
              </StarRating>
                <Time>
                  {props.updated_at}
                </Time>
            </LastDetail>
          </RepoDetail>
          <RepoStat>
             <StatBody>
               <FaStar/>
               <span>Star{props.watchers}</span>
             </StatBody>
             <DropDown>
                <RiArrowDropDownLine/>
             </DropDown>
          </RepoStat>
      </CardStyle>
    )
}

export const CardStyle=styled.div`
   width:100%;
   height:min-content(100px);
   display:flex;
   align-items:center;
   flex-direction:row;
   border-top:1px solid gainsboro;
   border-bottom:1px solid gainsboro;
   justify-content:space-between;
`
export const RepoDetail=styled.div`
   width:70%;
   display:flex;
   flex-direction:column;
   gap:20px;
`
export const RepoTitle=styled.div`
   width:auto;
   height:auto;
   gap:20px;
   align-items:center;
   display:flex;
   flex-direction:row;
`
export const Title=styled.p`
   width:auto;
   height:auto;
   font-size:larger;
   font-weight:bold;
   color:blue;
`
export const Scope=styled.div`
   width:80px;
   height:30px;
   display:grid;
   place-items: center;
   font-size:medium;
   border:1px solid gainsboro;
   border-radius:5px;
   font-weight:bold;
`
export const Brief=styled.p`
   width:80%;
   height:auto;
   display:flex;
   font-size:large;
   justify-content:flex-start;
   place-items:center;
`
export const LastDetail=styled.div`
   width:80%;
   height:auto;
   display:flex;
   flex-direction:row;
   align-items:center;
   justify-content:space-between;
   span{
      width:20%;
      height:auto;
      font-size:medium;
   }
`
export const StarRating=styled.div`
   width:auto;
   gap:20px;
   display:flex;
   align-items:center;
   font-size:medium;
   flex-direction:row;
`
export const Time=styled.p`
   width:50%;
   height:auto;
   display:grid;
   font-size:medium;
   place-items:center;
`
export const RepoStat=styled.div`
   width:100px;
   margin-right:20px;
   height:30px;
   display:flex;
   flex-direction:row;
   align-items:center;
   border:1px solid gainsboro;
   border-radius:5px;
   justify-content:space-between;
` 
export const StatBody=styled.div`
   width:80px;
   height:auto;
   display:flex;
   font-size:large;
   flex-direction:row;
   font-weight:bold;
   align-items:center;
   justify-content:center;
   span{
      font-size:large;
      font-weight:bold;
   }
`
export const DropDown=styled.div`
   width:20%;
   height:100%;
   display:grid;
   font-size:medium;
   font-weight:bold;
   place-items:center;
   border:1px solid gainsboro;
   border-top-right-radius:5px;
   border-bottom-right-radius:5px;
`

export default Card;