import React, { useState } from "react";

function Project2(){
const [display0,setDisplay0]=useState(false);
const [display1,setDisplay1]=useState(false);
const [display2,setDisplay2]=useState(false);
const [display3,setDisplay3]=useState(false);
const [display4,setDisplay4]=useState(false);
const [display5,setDisplay5]=useState(false);

    return(
        <div className="text-gray-100 p-8 bg-gray-900">
            <div>
            <div className="flex">
              <img src="/coins.png" className="h-36 p-7" alt="bike icon"></img>
              <a href="https://www.flaticon.com/free-icons/cycling" title="cycling icons" className="hidden">Coins icons created by Freepik - Flaticon</a>  
              <h1 className="text-6xl text-sky-300 pb-10 mt-10">Fortune 500 Case Study</h1>
            </div>
            

            <div className="flex">
              <div className="mx-4">
                <h1 className="text-sky-300 text-2xl">Objective</h1>
                <ol className="list-disc">
                  <li>Create a barchart race of the top 10 Fortune 500 companies from 1955 to 2022, using Python, MySQL, and Tableau.</li>
                </ol>
              </div>
            </div>

            <div>
              <h1 className="text-sky-300 text-2xl ml-4 mt-4">Tableau Dashboards</h1>
              <ol className="list-disc ml-4 mb-2">
                <li className="hover:text-sky-300"><a href="https://public.tableau.com/app/profile/meraz.mamun/viz/shared/QM4HHCGS3">Dashboard 1</a></li>
                <li className="hover:text-sky-300"><a href="https://public.tableau.com/app/profile/meraz.mamun/viz/Fortune500Ranking/Fortune_500_Bar_Chart_Race_Animation">Dashboard 2</a></li>
              </ol>
              <img className="mb-6" src="/tableaugraph-1.png" alt="Example of the tableau graph"/>
            </div>

            <div className="border-4 border-sky-300 flex p-4 mb-6">
              <button className="pl-2 hover:text-sky-300" onClick={()=>setDisplay0(!display0)}>Ask Phase +</button>
              <div className="ml-8 mt-4" style={{display: display0? "block":"none"}}>
                <ol className="list-decimal">
                  <li>How has the ranking of the top 10 Fortune 500 companies changed from 1955 to 2022?</li>
                </ol>
              </div>
            </div>

            <div className="border-4 border-sky-300 flex p-4 mb-6">
              <button className="pl-2 hover:text-sky-300" onClick={()=>setDisplay1(!display1)}>Prepare Phase +</button>
              <div className="ml-8" style={{display: display1? "block":"none"}}>
              <ol className="list-decimal">
                  <li>Find the website that contains all the Fortune 500 data since 1955.</li>
                  <li>Website Links:</li>
                  <ol className="list-disc">
                    <li>https://money.cnn.com/magazines/fortune/fortune500_archive/full/1955/1.html</li>
                    <li>https://money.cnn.com/magazines/fortune/fortune500/2006/full_list/</li>
                    <li>https://money.cnn.com/magazines/fortune/fortune500/2007/full_list/</li>
                    <li>https://money.cnn.com/magazines/fortune/fortune500/2008/full_list/</li>
                    <li>https://money.cnn.com/magazines/fortune/fortune500/2009/full_list/</li>
                    <li>https://money.cnn.com/magazines/fortune/fortune500/2010/full_list/</li>
                    <li>https://money.cnn.com/magazines/fortune/fortune500/2011/full_list/</li>
                    <li>https://money.cnn.com/magazines/fortune/fortune500/2012/full_list/</li>
                    <li>https://fortune.com/ranking/fortune500/2013/search/</li>
                    <li>https://fortune.com/ranking/fortune500/2014/search/</li>
                    <li>https://fortune.com/ranking/fortune500/2015/search/</li>
                    <li>https://fortune.com/ranking/fortune500/2016/search/</li>
                    <li>https://fortune.com/ranking/fortune500/2017/search/</li>
                    <li>https://fortune.com/ranking/fortune500/2018/search/</li>
                    <li>https://fortune.com/ranking/fortune500/2019/search/</li>
                    <li>https://fortune.com/ranking/fortune500/2020/search/</li>
                    <li>https://fortune.com/ranking/fortune500/2021/search/</li>
                    <li>https://fortune.com/ranking/fortune500/2022/search/</li>
                  </ol>
                  <li>Use Python’s pandas library to extract the data from each website for each year. Record the code under the file “fortune_python_project.py”, using Python Spyder. Create one function to extract the data from 1955 to 2005. Create another function to extract data from 2006 to 2012. The tables from 1955 to 2012 are HTML tables. The tables from 2013 to 2022 are javascript tables. So, I had to download the JSON file for each year from 2013 to 2022. Finally, create a function that can extract the data from each JSON file with the help of the json library. Use the three functions to combine all the relevant data under a single dataframe, stored in the variable “fortune_500_final”.</li>
                  <li>Transfer the final dataframe to a MySQL database with the schema name “fortune_500” and table name “fortune”, using sqlalchemy and pymysql libraries.</li>
                </ol>
              </div>
            </div>
            
            <div className="border-4 border-sky-300 flex p-4 mb-6">
              <button  className="pl-2 hover:text-sky-300" onClick={()=>setDisplay2(!display2)}>Process Phase +</button>
              <div className="ml-8" style={{display: display2? "block":"none"}}>
                <ol className="list-decimal">
                  <li>RClean the data in the “fortune_500” schema, using MySQL.</li>
                  <li>Create a CTE labeled “fortune_ranking” to assign a row number to each row as rank and label the column name as “fortune_rank”.</li>
                  <li>Select only distinct rows to exclude any duplicate rows.</li>
                  <li>From the top 10 rankings for each year, standardize each company’s name, using CASE statements. For example, every instance of “General Motors (GM)” or “General Motors Company” will become “General Motors”.</li>
                </ol>
              </div>
            </div>
            
            <div className="border-4 border-sky-300 flex p-4 mb-6">
              <button className="pl-2 hover:text-sky-300" onClick={()=>setDisplay3(!display3)}>Analyze Phase +</button>
              <div className="ml-8" style={{display: display3? "block":"none"}}>
                <ol className="list-decimal">
                  <li>Return all rows where “fortune_rank” is less than or equal to 10.</li>
                  <li>How has the ranking of each company changed over the past 67 years?</li>            
                </ol>
              </div>
            </div>
            
            <div className="border-4 border-sky-300 flex p-4 mb-6">
              <button  className="pl-2 hover:text-sky-300" onClick={()=>setDisplay4(!display4)}>Share Phase +</button>
              <div className="ml-8" style={{display: display4? "block":"none"}}>
                <ol className="list-decimal">
                  <li>Use Tableau Public to visually represent the data.</li>
                  <li>The main focus of this visualization will be to create an animated bar chart race, depicting how the top 10 ranking has changed over time by revenue.</li>
                  <li>Use the excel file, “fortune_500_alternate_data_storage” to help support in making the visualization.</li>
                  <li>I followed this guide to help me make the visualization: <a className="text-sky-300" href="https://towardsdatascience.com/creating-an-animated-bar-chart-race-with-tableau-6a7839f703af">https://towardsdatascience.com/creating-an-animated-bar-chart-race-with-tableau-6a7839f703af</a></li> 
                </ol>
              </div>
            </div>

            <div className="border-4 border-sky-300 flex p-4 mb-6">
              <button className="pl-2 hover:text-sky-300" onClick={()=>setDisplay5(!display5)}>Act Phase +</button>
              <div className="ml-8" style={{display: display5? "block":"none"}}>
                <ol className="list-decimal">
                  <li>The rankings from 1955 drastically changed when compared to 2022.The only company that still appears in both 1955 and 2022 rankings is Exxon Mobil.</li>
                  <li>In 1955, the top 10 list was filled with industrial companies. Today, at least a third of that ranking is filled with tech.</li>
                  <li>For 2022, Wal-Mart sits at number 1, surpassing $572 billion in revenues.</li>
                  <li>In 1955, the combined revenue of the top 10 companies was ~ $33 billion. Today, that figure is 10 times more at ~ $3.26 trillion.</li>
                </ol>
              </div>
            </div>
            
        </div>
            
        </div>
    );
}

export default Project2;