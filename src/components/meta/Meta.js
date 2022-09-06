import React from 'react';
import MetaTags from 'react-meta-tags';

function Meta() {
    return (
        <div>
              <div className="wrapper">
          <MetaTags>
            <title>this is Blog website</title>
            
          </MetaTags>
          <div className="content"> Some Content </div>
        </div>
            
        </div>
    );
}

export default Meta;