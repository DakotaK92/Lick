
export default function Home() {
  return (
    <>
    {/* Hero Section */}
      <div className="min-h-screen">
        <div className="flex flex-col h-screen bg-cover bg-center" 
          style={{ backgroundImage: "url('/assets/blue-bg.jpg')" }}>
            <div className="flex flex-row justify-center items-center h-full gap-20">
            <div className="flex flex-col">
              <h1 className="text-8xl font-bold text-white">
                Welcome<br /> to the <br />Home Page
              </h1>
              <p className="text-white text-lg max-w-md mt-4">
                Explore the best flavors crafted just for you.
              </p>
              <button className="mt-4 px-6 py-5 bg-[#18498a] text-xl text-white font-semibold rounded-lg shadow-md hover:bg-[#0f3c6b] transition duration-200">
                Visit Our Products
              </button>
            </div>

            <img 
              src="/assets/lick-mascot.png" 
              alt="Mascot" 
              className="w-96 h-auto" 
            />
          </div>
        </div>
      </div>

      {/* Tag Line Section */}
      <div className="p-8 flex flex-col items-center ">
        <h2 className="mt-8 text-5xl font-bold text-center m-auto text-[#18498a] capitalize">Flavor is King</h2>
        <p className="text-center font-semibold text-gray-700 mt-2 ">Me have lickable flavors that everyone loves.</p>
        <button className="mt-4 px-6 py-2 bg-[#18498a] text-white font-semibold rounded-lg shadow-md hover:bg-[#0f3c6b] transition duration-200 ">Explore Our Flavors</button>
      </div>

      {/* Ice Cream Selector Section */}
      <div>

      </div>

      {/* IceCream Window Section */}
      <div className="flex flex-row justify-center items-center p-8">
        <div className="flex p-4 ">
          <img src="/assets/images/icecreamImg1.png" />
        </div>
        <div className="flex flex-col p-4">
          <p className="text-gray-600 font-bold">New!</p>
          <h2 className="text-8xl font-bold text-[#b61d6a]">Confetti <br />Funfetti</h2>
          <p className="text-gray-600">Indulge in the rich and creamy texture of our Confetti Funfetti ice cream, <br />made with real vanilla beans for an authentic flavor experience.</p>
          <button className="mt-4 w-48 py-2 bg-[#b61d6a] text-white font-semibold rounded-lg shadow-md hover:bg-[#941856] transition duration-200">Celebrate Deliciousness</button>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center p-8">
        <div className="flex flex-col p-4">
          <p className="text-gray-600 font-bold">New!</p>
          <h2 className="text-8xl font-bold text-[#b61d6a]">Strawberries <br />& Cream</h2>
          <p className="text-gray-600">Indulge in the rich and creamy texture of our Strawberries & Cream ice cream, <br />made with real strawberries for an authentic flavor experience.</p>
          <button className="mt-4 w-48 py-2 bg-[#b61d6a] text-white font-semibold rounded-lg shadow-md hover:bg-[#941956] transition duration-200">Celebrate Deliciousness</button>
        </div>
        <div className="flex p-4 ">
          <img src="/assets/images/icecreamImg2.jpg" />
        </div>
      </div>
      {/* Ice Cream Selector Section */}
      <div>

      </div>

      {/* IceCream Window Section Part 2 */}
      <div className="flex flex-row justify-center items-center p-8">
        <div className="flex p-4 ">
          <img src="/assets/images/icecreamIllustration.jpg" />
        </div>
        <div className="flex flex-col p-4">
          <p className="text-gray-600 font-bold">Get Rewards!</p>
          <h2 className="text-8xl font-bold text-[#196149]">Lickin <br/> Rewards</h2>
          <p className="text-gray-600">Get rewards on all purchase to get exclusive notifications for new and upcoming flavors!</p>
          <button className="mt-4 w-48 py-2 bg-[#196149] text-white font-semibold rounded-lg shadow-md hover:bg-[#134131] transition duration-200">Celebrate Deliciousness</button>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center p-8">
        <div className="flex flex-col p-4">
          <h2 className="text-8xl font-bold text-[#241f22]">Lickin <br /> Exclusive</h2>
          <p className="text-gray-600">Indulge in the rich and creamy texture of our Strawberries & Cream ice cream, <br />made with real strawberries for an authentic flavor experience.</p>
          <button className="mt-4 w-48 py-2 bg-[#241f22] text-white font-semibold rounded-lg shadow-md hover:bg-[#030303] transition duration-200">Celebrate Deliciousness</button>
        </div>
        <div className="flex p-4 ">
          <img src="/assets/images/icecreamPintImg1.jpg" />
        </div>
      </div>
      {/* IceCream Delivery Section */}
      <div>

      </div>

      {/* IceCream Socials Section */}
      <div>

      </div>
    </>
  );
}
