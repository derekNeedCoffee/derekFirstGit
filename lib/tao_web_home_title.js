'use strict';

const e = React.createElement;

class TaosWebHomeTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    } else {
      return e(
        'button',
        { onClick: () => this.setState({ liked: true }) },
        'Like'
      );
    }
  }
}
const domContainer = document.querySelector("#tao_web_home_title");
ReactDOM.render(<h1>Hello, world!</h1>, domContainer);
