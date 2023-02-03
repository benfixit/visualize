import { useState } from "react";
import LinkedList from "../../classes/LinkedList";
import "./LinkedList.css";

const linkedList = new LinkedList();

const LinkedListComponent = () => {
    const [data, setData] = useState(linkedList.getData());

    const insert = () => {
        linkedList.insert(22);

        setData([...linkedList.getData()])
    }
    
    return (
        <div className="wrapper">
            <h3 className="heading">LinkedList</h3>
            <div className="structure">
                {data.map((item, index) => <span key={index}>{item}</span>)}
            </div>
            <div className="operations">
                <button>Create</button>
                <button onClick={insert}>Insert</button>
            </div>
        </div>
    );
}

export default LinkedListComponent;