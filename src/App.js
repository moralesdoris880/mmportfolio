function App() {
  return (
    <div className="flex flex-row justify-around items-center bg-gray-900 h-full">
      <div className="mb-40">
        <h1 className="mb-2 font-mono text-4xl text-gray-100 md:text-6xl">
          Hi, I&apos;m <br className="block md:hidden" />
          <span className="relative">
          <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
          Meraz Mamun <span className="text-3xl md:text-5xl">👋</span>
          </span>
          <span
          className="{`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-gray-900 w-full animate-type will-change`}"
          ></span>
          </span>
        </h1> 
        {/* Credit to https://vanntile.com/blog/composited-typing-animation for their tutorial */}
        <p className="text-3xl text-gray-100">Aspiring Data Analyst.</p>
        <button href="/projects" className="mt-5 h-14 w-40 bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-100 text-2xl tracking-wide font-mono">
          Projects
        </button>
      </div> 
      <div className="z-40">
        <img className="mb-32 mr-10 rounded-full border-2" alt="Potrait of Meraz Mamun" src="https://media-exp1.licdn.com/dms/image/C4D03AQHojaipPZptxg/profile-displayphoto-shrink_800_800/0/1569163475506?e=1673481600&v=beta&t=a7UUfiuqzGI05HtYs_E8llMbsD-V9nRbF73GqutABYA"/>
      </div>
    </div>
  );
}

export default App;