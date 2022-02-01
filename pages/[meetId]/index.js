import MeetUpDetail from "../../components/MeetUp/MeetUpDetail"

const MeetId=(props)=>{
    return <MeetUpDetail/>
}
export const getStaticPaths = async()=>{
    return {
        fallback:false,
        paths:[{params:{meetId:'1'}},]
    }
}

export const getStaticProps = async(context)=>{
    consol.log(context.params.meetId);
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
export default MeetId;