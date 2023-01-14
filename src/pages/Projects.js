import React, { useState } from "react";

function Projects() {



    return (
      <div className="p-8 bg-gray-900 text-gray-100">
        <h1 className="text-4xl text-sky-300 pb-12">Data Analysis</h1>

        <div className="border-4 w-3/6 flex">
          <img src="/cycling.png" className="h-44 p-7"></img>
          <a href="https://www.flaticon.com/free-icons/cycling" title="cycling icons" className="hidden">Cycling icons created by Freepik - Flaticon</a>
          <div className="p-7">
            <h1 className="text-sky-300 text-3xl">Cyclistic Case Study</h1>
            <p>The goal of this case is to analyze how casual riders and annual members use Cyclistic bikes differently and apply this analysis to convert more casual riders into annual members.</p>
            <a href="/cyclistic_case">
              <button className="mt-5 h-10 w-40 bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-100 text-l tracking-wide font-mono">
                More Info
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Projects;