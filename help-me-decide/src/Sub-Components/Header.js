import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="main-header">
        <div className="container">
          <h1 className="header-title">{this.props.title}</h1>
          <h2 className="header-subtitle">{this.props.subtitle}</h2>
        </div>
      </div>
    )
  }
}

export default Header;