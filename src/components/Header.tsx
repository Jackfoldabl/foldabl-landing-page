export const Header = () => {
  return (
    <header className="w-full bg-[#5F6B7B] py-6 sm:py-7 md:py-8 shadow-md relative z-50">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          {/* Logo Text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-white">fold</span>
            <span className="text-[#CE9E7A]">ä</span>
            <span className="text-white">bl</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.15em] text-white/90 mt-2 sm:mt-3 font-medium">
            DESIGN | BUILD | DELIVER
          </p>
        </div>
      </div>
    </header>
  );
};
