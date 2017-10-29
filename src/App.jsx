import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: "December 25, 2017",
            newDeadline: ""
        }
    }

    changeDeadline() {
        this.setState({deadline: this.state.newDeadline})
    }

    render() {
        return (
        <div className="App">
            <div className="App-title">Countdown to: {this.state.deadline}</div>
            <Clock deadline={this.state.deadline}/>            
            <Form inline className="Form">
                <FormControl 
                    className="Deadline-input"
                    placeholder="e.g. December 25, 2017" 
                    onChange={e => this.setState({newDeadline: e.target.value})}
                />
                <Button 
                    bsStyle="primary" 
                    onClick={() => this.changeDeadline()}
                >
                    Submit
                </Button>
            </Form>
        </div>
        );
    }
}

export default App;