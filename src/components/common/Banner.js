import React from 'react';

const styles = {
    image: {
        width: "100%"
    }
}
const Banner = () => {
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="../../images/banner1.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="../../images/banner2.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="../../images/banner3.jpg" alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>

            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
        </div>
    );
}

export default Banner;

{/* 
        <div>
            <img src="../../images/banner2.jpg" style={styles.image}  alt="Banner"/>
        </div>
        */}
