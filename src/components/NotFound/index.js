import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <div class="mainbox">
    <div class="err">4</div>
    <div class="err">0</div>
    <div class="err2">4</div>
    <div class="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <Link to="/">home</Link>and try from there.</p></div>
      </div>
        </div>
     );
}
 
export default NotFound;