function About() {
    return (
      <div className="h-full flex bg-gray-900">
        <img src="/casualmeraz.jpg" className="border-2 ml-36 mt-20 w-11/12 h-3/4" alt="meraz mamun smiling"/>
        <div className="flex-col p-8">
        <p className="tracking-wide text-gray-100 text-4xl font-medium font-mono pt-12 pb-4 text-sky-300">About Me</p>
        <p className="text-gray-100 whitespace-normal text-lg tracking-wide leading-loose">Nice to meet you! My name is Meraz. I am an aspiring data analyst based in NYC. I have experience making dynamic analytic dashboards on Excel, using MySQL to query data, and scraping data from different websites through R and Python. Outside of work, I enjoy exercising and listening to true crime podcasts.</p>
        
        <p className="text-gray-100 text-4xl font-medium font-mono tracking-wide pt-4 text-sky-300">Skills</p>
        <ol className="list-disc text-gray-100 ml-4 whitespace-normal text-lg tracking-wide leading-loose">
          <li>Python</li>
          <li>R Language</li>
          <li>Microsoft Excel {"("}VBA & Pivot Tables{")"}</li>
          <li>MySQL</li>
          <li>Tableau</li>
        </ol>
        <div className="flex">
          <div className="m-2 mr-10">
            <p className="text-gray-100 text-4xl font-medium font-mono tracking-wide pt-4 text-sky-300">Contact Me</p>
            <p className="text-gray-100 whitespace-normal text-lg tracking-wide leading-loose">mmamun3739@gmail.com</p>
          </div>
          <div className="flex-col m-2">
            <p className="text-gray-100 text-4xl font-medium font-mono tracking-wide pt-4 text-sky-300">Socials</p>
            <div className="flex space-x-4 pt-4">
              <a  className="w-2/12 h-2/4" href="mailto: mmamun3739@gmail.com"><img src="/email.png" alt="email logo"/></a>
              <a  className="w-2/12 h-2/4" href="https://www.linkedin.com/in/merazmamun/"><img src="/linkedin.png" alt="linkedin logo"/></a>
              <a  className="w-2/12 h-2/4" href="https://github.com/merazmamun"><img src="/gitlogo.png" alt="email logo"/></a>
              <a className="w-2/12 h-2/4" href="https://www.youtube.com/@merazmamun-analytics2158"><img src="/youtube.png" alt="youtube logo"/></a>
            </div>
          </div>
        </div>
        
        
        </div>
      </div>
    );
  }
  
  export default About;