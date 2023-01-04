function About() {
    return (
      <div className="h-full flex bg-gray-900">
        <img src="/aboutme.jpg" className="border-2 ml-36 mt-20 w-11/12 h-3/4" alt="picture of meraz mamun"/>
        <div className="flex-col p-8">
        <p className="tracking-wide text-gray-100 text-4xl font-medium font-mono pt-12 pb-4 text-sky-300">About Me</p>
        <p className="text-gray-100 whitespace-normal text-lg tracking-wide leading-loose">Nice to meet you! My name is Meraz. I am an aspiring data analyst based in NYC. I have experience making dynamic analytic dashboards on Excel, using MySQL to query data, and scraping data from different websites through R and Python. Outside of work, I enjoy exercising and listening to true crime podcasts.</p>
        <p className="text-gray-100 text-4xl font-medium font-mono tracking-wide pt-4 text-sky-300">Contact Me</p>
        
        <div className="flex space-x-4 m-2 pt-4">
          <a  className="w-1/12 h-2/4" href="mailto: abc@example.com"><img src="/email.png" alt="email logo"/></a>
          <a  className="w-1/12 h-2/4" href="https://www.linkedin.com/in/merazmamun/"><img src="/linkedin.png" alt="linkedin logo"/></a>
          <a className="w-1/12 h-2/4" href="https://www.youtube.com/@merazmamun-analytics2158"><img src="/youtube.png" alt="youtube logo"/></a>
        </div>
        </div>
      </div>
    );
  }
  
  export default About;