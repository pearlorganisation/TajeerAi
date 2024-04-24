import { es } from "faker/lib/locales";
import React, { useRef } from "react";

const FullPage = () => {
  const scrollRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      scrollRef.current.scrollBy(100, 0);
    } else if (event.key === 'Backspace') {

      scrollRef.current.scrollBy(-100, 0);
    }
  };

  return (
    <div className="w-full overflow-hidden">

      <div className="flex h-screen w-full snap-x snap-mandatory overflow-hidden scroll-smooth" ref={scrollRef}>
        <div class=" min-h-screen  px-16 flex h-full w-full flex-shrink-0 snap-start items-center justify-center bg-yellow-100 text-5xl">
          <div class="relative w-full max-w-lg">
            <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div class="m-8 relative space-y-4">
              <div className="w-96">
                <label for="input-label" class="block text-sm font-medium mb-2">Email1</label>
                <input onKeyDown={handleKeyDown} type="email" id="input-label" className="py-3 px-4 block w-full rounded-lg focus:outline-none outline-blue-100 text-sm focus:ring-yellow-400/70 focus:ring-4 disabled:opacity-50 disabled:pointer-events-none" placeholder="you@site.com" />
              </div>
            </div>
          </div>
        </div>
        <div class=" min-h-screen  px-16 flex h-full w-full flex-shrink-0 snap-start items-center justify-center bg-red-100 text-5xl">
          <div class="relative w-full max-w-lg">
            <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div class="m-8 relative space-y-4">
              <div className="w-96">
                <label for="input-label" class="block text-sm font-medium mb-2">Email2</label>
                <input onKeyDown={handleKeyDown} type="email" id="input-label" className="py-3 px-4 block w-full rounded-lg focus:outline-none outline-blue-100 text-sm ring-red-400/70 focus:ring-4 disabled:opacity-50 disabled:pointer-events-none" placeholder="you@site.com" />
              </div>
            </div>
          </div>
        </div>
        <div class=" min-h-screen  px-16 flex h-full w-full flex-shrink-0 snap-start items-center justify-center bg-green-100">
          <div class="relative w-full max-w-lg">
            <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div class="m-8 relative space-y-4">
              <div className="w-96">
                <label for="input-label" class="block text-sm font-medium mb-2">Email3</label>
                <input onKeyDown={handleKeyDown} type="email" id="input-label" className="py-3 px-4 block w-full rounded-lg focus:outline-none outline-blue-100 text-sm ring-green-400/70 focus:ring-4 disabled:opacity-50 disabled:pointer-events-none" placeholder="you@site.com" />
              </div>
            </div>
          </div>
        </div>
        <div class=" min-h-screen  px-16 flex h-full w-full flex-shrink-0 snap-start items-center justify-center bg-pink-100 text-5xl">
          <div class="relative w-full max-w-lg">
            <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div class="m-8 relative space-y-4">
              <div className="w-96">
                <label for="input-label" class="block text-sm font-medium mb-2">Email4</label>
                <input onKeyDown={handleKeyDown} type="email" id="input-label" className="py-3 px-4 block w-full rounded-lg focus:outline-none outline-blue-100 text-sm ring-pink-400/70 focus:ring-4 disabled:opacity-50 disabled:pointer-events-none" placeholder="you@site.com" />
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default FullPage;
