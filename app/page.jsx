
export default function Home() {
  return (
    <>
      <div className="min-h-screen">

        <div className="flex flex-col h-screen bg-cover bg-center" 
          style={{ backgroundImage: "url('/assets/blue-bg.jpg')" }}>
            <div className="flex flex-row justify-center items-center h-full gap-20">
            {/* Text section */}
            <div className="flex flex-col">
              <h1 className="text-8xl font-bold text-white">
                Welcome<br /> to the <br />Home Page
              </h1>
              <p className="text-white text-lg max-w-md mt-4">
                Explore the best flavors crafted just for you.
              </p>
            </div>

            {/* Image section */}
            <img 
              src="/assets/lick-mascot.png" 
              alt="Mascot" 
              className="w-64 h-auto" 
            />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-center m-auto">Discover Our Flavors</h2>
        </div>

      </div>
    </>
  );
}
