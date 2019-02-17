import React from 'react';
import {Link} from 'react-router-dom';

function Logo({ collapsed }) {
    return (
      <Link className="logo" to="/">
        {collapsed ? (
          <React.Fragment>
            <span>H</span>
            <span>I</span>
            <span>S</span>
          </React.Fragment>
        ) : (
            <React.Fragment>
              <span>H</span>
              <span>I</span>
              <span>S</span>
              <span>系</span>
              <span>统</span>
            </React.Fragment>
          )}
      </Link>
    );
  }
  export default Logo