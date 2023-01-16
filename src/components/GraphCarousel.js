import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function GraphCarousel(){
    return(
        <div className="w-1/2">
            <Carousel>
            <div>
                <img src="/graph0.png" />
                {/* <p className="legend">Enter Description</p> */}
            </div> 
            <div>
                <img src="/graph1.png" />
                {/* <p className="legend">Enter Description</p> */}
            </div>
            <div>
                <img src="/graph2.png" />
                {/* <p className="legend">Enter Description</p> */}
            </div>
            <div>
                <img src="/graph3.png" />
                {/* <p className="legend">Enter Description</p> */}
            </div> 
            <div>
                <img src="/graph4.png" />
                {/* <p className="legend">Enter Description</p> */}
            </div>  
            <div>
                <img src="/graph5.png" />
                {/* <p className="legend">Enter Description</p> */}
            </div> 
            <div>
                <img src="/graph6.png" />
                {/* <p className="legend">Enter Description</p> */}
            </div> 
            <div>
                <img src="/graph7.png" />
                {/* <p className="legend">Enter Description</p> */}
            </div> 
            </Carousel> 
        </div>
    );
}

export default GraphCarousel;