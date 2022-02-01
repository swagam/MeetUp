import { Fragment } from "react/cjs/react.production.min";
import HeaderNavigation from "./HeaderNavigation";

const LayOut=(props)=>{
    return <Fragment>
    <HeaderNavigation/>
    {props.children}
    </Fragment>
}
export default LayOut;