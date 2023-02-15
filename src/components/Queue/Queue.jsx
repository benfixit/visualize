import { useState } from "react";
import Queue from "../../classes/Queue";
import "./Queue.css";

const queue = new Queue();

const QueueComponent = () => {
    const [data, setData] = useState(queue.getData());
    const [createItems, setCreateItems] = useState("");
    const [enqueueItem, setEnqueueItem] = useState(0);

    const enqueue = () => {
        const item = parseInt(enqueueItem);

        queue.enqueue(item);
        setData([...queue.getData()]);
    }

    const dequeue = () => {
        queue.dequeue();

        setData([...queue.getData()])
    }

    const front = () => {
        queue.front();
    }

    const back = () => {
        queue.back();
    }

    const create = () => {
        const items = createItems.split(",");
        queue.clear();

        items.forEach((item) => queue.enqueue(item));

        setData([...queue.getData()])
    }

    const handleChangeCreateItems = (event) => {
        setCreateItems(event.target.value)
    }

    const handleChangeEnqueueItem = (event) => {
        setEnqueueItem(event.target.value)
    }

    // Get the element width
    // Create a new item 20px away from it
    // Animate it to 10px close to the width

    return (
        <main id="wrapper">
            <h3 className="title">Queue</h3>
            <section className="structure">
                {data.length > 0 && <span><strong>Front</strong></span>}
                <div className="data">
                    {data.map((item, index) => <span key={index}>{item}</span>)}
                </div>
                {/* {data.length > 0 && <span><strong>Back</strong></span>} */}
            </section>
            <section className="operations">
                <div className="actions">
                    <div>
                        <input name="createItems" value={createItems} onChange={handleChangeCreateItems} />
                        <button onClick={create}>Create</button>
                    </div>
                    <div>
                        <input name="enqueueItem" value={enqueueItem} onChange={handleChangeEnqueueItem} type="number" />
                        <button onClick={enqueue}>Enqueue</button>
                    </div>
                    <button onClick={dequeue}>Dequeue</button>
                    <button onClick={front}>Front</button>
                    <button onClick={back}>Back</button>
                </div>
                <div className="description">
                    Operation performed: Enqueue
                    <p>
                        The item got added to the back of the queue;
                    </p>
                </div>
            </section>
        </main>
    );
}

export default QueueComponent;