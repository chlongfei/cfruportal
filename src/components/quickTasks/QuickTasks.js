//import "./quicktasks.css";
import {Button} from "react-bootstrap";


export default function QuickTasks(){
    return(
        <div className="module" id="QuickTasks">
                <h4>Actions</h4>
                <Button
                    variant="outline-primary"
                    href="/reporting"
                >Archive This Week
                </Button>
                <Button
                    variant="outline-primary"
                >User Profiles
                </Button>
                <Button
                    variant="outline-primary"
                >View Schedules
                </Button>
                <Button
                    variant="outline-primary"
                >View LogSheets
                </Button>
        </div>
    )
}