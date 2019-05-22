import React, {Component} from 'react';
import '../style/App.css';
import Sidebar from '../components/Sidebar'
import Todo from '../components/Todo'
import Comments from '../components/Comments'

class App extends Component {
    render() {
        return (
            <div className='main-wrapper'>
                <Sidebar/>
                <Todo/>
                <Comments/>
            </div>
        );
    }
}

export default App;
