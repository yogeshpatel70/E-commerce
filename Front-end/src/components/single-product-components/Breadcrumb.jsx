const Breadcrumb = () => {
  return (
    <nav
      className="bg-[#f9f5f1] flex items-center justify-center px-4 sm:px-6 md:px-10"
      style={{
        width: "100%",
        height: "100px",
      }}
    >
      <ul className="flex flex-wrap items-center text-gray-600 text-sm space-x-2">
        {/* Home Link */}
        <li>
          <a
            href="/"
            className="hover:underline font-medium text-xs sm:text-sm md:text-base"
          >
            Home
          </a>
        </li>
        <li className="text-gray-400 text-xs sm:text-sm md:text-base">›</li>
        {/* Shop Link */}
        <li>
          <a
            href="/shop"
            className="hover:underline font-medium text-xs sm:text-sm md:text-base"
          >
            Shop
          </a>
        </li>
        <li className="text-gray-400 text-xs sm:text-sm md:text-base">›</li>
        {/* Current Page */}
        <li className="font-semibold text-black text-xs sm:text-sm md:text-base">
          Elegant Sofa
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
