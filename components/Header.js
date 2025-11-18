import Image from "next/image";
export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200"
      style={{ padding: "0.75rem 2rem" }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="shrink-0">
          <img
            src="/images/logo.svg"
            alt="MAITRI LAB GROWN DIAMONDS"
            className="w-auto object-contain"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center" style={{ gap: "1rem" }}>
          <button
            className="text-xl font-medium border border-black rounded hover:bg-gray-50 transition-colors duration-200"
            style={{ padding: "0.625rem 2rem" }}
          >
            SIGN IN
          </button>
          <button
            className="text-xl font-medium bg-black text-white rounded hover:bg-gray-800 transition-colors duration-200"
            style={{ padding: "0.625rem 2rem" }}
          >
            GET ACCESS
          </button>
        </div>
      </div>
    </header>
  );
}
