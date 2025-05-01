import { Link } from 'react-router-dom';

export default function Top() {
  let linkStyle = "transition-colors hover:text-sky-400";
  return (
    <div className='font-noto h-full'>
      <div id='header' className='w-full h-[360px]'>
        <img src="/public/nanako.jpg" alt="菜々子ちゃん" className='object-[left_calc(-200%)_top_calc(36%)] w-[120%] max-h-full object-cover max-w-full' />
      </div>
      <div class="m-5 flex self-center items-center flex-col">
        <h1 class="text-5xl m-5 font-bold">
          🍻TOPページ🍻
        </h1>

        <ul className="mt-7 flex self-center items-center flex-col gap-4 text-xl text-sky-950">
          <li><Link to="/monitor" className={linkStyle}>操作用 カウンター</Link></li>
          <li><Link to="/counter" className={linkStyle}>モニター表示用 カウンター</Link></li>
        </ul>
      </div>
    </div>

  );
}