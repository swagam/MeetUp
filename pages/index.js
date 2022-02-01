import Head from "next/head";
import { Fragment } from "react";
import MeetUpList from "../components/MeetUp/MeetUpList"

const HomePage=(props)=>{
  return <Fragment>
  <Head>
  <title>MeetUpData</title>
  <meta name='description' content='Meetup places'></meta>
  </Head>
  <MeetUpList MeetUpList={props.meetUps}/>
  </Fragment>
}

export const getStaticProps = async()=>{

  const response = await fetch("http://localhost:3000/api/new-meetup",{
    method:'GET',
    headers:{
        'Content-Type':'application/json',
    }})
    const data = await response.json();
    return {
    props:{meetUps:data.meetups}
  }
}
export default HomePage;