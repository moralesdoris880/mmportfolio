import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

function Resume() {
    return (
      <div className='flex items-center bg-gray-900'>
        <Document file="resume.pdf" className="scale-75 ml-60">
          <Page pageNumber={1} />
        </Document>
        <button className='ml-50 h-14 w-40 bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-100 text-2xl tracking-wide font-mono'>Download</button>
      </div>
    ); 
  }
  
  export default Resume;