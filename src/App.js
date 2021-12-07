import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { add_task } from "./JS_Components/Actions/action";
import { connect } from "react-redux";
import { remove_task } from "./JS_Components/Actions/action";
import { edit_task, clear_task } from "./JS_Components/Actions/action";

class App extends React.Component {
  state = {
    text: "",
    date: new Date(),
    edit: false,
    id: "",
    editText: "",
    editDate: "",
    clear: false,
  };

  renderTheTasks = (x) => {
    const { tasks } = this.props;
    if (this.state.edit === false) {
      return (
        <ul className="list-group">
          {tasks.map((each) => {
            return (
              <li key={each.id} className="list-group-item">
                <div>{each.text}</div>
                <div>{each.date}</div>
                <div>
                  <button
                    type="button"
                    className=" btn btn-danger"
                    onClick={() => {
                      this.props.remove_task(each.id);
                    }}
                  >
                    x
                  </button>
                  <button
                    type="button"
                    className=" btn btn-primary"
                    onClick={() => {
                      this.setState({ edit: true, id: each.id });
                    }}
                  >
                    edit
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <div>
          <input
            className="form-control"
            type="text"
            placeholder="enter task required"
            onChange={(e) => {
              return this.setState({ editText: e.target.value });
            }}
          />
          <input
            className="form-control"
            type="datetime-local"
            onChange={(e) => {
              return this.setState({ editDate: e.target.value });
            }}
          />

          <div className="d-grid">
            <button
              className="btn btn-primary"
              onClick={() => {
                this.props.edit_task(this.state, x);
                this.setState({ edit: false });
              }}
            >
              OK
            </button>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="App">
        <div className="reminder-title">
          <h2>Daily Tasks</h2>
        </div>

        <input
          className="form-control"
          type="text"
          placeholder="enter task required"
          value={this.state.text}
          onChange={(e) => {
            return this.setState({ text: e.target.value });
          }}
        />
        <input
          className="form-control"
          type="datetime-local"
          value={this.state.date}
          onChange={(e) => {
            return this.setState({ date: e.target.value });
          }}
        />
        <div className="d-grid">
          <button
            className="btn btn-primary"
            onClick={() => {
              if (this.state.text !== "") {
                if (this.state.date !== "") {
                  this.props.add_task(this.state);
                }
              }
              this.setState({ text: "", date: "", clear: false });
            }}
          >
            Add Task
          </button>
        </div>
        <div>{this.renderTheTasks(this.state.id)}</div>

        <div className="d-grid">
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.clear_task();
              this.setState({ clear: true });
            }}
          >
            Clear Tasks
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state,
  };
}

/* function mapDispatchToProps(dispatch) {
  return {
    add_reminder: () => dispatch(add_reminder()),
  };
} */
export default connect(mapStateToProps, {
  add_task,
  remove_task,
  edit_task,
  clear_task,
})(App);
