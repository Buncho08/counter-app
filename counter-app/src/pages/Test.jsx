import { useEffect, useState } from 'react';
import { onChange, getCountSync } from '../lib/counterData';
import Monitor from './Monitor';
import Bonus from './Bonus';


export default function Test() {
    const [count, setCount] = useState(getCountSync());

    useEffect(() => {
        const unsubscribe = onChange(setCount);
        return unsubscribe;
    }, []);

    return (
        <>
            <p>
                ⚠️テストのため、10, 20, 30, 40...の10杯刻みでボーナスタイム中になるようになっています
            </p>
            <p>
                ⚠️今はシンプルな仕組みです  ボーナスタイム終了ボタンとかもできるし、時間で切り替えみたいな仕組みもできる
            </p>
            {
                (count >= 1000) ?
                    <Bonus />
                    :
                    <Monitor />
            }
        </>

    );
}