import {Link} from "react-router-dom";

function App() {
  return (
    <div className="flex flex-row justify-around items-center from-gray-900 to-cyan-500 h-[94%]">
      <div className="ml-40">
        <h1 className="mb-2 font-mono text-4xl text-gray-100 md:text-6xl">
          Hi, I&apos;m <br className="block md:hidden" />
          <span className="relative">
            <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
            Meraz Mamun <span className="text-3xl md:text-5xl animation-wave duration-300">👋🏾</span>
            </span>
          </span>
        </h1> 
        {/* Credit to https://vanntile.com/blog/composited-typing-animation for their tutorial */}
        <p className="text-3xl text-gray-100">Revenue Analyst @ Wilson Elser.</p>
        <Link to="/projects"><button className="shadow-teal-200 shadow-xl mt-5 h-14 w-40 bg-blue-500 text-gray-100 text-2xl tracking-wide font-mono shadow-xl shadow-cyan-500/50">
          Projects
        </button></Link>
      </div> 
      <div className="z-40 w-1/2">
        <img className="rounded-full border-2 w-3/4 shadow-teal-300 shadow-xl" alt="Potrait of Meraz Mamun" src="/mmamun.jpeg"/>
      </div>
    </div>
  );
}

export default App;