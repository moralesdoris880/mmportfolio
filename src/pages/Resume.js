function Resume() {
    return (
      <div className='flex items-center bg-gray-900'>
        <img src='resumeimg.png' className='h-[690px] ml-80 mr-10 mb-20 mt-4' alt="meraz_resume" />
        <a href='Meraz_Mamun_Resume.pdf' download ><button className='ml-50 h-14 w-40 bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-100 text-2xl tracking-wide font-mono'>Download</button></a>
      </div>
    ); 
  }
  
  export default Resume;