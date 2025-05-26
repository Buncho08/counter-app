import { useEffect, useState } from 'react';
import { onChange, getCountSync } from '../lib/counterData';
import Monitor from './Monitor';
import Bonus from './Bonus';
import gomen from '/gomen.png';
import drink from '/drink.png';


export default function Test() {
    const [count, setCount] = useState(getCountSync());

    useEffect(() => {
        const unsubscribe = onChange(setCount);
        return unsubscribe;
    }, []);

    return (
        <>
            {
                (count >= 1000) ?
                    <Bonus />
                    :
                    <Monitor />
            }
        </>

    );
}