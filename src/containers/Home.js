import React, { Fragment } from 'react';

import Banner from '../components/common/Banner';

const Home = () => {
    return(
        <Fragment>
            <div className="row">
                <div className="col-md-12">
                    <Banner />
                </div>
            </div>
            {/* TODO: import and use  Products container show list of products*/}
        </Fragment>

     
    );   
}

export default Home;