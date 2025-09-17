import React from "react";

export default function Header() {
    return (
        <>
        <header className="bg-white border-b border-gray-200 w-full fixed top-0 left-0 h-[93px] z-[999]">
                <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <div className="w-1/5">
                        <a className="cursor-pointer">Ownfinity</a>
                    </div>

                    <div className="w-1/2">
                        {/* Search Placeholder */}
                    </div>
                    <div className="w-1/6 flex justify-end mr-10 items-center relative cursor-pointer">
                        {/* Cart count Placeholder */}
                        <a className="inline-block ml-1"> Cart</a>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {/* user profile menu dropdown placeholder */}
                    </div>

                    <div className="flex lg:hidden">
                        {/* mobile menu open icon placeholder */}
                    </div>
                </nav>
                <div className="lg:hidden">
                    {/* Mobile menu placeholer */}
                </div>
            </header>
        
        </>
    )
}