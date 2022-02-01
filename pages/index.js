import MeetUpList from "../components/MeetUp/MeetUpList"

const DUMMY_LIST=[{
  id: 'm1',
  title: 'A First Meetup',
  image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
  address: 'Some address 5, 12345 Some City',
  description: 'This is a first meetup!',
},
{
  id: 'm2',
  title: 'A Second Meetup',
  image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
  address: 'Some address 10, 12345 Some City',
  description: 'This is a second meetup!',
},];
const HomePage=(props)=>{
  return <MeetUpList MeetUpList={props.meetUps}/>
}

export const getStaticProps = async()=>{
  return {
    props:{meetUps:DUMMY_LIST}
  }
}
export default HomePage;