'use strict';

const e = React.createElement;

class TaosWebHomeTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>
    );
  }
}
const domContainer = document.querySelector('#tao_web_home_title');
ReactDOM.render(e(TaosWebHomeTitle), domContainer);