import NewMeetUp from "../../components/MeetUp/NewMeetUp"
const onAddMeetupHandler = async(data)=>{
    const response = await fetch("/api/new-meetup",{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json',
        }})
}
const NewMeetUpPage=()=>{
    return <NewMeetUp onAddMeetup={onAddMeetupHandler}/>
}
export default NewMeetUpPage;