import { useEffect, useState } from 'react';
import { onChange, getCountSync } from '../lib/counterData';
import counter from "/counter.mp4";

export default function Monitor() {
  const [count, setCount] = useState(getCountSync());
  useEffect(() => {
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
        <source src={counter} type="video/mp4" />
      </video>
      <div className='absolute w-[800px] left-[540px] top-[480px] text-center self-center justify-center '>
        <p style={{ webkitTextStroke: "7px #000", textStroke: "7px #000", paintOrder: "stroke" }} className='text-[300px] font-extrabold text-yellow-500'>
          {count}
        </p>
      </div>
    </div >
  );
}