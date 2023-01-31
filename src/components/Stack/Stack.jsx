import { useState } from "react";
import Stack from "../../classes/Stack";
import "./Stack.css";

const stack = new Stack();

const StackComponent = () => {
    const [data, setData] = useState(stack.getData());

    const push = () => {
        stack.push(22);

        setData([...stack.getData()]);
    }

    const pop = () => {
        stack.pop();

        setData([...stack.getData()]);
    }
    
    return (
        <div className="wrapper">
            <h3 className="heading">Stack</h3>
            <div className="structure">
                {data.map((item, index) => <span key={index}>{item}</span>)}
            </div>
            <div className="operations">
                <button>Create</button>
                <button onClick={push}>Push</button>
                <button onClick={pop}>Pop</button>
            </div>
        </div>
    );
}

export default StackComponent;