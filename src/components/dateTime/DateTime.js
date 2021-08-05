import "./datetime.css";
import Iframe from "react-iframe";


export default function DateTime(){
    return(
        <div className="module">
            <Iframe id="dateTime"
                    url="https://free.timeanddate.com/clock/i7x9d1vo/n250/tlca/fs22/ftb/tt0/tm1/ta1/tb4"
                    width="269"
                    height="54"
            />
        </div>
    )
}