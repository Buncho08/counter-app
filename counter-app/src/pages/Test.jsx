import { useEffect, useState } from 'react';
import { onChange, getCountSync } from '../lib/counterData';

export default function Test() {
    const [count, setCount] = useState(getCountSync());

    useEffect(() => {
        const unsubscribe = onChange(setCount);
        return unsubscribe;
    }, []);

    return (
        <>
            {
                ((Math.floor((count / 10) % 10) * 10) + (count % 10)) !== 10 ?
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
                    :
                    <div className='font-noto h-full flex flex-col items-center justify-center'>
                        <p className='self-start mx-40 text-7xl font-bold mb-12'>
                            {(Math.floor((count / 10) % 100) * 10)}杯記念
                        </p>
                        <h1 className='text-9xl animate-pulse font-extrabold'>
                            <span className="text-red-500">ボ</span><span className="text-amber-400">ー</span><span className="text-yellow-300">ナ</span><span className="text-green-500">ス</span><span className="text-blue-500">タ</span><span className="text-sky-600">イ</span><span className="text-purple-600">ム</span><span className="text-blue-600">中</span><span className="text-sky-500">！</span><span className="text-green-500">！</span><span className="text-yellow-300">！</span><span className="text-amber-400">！</span><span className="text-red-500">！</span>
                        </h1>
                        <p className='self-center mx-40 text-5xl mb-12 my-10'>
                            全ドリンク <span className='text-7xl font-extrabold text-red-600'>30円</span> !!!
                        </p>
                    </div>
            }
        </>

    );
}