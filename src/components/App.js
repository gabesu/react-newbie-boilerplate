import React, {Component} from 'react';
import ToDo from './ToDo';

class App extends Component{
    render(){
        return(
            <div className="container">
                <div className="card">
                    <ToDo/>
                </div>
            </div>
        )
    }
}

export default App;