import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Link to="Home">Home</Link> | 
                <Link to="CoursesPage"> Courses</Link> | 
                <Link to="About"> About</Link>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
