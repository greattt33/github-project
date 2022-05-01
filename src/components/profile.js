import React from 'react'
import styled from "styled-components"
import {AiOutlineMail} from "react-icons/ai"
import {FaTwitter} from "react-icons/fa"

function Profile(props) {
  return (
    <ProfileStyle>
         <ProfileImage>
                <img src={props.avatar} alt="profile-pics"/>
        </ProfileImage>
            
        <Name>
                <Username>
                    {props.username}
                </Username>
                <Fullname>
                    {props.fullname}
                </Fullname>
               
            </Name>
             <FollowButton>
                    Follow
            </FollowButton>
            <Quote>
                {props.quote}
            </Quote>
            <Followers>
                <Pfollower>
                    <span>{props.follower}</span>follower
                </Pfollower>
                <Following>
                    <span>{props.following}</span>following
                </Following>
            </Followers>
            <Social>
                <div> {props.location}
                </div>
                <div>
                    <FaTwitter/> {props.twitter}
                </div>
                <div>
                    <AiOutlineMail/> {props.email}
                </div>
            </Social>


    </ProfileStyle>
  )
}

const ProfileStyle=styled.div`
 grid-area:"profile";
   display:flex;
   width:100%;
   height:min-content(500px);
   flex-direction:column;
   gap:20px;
   justify-content:center;
`
const ProfileImage=styled.div`
   width:100px;
   height:100px;
   border:1px solid gainsboro;
   border-radius:50%;
   img{
       width:100%;
       height:100%;
       border-radius:50%;

   }
   background-image:url("");
`
const Name=styled.div`
   display:flex;
   width:80%;
   height:auto;
   flex-direction:column;
   gap:10px;
   justify-content:center;
`
const Username=styled.p`
   font-weight:bold;
   font-size:medium;
   margin:0px;
   width:auto;
   height:auto;
`
const Fullname=styled.p`
   font-size:medium;
   margin:0px;
   width:auto;
   height:auto;
`
const FollowButton=styled.button`
   font-size:medium;
   width:85%;
   background-color:white;
   height:30px;
   display:grid;
   place-items:center;
   border:1px solid gainsboro;
   border-radius:5px;
`
const Quote=styled.p`
   font-size:medium;
   width:auto;

   height:auto;
`
const Following=styled.p`
   font-size:medium;
   width:auto;
   height:auto;
    span{
       font-weight:bold;
   }

`
const Pfollower=styled.p`
   font-size:medium;
   width:auto;
   height:auto;
   span{
       font-weight:bold;
   }
`
const Followers=styled.p`
   font-size:medium;
   width:auto;
   height:auto;
   display:flex;
   flex-direction:row;
   gap:30px;
`
const Social=styled.div`
   font-size:medium;
   width:100%;
   height:auto;
   display:flex;
   justify-content:center;
   flex-direction:column;
   gap:30px;
   div{
       display:flex;
       flex-direction:row;
       gap:20px;
   }
`



export default Profile