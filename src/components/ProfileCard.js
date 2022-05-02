import React,{useEffect} from "react"
import Profile from "./profile"
import {useDispatch,useSelector} from "react-redux"
import {getPost} from "../features/postSlice"
import styled from "styled-components"




const ProfileCard=()=>{
    const dispatch= useDispatch()
    
    
    const {data,loading}= useSelector((state)=>state.data)
    useEffect(()=>{
        dispatch(getPost())
        
    },[])
    
    
    return(
        
        <ProfileCardStyle>
           
                
                   <Profile username={data.login} fullname={data.name} quote={data.bio} follower={data.followers} following={data.following} location={data.location} twitter={data.twitter_username} email={data.email} avatar={data.avatar_url}/>
                        
             
        </ProfileCardStyle>
    )
}

const ProfileCardStyle=styled.div`
   display:flex;
   width:100%;
   gap:20px;
   align-items:flex-start;
   justify-content:center;
`






export default ProfileCard