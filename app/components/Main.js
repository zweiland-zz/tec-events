import React from 'react'

const Main = React.createClass({
  render () {
    return (
      <div className='main-container'>
        {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
      </div>
    )
  }
});

export default Main
