import React, { Component } from "react";
class QuestionCard extends Component {
  state = {
    isClicked: false,
    correctIndex: -1,
    clickedAt: -1,
    activeQuestionNumber: -1,
    verdict: [-1, -1, -1, -1, -1, -1],
    checked: [-1, -1, -1, -1, -1, -1],
    score: 0,
  };

  handleClick = (option, index) => {
    const verdict = this.state.verdict;
    const checked = this.state.checked;
    let score = this.state.score;
    if (this.state.isClicked === true) {
    } else if (option === this.props.question.correct_option) {
      verdict[this.props.questionNumber] = 1;
      checked[this.props.questionNumber] = index;
      score += 1;
      this.setState({
        correctIndex: index,
        isClicked: true,
        clickedAt: index,
        verdict,
        checked,
        score,
      });
    } else {
      verdict[this.props.questionNumber] = 0;
      checked[this.props.questionNumber] = index;
      this.setState({
        isClicked: true,
        clickedAt: index,
        verdict,
        checked,
        score,
      });
    }
  };

  render() {
    if (this.state.activeQuestionNumber !== this.props.questionNumber) {
      const checked = this.state.checked;
      if (this.state.verdict[this.props.questionNumber] === 0) {
        this.setState({
          isClicked: true,
          correctIndex: -1,
          clickedAt: checked[this.props.questionNumber],
          activeQuestionNumber: this.props.questionNumber,
        });
      } else if (this.state.verdict[this.props.questionNumber] === 1) {
        this.setState({
          correctIndex: checked[this.props.questionNumber],
          isClicked: true,
          clickedAt: checked[this.props.questionNumber],
          activeQuestionNumber: this.props.questionNumber,
        });
      } else {
        this.setState({
          isClicked: false,
          correctIndex: -1,
          clickedAt: -1,
          activeQuestionNumber: this.props.questionNumber,
        });
      }
    }
    console.log(this.state);
    const style = {
      width: "28rem",
      height: "28rem",
      margin: "0 auto 0",
      padding: "2.5%",
    };

    return (
      <React.Fragment>
        <h2>
          <span
            className="badge badge-primary "
            style={{ margin: "80px 0 0 37%" }}
          >
            Score : {this.state.score}
          </span>
        </h2>
        <div className="card" style={style}>
          <div className="card-body">
            <h2 className="card-title">
              Question {this.props.questionNumber + 1}
            </h2>
            <p className="card-text font-weight-bold">
              {this.props.question.question}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            {this.props.question.options.map((option, index) => (
              <li
                className={this.getClasses(index)}
                key={index}
                onClick={() => {
                  this.handleClick(option, index);
                }}
              >
                {index + 1}) {option}
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }

  getClasses(index) {
    let classes = "list-group-item";
    if (index !== this.state.clickedAt) {
      return classes;
    }

    if (this.state.isClicked === true && index === this.state.correctIndex)
      classes += " text-success font-weight-bold";
    else if (this.state.isClicked === true && index !== this.state.correctIndex)
      classes += " text-danger font-weight-bold";
    console.log("getClasses called..");
    return classes;
  }
}

export default QuestionCard;
