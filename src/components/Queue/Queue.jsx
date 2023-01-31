import { useState } from "react";
import Queue from "../../classes/Stack";
import "./Queue.css";

const queue = new Queue();

const QueueComponent = () => {
    const [data, setData] = useState(queue.getData());
    
    const enqueue = (item) => {
        queue.enqueue(item);
        setData([...queue.getData()]);
    }

    const dequeue = () => {
        queue.dequeue();
        setData([...data, 22])
    }

    const front = () => {
        queue.front();
    }

    const back = () => {
        queue.back();
    }

    return (
        <div className="wrapper">
            <h3 className="heading">Queue</h3>
            <div className="structure">
                {data.map((item, index) => <span key={index}>{item}</span>)}
            </div>
            <div className="operations">
                <button>Create</button>
                <button onClick={enqueue}>Enqueue</button>
                <button onClick={dequeue}>Dequeue</button>
                <button onClick={front}>Front</button>
                <button onClick={back}>Back</button>
            </div>
        </div>
    );
}

export default QueueComponent;