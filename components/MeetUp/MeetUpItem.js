import { useRouter } from "next/router";
import Card from "../UI/Card";
import classes from "./MeetUpItem.module.css";
const MeetUpItem=(props)=>{
    const router = useRouter();
    const showDetailsHandler=()=>{
        router.push('/' + props.id);
    }
    return <li>
    <Card>
    <div>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
    </div>
    </Card>
    
    </li>
}
export default MeetUpItem;