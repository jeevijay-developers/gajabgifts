export default function ShirtImages() {
  return (
    <div data-aos="fade-left" data-aos-duration="1000" className="relative w-full max-w-6xl mx-auto py-12 px-4">
      {/* Main Image Container */}
      <div className="relative h-[350px] sm:h-[450px] md:h-[500px] w-full">
        {/* Image 1 */}
        <div className="absolute top-8 left-14 w-28 h-40 sm:top-0 sm:left-20 sm:w-40 sm:h-56 md:w-56 md:h-72 rounded-xl overflow-hidden shadow-lg z-20 rotate-[-2deg] sm:rotate-[-3deg]">
          <img
            src="/shirts/keychain.png"
            alt="Black White Printed Shirt"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="absolute top-32 right-12 w-32 h-44 sm:top-32 sm:right-12 sm:w-48 sm:h-64 md:w-64 md:h-80 rounded-xl overflow-hidden shadow-2xl z-30 rotate-[1deg] sm:rotate-[3deg]">
          <img
            src="/shirts/mug.png"
            alt="Black and Maroon Shirts"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 3 - Hidden on mobile */}
        <div className="hidden lg:block absolute top-0 right-0 w-40 h-52 md:w-52 md:h-68 rounded-xl overflow-hidden shadow-md z-10 rotate-[5deg]">
          <img
            src="/shirts/cushion.png"
            alt="White Shirt"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 4 - Hidden on mobile */}
        <div className="hidden lg:block absolute bottom-0 left-12 w-44 h-56 md:w-60 md:h-72 rounded-xl overflow-hidden shadow-xl z-20 rotate-[-14deg]">
          <img
            src="/shirts/tshirt.png"
            alt="Maroon Shirt Closeup"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
