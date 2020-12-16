// create the function Hello
// props => when components dont change, use props
// const Hello = (props) => {
//   return <div> Hello, { props.name } </div>;
// };

class Hello extends Component {
  constructor(props) {
    // use super dont break the code
    super(props);
    // use state because components will update
    this.state = {
      clicked: false,
      counter: 0
    };
  }
  // create a function for the onClick

  handleClick = () => {
    // console.log('clicked');
    // change the state
    // we cant use this to toggle
    // this.state.clicked = !this.state.clicked;
    // we have to use setState
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    });
  }

  render() {
    // build and return html
    return (
      // if clicked init the class clicked, if not null
      <div className={this.state.clicked ? 'clicked' : null}
        onClick={this.handleClick}>
        Hello {this.props.name} {this.state.counter}
      </div>
    );
  }
}
