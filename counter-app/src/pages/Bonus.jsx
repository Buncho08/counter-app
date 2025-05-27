import bonus from '/bonus.mp4';
import { useEffect, useState } from 'react';
import { onChange, getCountSync } from '../lib/counterData';

export default function Bonus() {
    const [count, setCount] = useState(getCountSync());

    useEffect(() => {
        const unsubscribe = onChange(setCount);
        return unsubscribe;
    }, []);
    return (
        <div className='font-noto h-[1080px] w-[1980px] relative bg-black'>
            <video
                autoPlay
                loop
                playsInline
                muted
                className='h-full w-full'
            >
                <source src={bonus} type="video/mp4" />
            </video>
            <div className='absolute w-full top-[4rem] text-center mx-auto ml-[21rem] my-0'>
                {/* <div className='absolute w-[650px] left-[980px] top-[70px] text-center'> */}
                <p className='text-[120px] font-extrabold text-black'>
                    {count}
                </p>
            </div>
        </div >
    )
}