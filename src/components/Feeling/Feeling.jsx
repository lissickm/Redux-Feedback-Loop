import { connect } from 'react-redux';
import React, {Component} from 'react';

class Feeling extends Component {

    handleClick = () => {
        this.props.history.push('/understanding');
    }


    render() {

        return(
            <div>
                <h1>How are you feeling today?</h1>
            
            <br />

            <select name="ratings">
                <option value="option1">1 (very stressed)</option>
                <option value="option2">2</option>
                <option value="option3">3 (doing ok)</option>
                <option value="option4" selected>4</option>
                <option value="option5">5 (feeling great!)</option>
            </select>

            <button onClick={this.handleClick}>NEXT</button>

            </div >
        )



    }
}



const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Feeling);