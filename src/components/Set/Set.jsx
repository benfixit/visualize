import { useState } from "react";
import "./Set.css";

/**
 * @todo I should be able to delete from a set by clicking on the item
 * @returns 
 */
const SetComponent = () => {
    const [data, setData] = useState(new Set());

    const add = (item) => {
        data.add(12);
        data.add(14);

        setData(new Set([...data]));
    }

    const remove = (item) => {
        data.delete(12);
        setData(new Set([...data]));
    }
    
    return (
        <div className="wrapper">
            <h3 className="heading">Set</h3>
            <div className="structure">
                {[...data].map((item, index) => <span key={index}>{item}</span>)}
            </div>
            <div className="operations">
                <button>Create</button>
                <button onClick={add}>Add</button>
                <button onClick={remove}>Delete</button>
            </div>
        </div>
    );
}

export default SetComponent;