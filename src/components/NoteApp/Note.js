import React, {Component} from 'react';

class Note extends Component {
    constructor(props) {
        super(props);

    }

    removeHandler(id){
        this.props.removeHandler(id)
    }

    render() {
        return (
            <>
                <span onClick={this.removeHandler.bind(this, this.props.id)}
                      className={`min-w-[30%] ${this.props.color} border-2 rounded p-4 text-center mb-6 cursor-pointer`}>
                    {this.props.title}
                </span>
            </>
        );
    }
}

export default Note;