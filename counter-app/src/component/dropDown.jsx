import { useState, useEffect } from 'react';
import { onChange, getKindSync } from '../lib/changePage';

export default function DropDownMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [kinds, setKinds] = useState(0); // 0:main, 1:gomen, 2:drink

    // const items = ['カウンター', 'ドリンクカウンターは無人になります', 'ドリンクメニュー'];
    const items = [
        {
            value: 0,
            name: 'カウンター'
        },
        {
            value: 1,
            name: 'ドリンクカウンターは無人になります',
        },
        {
            value: 2,
            name: 'ドリンクメニュー',
        }
    ]
    useEffect(() => {
        setKinds(getKindSync());
        const unsubscribe = onChange(setKinds);
        return unsubscribe;
    }, []);
    const handleSelect = (item) => {
        setKinds(item);
        setIsOpen(false);
    };
    return (
        <div className="relative inline-flex">
            <span className="inline-flex divide-x divide-gray-300 overflow-hidden rounded border border-gray-300 bg-white shadow-sm">
                <button
                    type="button"
                    className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
                >
                    {items[kinds].name}
                </button>

                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
                    aria-label="Menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            </span>

            {isOpen && (
                <div
                    role="menu"
                    className="absolute end-0 top-12 z-auto w-56 overflow-hidden rounded border border-gray-300 bg-white shadow-sm"
                >
                    {items.map((item) => (
                        < button
                            key={item.value}
                            onClick={() => handleSelect(item.value)}
                            className="block w-full px-3 py-2 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                            role="menuitem"
                        >
                            {console.log(item)}
                            {item.name}
                        </button>
                    ))}

                </div>
            )
            }
        </div >
    )
}