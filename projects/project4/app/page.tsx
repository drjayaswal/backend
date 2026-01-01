"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F96E5B] font-sans relative overflow-hidden">
      <main className="flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-20 relative z-10">
        <div className="relative w-full max-w-4xl">
          <div className="bg-[#F9DFDF] border-[3px] border-black rounded-2xl p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Docker Application
            </h1>
         </div>
          
            <div className="bg-[#F9DFDF]">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="/databases" className="text-white flex-1 cursor-pointer px-6 sm:px-10 py-4 bg-[#FF6B9D] hover:bg-[#FF5A8C] active:bg-[#FF4979] border-[3px] border-transparent hover:border-black rounded-2xl font-black text-sm sm:text-base transition-all hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] whitespace-nowrap text-center">
                DQE : Database Query Explorer
              </a>
              <a href="/apis" className="text-white flex-1 cursor-pointer px-6 sm:px-10 py-4 bg-[#A78BFA] hover:bg-[#977BEA] active:bg-[#876BDA] border-[3px] border-transparent hover:border-black rounded-2xl font-black text-sm sm:text-base transition-all hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] whitespace-nowrap text-center">
                ARB : API Request Builder
              </a>
            </div>
          </div>

          <div className="text-center">
            <div className="flex gap-4 justify-center">
              <a href="https://github.com/drjayaswal/backend" className="text-black inline-block px-3 sm:px-4 py-2 sm:py-3 bg-[#F9DFDF] border-2 sm:border-[3px] border-transparent hover:border-black rounded-lg sm:rounded-xl font-black text-sm sm:text-base hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:active:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[2px] active:translate-y-[2px] sm:active:translate-x-[3px] sm:active:translate-y-[3px]">
                <div className="flex items-center gap-1 sm:gap-2">
                  <svg className="w-4 h-4 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                  <span className="text-xl">Code</span>
                </div>
              </a>
          </div>
        </div>
        </div>
        </div>
      </main>
    </div>
  );
}