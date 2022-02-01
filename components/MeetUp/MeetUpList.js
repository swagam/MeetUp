import MeetUpItem from "./MeetUpItem";
import classes from "./MeetUpList.module.css";
const MeetUpList=(props)=>{
    return <ul className={classes.list}>
        {props.MeetUpList.map((item)=><MeetUpItem key={item.id} id={item.id} title={item.title} image={item.image} address={item.address} description={item.description}></MeetUpItem>)}
    </ul>
}
export default MeetUpList;