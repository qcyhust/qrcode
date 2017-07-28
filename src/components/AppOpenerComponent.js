'use strict';

import React from 'react';
import fakePro from '@tencent/fake-protocol';

require('styles//AppOpener.css');

class AppOpenerComponent extends React.Component {
  componentDidMount() {
    fakePro.call('tnow://openpage/web', {
	   url: 'https://now.qq.com/h5/simple/index.html?from=6&_wv=16778245&roomid='
    });
  }
  render() {
    return (
      <div className="appopener-component">

      </div>
    );
  }
}

AppOpenerComponent.displayName = 'AppOpenerComponent';

// Uncomment properties you need
// AppOpenerComponent.propTypes = {};
// AppOpenerComponent.defaultProps = {};

export default AppOpenerComponent;
