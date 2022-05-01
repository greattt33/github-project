import React,{useState} from "react"
import styled from "styled-components"
import ProfileCard from "./ProfileCard"
import Repos,{counts} from "./repos"
import {FaStar}
 from "react-icons/fa"


const Home= ()=>{
  const [fill,setFill]= useState(<Repos/>)
  
    
    return(
        <HomeBody>
          <ProfileC>
            <ProfileCard/>
          </ProfileC>
          <RepoSpace>
            <Options>
              <button onClick={()=>{setFill("this is overview")}}>Overview</button>
              <button onClick={()=>{setFill(<Repos/>)}}>
                Repositories <span>{counts[0].length}</span>
              </button>
              <button onClick={()=>{setFill("this is project")}}>
                Project
              </button>
              <button onClick={()=>{setFill("this is Package")}}>
                Packages
              </button>
              <button onClick={()=>{setFill("this is Rating")}}>
                <FaStar/>Star
              </button>
            </Options>
            <SearchSpace>
              <input placeholder="Find a repository"/>
              <select><option>Languages</option></select>
              <select> <option>Type</option></select>
              <select name="Sort"> 
               <option>Sort</option>
              </select>
              </SearchSpace> 
              <Repo>
                {fill}
              </Repo>
          </RepoSpace>
        </HomeBody>
    )
}

const HomeBody=styled.div`
  width:100%;
  height:auto;
  display:grid;
  grid-template-areas:"profile repo";
  grid-template-columns:300px 1fr;
  
`
const RepoSpace=styled.div`
  width:700px;
  margin-top:50px;
  height:auto;
  grid-area:"repo";
  gap:30px;
  justify-content:center;
  border-bottom:1px solid gainsboro;
  display:flex;
  flex-direction:column;
  justify-content:center;
  background-color:white;
`
const Options=styled.div`
  width:100%;
  height:40px;
  border-bottom:1px solid gainsboro;
  display:flex;
  justify-content:flex-start;
  flex-direction:row;
  gap:30px;
  background-color:white;
  button{
    background-color:white;
    border:none;
    display:flex;
    span{
      width:auto;
      background-color:gainsboro;
      height:auto;
      border-radius:50%;
    }
    flex-direction:row;
    gap:10px;
    &:focus{
      border-bottom:2px solid orange;
    }
  }
`


const ProfileC=styled.div`
width:250px;
grid-area:"profile";
display:flex;
margin-top:50px;
padding-left:30px;
align-items:flex-start;
justify-content:center;
height:auto;
`
const SearchSpace=styled.div`
width:100%;
display:flex;
height:50px;
align-items:center;
flex-direction:row;
gap:20px;
input{
  width:60%;
  border:1px solid gainsboro;
  border-radius:5px;
  height:30px;
  &::placeholder{
    font-size:regular;
    font-family: Arial, Helvetica, sans-serif;
    margin-left:20px;
  }
}
select{
  background-color:whitesmoke;
  height:30px;
  border-radius:5px;
}
`
const Repo=styled.div`
width:100%;
display:flex;
flex-direction:column;
height:auto;
`
export default Home