import React, { Component } from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import { getQuestions } from "../../Questions";
class App extends Component {
  state = {
    questions: getQuestions(),
    start: false,
    activeIndex: 0,
  };

  handlePlay = () => {
    this.setState({ start: !this.state.start });
  };

  showNext = () => {
    let activeIndex = this.state.activeIndex;
    if (activeIndex !== this.state.questions.length - 1) {
      activeIndex++;
    }
    this.setState({
      activeIndex,
    });
  };
  makeNewGame = () => {
    this.setState({ start: false, activeIndex: 0 });
  };
  showPrev = () => {
    let activeIndex = this.state.activeIndex;
    if (activeIndex !== 0) {
      activeIndex--;
    }
    this.setState({
      activeIndex,
    });
  };
  render() {
    const style = {
      width: "28rem",
      height: "18rem",
      margin: "200px auto",
      padding: "2.5%",
    };

    if (this.state.start === false) {
      return (
        <div className="card text-center" style={style}>
          <div className="card-body">
            <h1 className="card-title text-info">Quiz Game</h1>
            <h3 className="card-text">Test Your Knowledge...</h3>
            <button
              className="btn btn-primary"
              onClick={() => this.handlePlay()}
            >
              Play Now!
            </button>
          </div>
        </div>
      );
    }
    return (
      <React.Fragment>
        <QuestionCard
          question={this.state.questions[this.state.activeIndex]}
          states={{ isClicked: false, correctIndex: -1, clickedAt: -1 }}
          questionNumber={this.state.activeIndex}
        />
        <button
          className="btn btn-info"
          onClick={this.showPrev}
          style={{ margin: "10px 0 0 37%" }}
        >
          Back
        </button>
        <button
          className="btn btn-info"
          onClick={this.makeNewGame}
          style={{ margin: "10px 0 0 5%" }}
        >
          New Game
        </button>
        <button
          className="btn btn-info"
          onClick={this.showNext}
          style={{ margin: "10px 0 0 6.5%" }}
        >
          Next
        </button>
      </React.Fragment>
    );
  }
}

export default App;
