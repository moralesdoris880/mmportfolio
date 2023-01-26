import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function GraphCarousel(){
    return(
        <div className="w-3/4 pl-48">
            <Carousel width={1000}>
            <div>
                <img src="/page1.png" alt="first page presentation"/>
                {/* <p className="legend">Enter Description</p> */}
            </div>
            <div>
                <img src="/page2.png" alt="second page presentation"/>
                {/* <p className="legend">Enter Description</p> */}
            </div>
            <div>
                <img src="/page3.png" alt="third page presentation"/>
                {/* <p className="legend">Enter Description</p> */}
            </div>
            <div>
                <img src="/page4.png" alt="fourth page presentation"/>
                {/* <p className="legend">Enter Description</p> */}
            </div>
            <div>
                <img src="/page5.png" alt="fifth page presentation"/>
                {/* <p className="legend">Enter Description</p> */}
            </div>
            <div>
                <img src="/page6.png" alt="six page presentation"/>
                {/* <p className="legend">Enter Description</p> */}
            </div>
            <div>
                <img src="/graph0.png" alt="graph"/>
                {/* <p className="legend">Enter Description</p> */}
            </div> 
            <div>
                <img src="/graph1.png" alt="graph"/>
                {/* <p className="legend">Enter Description</p> */}
            </div>
            <div>
                <img src="/graph2.png" alt="graph"/>
                {/* <p className="legend">Enter Description</p> */}
            </div>
            <div>
                <img src="/graph3.png" alt="graph"/>
                {/* <p className="legend">Enter Description</p> */}
            </div> 
            <div>
                <img src="/graph4.png" alt="graph"/>
                {/* <p className="legend">Enter Description</p> */}
            </div>  
            <div>
                <img src="/graph5.png" alt="graph"/>
                {/* <p className="legend">Enter Description</p> */}
            </div> 
            <div>
                <img src="/graph6.png" alt="graph"/>
                {/* <p className="legend">Enter Description</p> */}
            </div> 
            <div>
                <img src="/graph7.png" alt="graph"/>
                {/* <p className="legend">Enter Description</p> */}
            </div> 
            <div>
                <img src="/page7.png" alt="seventh page presentation"/>
                {/* <p className="legend">Enter Description</p> */}
            </div>
            <div>
                <img src="/page8.png" alt="eighth page presentation"/>
                {/* <p className="legend">Enter Description</p> */}
            </div>
            <div>
                <img src="/page9.png" alt="ninth page presentation"/>
                {/* <p className="legend">Enter Description</p> */}
            </div>
            </Carousel> 
        </div>
    );
}

export default GraphCarousel;