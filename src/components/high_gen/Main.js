import '../../App.css';
import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";

import NavMenu from './fGround_comp/NavMenu';
import Chat from './fGround_comp/Chat';
import Points from './fGround_comp/Points';
import Notification from './fGround_comp/Notification';

import Task from '../low_gen/Task';
import Info from '../low_gen/Info';


class Main extends React.Component {


  handler = () => {
    //this.props.sendGet("marker/");
    //this.props.sendGet("contest/"); 
    //this.props.sendGet("task/");
    //this.props.sendGet("notification/"); 
    //this.props.sendGet("answer/");
  }
  componentDidMount() {
    setTimeout(this.handler, 5000);
  }

  render() {

    let tasks= this.props.state.tasks.data;
    let routeArray = tasks.map(
      (el) =>
        el.task.task_type === 1 ?
          <Route
            exact path={'/0/task/' + el.id}
            render={() => <Task title={el.task.title} text={el.task.text} state={this.props.state} />} />
          : <Route
            exact path={'/0/info/' + el.id}
            render={() => <Info title={el.task.title} text={el.task.text} />} />
    );
    return (
      <div>
        <BrowserRouter>
          <NavMenu state={this.props.state} />
          <Chat state={this.props.state}/>
          <Notification />
          <div className="content main">
            <Points />
            {routeArray}

            <Route path='/0/task' render={() => {}} />
            <Route exact path='/0/info' component={Info} />
          </div>
        </BrowserRouter >
      </div>
    );
  }
}

export default Main;