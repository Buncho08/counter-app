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
    <div className='font-noto h-[1080px] w-[1980px] relative bg-black'>
      <video
        autoPlay
        loop
        playsInline
        muted
        className='h-full w-full'
      >
        <source src={counter} type="video/mp4" />
      </video>
      <div className='absolute w-full bottom-[9rem] text-center mx-auto my-0'>
        <p style={{ webkitTextStroke: "7px #000", textStroke: "7px #000", paintOrder: "stroke" }} className='text-[300px] font-extrabold text-yellow-500'>
          {count}
        </p>
      </div>
    </div >
  );
}