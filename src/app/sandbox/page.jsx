export default async function Page() {
  return (
    <main>
      <div>
        <div className="sm:hidden w-10 h-10 rounded-full flex items-center justify-center bg-red-500">XS</div>
        <div className="hidden sm:flex md:hidden w-10 h-10 rounded-full items-center justify-center bg-orange-300">
          SM
        </div>
        <div className="hidden md:flex lg:hidden w-10 h-10 rounded-full items-center justify-center bg-yellow-500">
          MD
        </div>
        <div className="hidden lg:flex xl:hidden w-10 h-10 rounded-full items-center justify-center bg-green-500">
          LG
        </div>
        <div className="hidden xl:flex 2xl:hidden w-10 h-10 rounded-full items-center justify-center bg-green-500">
          XL
        </div>
        <div className="hidden 2xl:flex w-10 h-10 rounded-full items-center justify-center bg-green-500">2XL</div>
      </div>
      {/* responsive */}
      <h1>Responsive</h1>
      <div className="flex flex-col lg:flex-row">
        <div className="h-20 w-full lg:w-1/3 bg-red-500">R</div>
        <div className="h-20 w-full lg:w-1/3 bg-green-500">G</div>
        <div className="h-20 w-full lg:w-1/3 bg-blue-500">B</div>
      </div>

      <div className="h-20 w-full flex items-center justify-center bg-gradient-to-r from-red-500 via-green-500 to-blue-500">
        RGB
      </div>

      {/* adaptative */}
      <h1>Adaptative</h1>
      <div className="hidden lg:flex">
        <div className="h-20 w-1/3 bg-purple-500">Pu</div>
        <div className="h-20 w-1/3 bg-yellow-500">Y</div>
        <div className="h-20 w-1/3 bg-pink-500">Pi</div>
      </div>

      <div className="flex flex-col lg:hidden">
        <div className="h-20 w-full bg-purple-500">Pu</div>
        <div className="h-20 w-full bg-yellow-500">Y</div>
        <div className="h-20 w-full bg-pink-500">Pi</div>
      </div>

      <div className="h-20 w-full flex items-center justify-center bg-gradient-to-r from-purple-500 via-yellow-500 to-pink-500">
        PuYPi
      </div>
    </main>
  );
}
