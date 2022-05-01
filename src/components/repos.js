import React,{useEffect} from 'react'
import Card from "./card"
import styled from "styled-components"
import {useDispatch,useSelector} from "react-redux"
import {getRepo} from "../features/postSlice"

function Repos() {
    const [title,loading]=useSelector(state=>{state.title})
    const dispatch= useDispatch();
    counts.push(title);
    useEffect(()=>{
      dispatch(getRepo())
    },[])
  return (
    <RepoStyle>
      {
           
            title.slice(0,5).map((repo)=>{
                return(
                    <Card title={repo.full_name} description={repo.description} visibility={repo.visibility} topic={repo.language} watchers={repo.watchers}
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