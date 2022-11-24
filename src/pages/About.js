function About() {
    return (
      <div className=" h-full flex bg-gray-900">
        <img src="/aboutme.jpg" className="border-2 ml-36 mt-20 w-11/12 h-3/4"/>
        <div className="flex-col">
        <p>About Me</p>
        <p>Nice to meet you! My name is Meraz. I am an aspiring data analyst based in NYC. I have experience making dynamic analytic dashboards on Excel, using MySQL to query data, and scraping data from different websites through R and Python. Outside of work, I enjoy exercising and listening to true crime podcasts.</p>
        <p>Contact Me</p>
        </div>
      </div>
    );
  }
  
  export default About;