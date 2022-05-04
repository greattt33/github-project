import React,{useEffect} from 'react'
import Card from "./card"
import styled from "styled-components"
import {useDispatch,useSelector} from "react-redux"

import {getRepo} from "../features/postSlice"

function Repos() {
    
    const {title,loading} = useSelector((state)=>state.title)
    const dispatch= useDispatch();
    
    
    useEffect(()=>{
      
      dispatch(getRepo())
      const number=title.length
    counts.push(number)
  
    },[])
    
  return ( 
    

    <RepoStyle>
      {
           
            title.slice(0,20).map((repo)=>{
                return(
                    <Card title={repo.full_name} html={repo.html_url} description={repo.description} visibility={repo.visibility} topic={repo.language} watchers={repo.watchers}
                    updated_at={repo.updated_at}/>
                )
                
            })
        }
        

    </RepoStyle>
  )
}


export const counts=[]



const RepoStyle=styled.div`
  width:100%;
  height:auto;
  display:flex;
  flex-direction:column;
`
export default Repos
