import { useEffect, useState } from 'react';
import { onChange, getCountSync } from '../lib/counterData';

export default function Monitor() {
  const [count, setCount] = useState(getCountSync());

  useEffect(() => {
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
          ただいま…
        </p>
        <div className='text-9xl'>
          {count}
        </div>
        <p className='text-7xl'>
          杯
        </p>
      </div>
      <p className='my-8 text-5xl'>
        100杯到達ごとにボーナスタイム発動！
      </p>
      <p className='my-8 text-5xl'>
        めざせ1000杯！！！
      </p>
    </div>
  );
}