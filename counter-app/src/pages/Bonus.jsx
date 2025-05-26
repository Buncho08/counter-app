import bonus from '/bonus.mp4';
import { useEffect, useState } from 'react';
import { onChange, getCountSync } from '../lib/counterData';

export default function Bonus() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(getCountSync());
        const unsubscribe = onChange(setCount);
        return unsubscribe;
    }, []);
    return (
        <div className='font-noto h-full flex flex-col items-center justify-center relative bg-black'>
            <video
                autoPlay
                loop
                playsInline
                muted
                className='h-full w-full'
            >
                <source src={bonus} type="video/mp4" />
            </video>
            <div className='absolute w-[650px] left-[980px] top-[70px] text-center'>
                <p style={{ webkitTextStroke: "7px #000", textStroke: "7px #000", paintOrder: "stroke" }} className='text-[120px] font-extrabold text-yellow-500'>
                    {count}
                </p>
            </div>
        </div >
    )
}