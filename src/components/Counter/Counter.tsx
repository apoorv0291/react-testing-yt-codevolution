import React from 'react';
import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(0);
    return (
        <div>
            Counter
            <h1> {count}</h1>
            <button onClick={() => setCount(count + 1)}> Increment</button>
            <input
                type="number"
                value={amount}
                name="amount"
                onChange={(e) => setAmount(parseInt(e.target.value))}
            />
            <button onClick={() => setCount(amount)}> Set Amount</button>
        </div>
    );
}
