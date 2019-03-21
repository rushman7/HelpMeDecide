import React from 'react';
import Option from './Option';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: this.props.options
    }
  }

  handleRemoveAll() {
    console.log(this.props.options);
  }

  render() {
    return (
      <div>
        {
          this.props.options.map(
            (option) => <Option key={option} optionText={option} />
          )
        }
      </div>
    )
  }
}


export default Options