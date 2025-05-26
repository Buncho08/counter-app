import { useEffect, useState } from 'react';
import { onChange, getCountSync } from '../lib/counterData';
import { getKindSync } from '../lib/changePage';
import Monitor from './Monitor';
import Bonus from './Bonus';
import gomen from '/gomen.png';
import drink from '/drink.png';


export default function Test() {
    const [count, setCount] = useState(getCountSync());
    const [kind, setKinds] = useState(getKindSync());

    useEffect(() => {
        const unsubscribe = onChange(setCount);
        return unsubscribe;
    }, []);

    return (
        <>
            {
                (kind === 0) ?
                    (count >= 1000) ?
                        <Bonus />
                        :
                        <Monitor />
                    :
                    <div className='font-noto h-full flex flex-col items-center justify-center relative'>
                        <p>
                            {kind}
                        </p>
                        {(kind === 1) ?
                            <img src={gomen} alt="" className='h-full w-full' />
                            :
                            <img src={drink} alt="" className='h-full w-full' />
                        }
                    </div>
            }
        </>

    );
}