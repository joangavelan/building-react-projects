import React from 'react'

class RanNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ranNum: 0,
      min: '',
      max: ''
    }
    //binding
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }

  getRandomNumber (min, max) {
    min = parseFloat(min);
    max = parseFloat(max);

    if(min >= max) {
      alert ('Invalid min-max inputs')
      return;
    }

    const output = Math.floor(Math.random() * (max - min + 1) + min);
    return output.toString();
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({[name]: value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const min = this.state.min;
    const max = this.state.max;

    if(min && max) {
      const num = this.getRandomNumber(min, max);
      if(num) this.setState({ranNum: num});
    }
    return;
  }
 
  render() {
    return (
      <div>
        <div>Random Number: {this.state.ranNum}</div>
        <form onSubmit={this.handleSubmit}>
          {/* min */}
          <label style={styles}>
            Min:
            <input
              type="number"
              name="min" 
              value={this.state.min}
              onChange={this.handleChange}/>
          </label>
          {/* max */}
          <label style={styles}>
            Max:
            <input
              type="number"
              name="max" 
              value={this.state.max}
              onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Get random number"></input>
        </form>
      </div>
    );
  }
}

export default RanNumber


//styles
const styles = {
  display: 'block',
  margin: '10px 0'
}