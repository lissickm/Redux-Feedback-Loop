import { connect } from 'react-redux';
import React, {Component} from 'react';

class Feeling extends Component {

    state = {
        feelingVal: ''
    }
    
    handleChange = (event) => {
        this.setState({
            feelingVal: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({type: 'FEELING', payload: this.state.feelingVal});
        this.props.history.push('/understanding');
    }


    render() {

        console.log(this.state);
        

        return(
            <div>
                <h1>How are you feeling today?</h1>
            
            <br />

            <select name="ratings" onChange={this.handleChange}>
                <option disabled selected value> -- select an option -- </option>
                <option value="1">1 (very stressed)</option>
                <option value="2">2</option>
                <option value="3">3 (doing ok)</option>
                <option value="4">4</option>
                <option value="5">5 (feeling great!)</option>
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