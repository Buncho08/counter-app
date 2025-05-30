import { useEffect, useState } from 'react';
import { increment, decrement, onChange, getCountSync } from '../lib/counterData';
import DropDownMenu from '../component/dropDown';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(getCountSync());
    const unsubscribe = onChange(setCount);
    return unsubscribe;
  }, []);

  return (
    <div className='font-noto h-full flex flex-col items-center justify-center'>
      <div className='mb-10 flex flex-row'>
        <h1 className='text-6xl'>開花宣言</h1>
        <h2 className='text-6xl'>
          ドリンク枚数カウンター
        </h2>
      </div>
      <div className='my-8 flex flex-row items-end'>
        <p className='text-7xl'>
          只今...
        </p>
        <div className='text-9xl'>
          {count}
        </div>
        <p className='text-7xl'>
          杯
        </p>
      </div>
      <div className='flex flex-row gap-8'>
        {/* <button onClick={increment} style={{ marginRight: 10 }}>+1</button>
        <button onClick={decrement}>-1</button> */}
        <a
          onClick={increment}
          className="inline-block rounded-sm bg-amber-400 px-12 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden"
          href="#"
        >
          増やす +1
        </a>

        <a
          onClick={decrement}
          className="inline-block rounded-sm border border-current px-12 py-3 text-sm font-medium text-amber-400 transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden"
          href="#"
        >
          減らす -1
        </a>
      </div>

      <h3 className='mt-10 mb-5 text-4xl'>
        ページ切り替え
      </h3>
      <DropDownMenu />

    </div>
  );
}
