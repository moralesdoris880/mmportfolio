function About() {
    return (
      <div className=" h-full flex bg-gray-900">
        <img src="/aboutme.jpg" className="border-2 ml-36 mt-20 w-11/12 h-3/4"/>
        <div className="flex-col">
        <p className="tracking-wide text-gray-100 text-4xl font-medium font-mono">About Me</p>
        <p className="text-gray-100">Nice to meet you! My name is Meraz. I am an aspiring data analyst based in NYC. I have experience making dynamic analytic dashboards on Excel, using MySQL to query data, and scraping data from different websites through R and Python. Outside of work, I enjoy exercising and listening to true crime podcasts.</p>
        <p className="text-gray-100 text-3xl font-medium font-mono tracking-wide">Contact Me</p>
        
        <div className="flex space-x-4 m-2">
          <img className="w-1/12 h-2/4" src="/email.png"></img> 
          <img className="w-1/12 h-2/4" src="/linkedin.png"></img>
          <img className="w-1/12 h-2/4" src="/youtube.png"></img>
        </div>
        </div>
      </div>
    );
  }
  
  export default About;