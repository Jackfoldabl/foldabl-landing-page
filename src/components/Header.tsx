export const Header = () => {
  return (
    <header className="w-full bg-[#5F6B7B] py-4 sm:py-5 md:py-6">
      <div className="container mx-auto px-6 sm:px-8 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          {/* Logo Text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-white">fold</span>
            <span className="text-[#CE9E7A]">ä</span>
            <span className="text-white">bl</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-[11px] sm:text-xs md:text-sm uppercase tracking-wider text-white mt-2 sm:mt-3 font-medium">
            DESIGN | BUILD | DELIVER
          </p>
        </div>
      </div>
    </header>
  );
};
