import React from 'react';

class Switch extends React.Component {
  state = {
    disabled: false,
  };

  toggle = () => {
    const { disabled } = this.state;
    this.setState({
      disabled: !disabled,
    });
  };

  render() {
    const { disabled } = this.state;
    return (
      <div style={{ margin: 20 }}>
        <Switch
          checkedChildren="开"
          unCheckedChildren="关"
        />
        <div style={{ marginTop: 20 }}>
          <button type="button" onClick={this.toggle}>
            toggle disabled
          </button>
        </div>
      </div>
    );
  }
}
export default Switch;