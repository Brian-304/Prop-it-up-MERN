import React, {Component} from 'react';

class PersonCard extends Component{
    render(){
        const {firstName, lastName, age, hairColor} = this.props;
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                Age: {age}
                <br />
                Hair Color:{hairColor}
            </div>
        );
    }
}

export default PersonCard;