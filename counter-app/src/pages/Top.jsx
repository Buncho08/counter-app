import { Link } from 'react-router-dom';
import { openLinkInNewTab } from '../lib/counterData';
import nanako from "/nanako.png";

export default function Top() {
  let linkStyle = "transition-colors hover:text-sky-400";
  return (
    <div className='font-noto h-full'>
      <div id='header' className='w-full h-[360px]'>
        <img src={nanako} alt="菜々子ちゃん" className='object-[left_calc(-200%)_top_calc(36%)] w-[120%] max-h-full object-cover max-w-full' />
      </div>
      <div class="m-5 flex self-center items-center flex-col">
        <h1 class="text-5xl m-5 font-bold">
          🍻TOPページ🍻
        </h1>

        <ul className="mt-7 flex self-center items-center flex-col gap-4 text-xl text-sky-950">
          <li><p onClick={() => openLinkInNewTab("/counter")} className={linkStyle}>操作用 カウンター</p></li>
          <li><p onClick={() => openLinkInNewTab("/monitor")} className={linkStyle}>モニター表示用 カウンター</p></li>
          <li><p onClick={() => openLinkInNewTab("/test")} className={linkStyle}>モニター表示用 ボーナスタイム テストページ</p></li>
        </ul>
      </div>
    </div>

  );
}