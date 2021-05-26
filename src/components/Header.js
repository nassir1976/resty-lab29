import React from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component {

  render() {
    return (
      <header>
        
        <h1>RESTy</h1>
        <nav>
          <ul>
            <li className="test"><Link to="/">Home</Link></li>
            <li><Link to="/history">History</Link></li>
            <li><Link to="/help">Help</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
