class Parent extends Component {
  constructor() {
    super()
    this.state = {
      color: getRandomColor()
    }
  }

  changeColor = (newChildColor) => {
    this.setState({
      color: getRandomColor(),
      childrenColor: newChildColor
    })
  } 
  
  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child handleColorChange={this.changeColor}/>
        <Child handleColorChange={this.changeColor}/>
      </div>
    )
  } 
}