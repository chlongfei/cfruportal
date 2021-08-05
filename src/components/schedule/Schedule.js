import "./schedule.css";
import Iframe from "react-iframe";

export default function Schedule(){
    return(
        <div className="module" id="schedule">
            <Iframe 
                url="https://www.cfru.ca/shows/#content-area"
                height="100%"
                width="100%"
            />
        </div>
    )
    
}