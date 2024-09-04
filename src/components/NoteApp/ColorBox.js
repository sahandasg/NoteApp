import React, {Component} from 'react';

class ColorBox extends Component {
    constructor(props) {
        super(props);

    }

    selectColor(id){
        this.props.colorHandler(id)
    }

    render() {
        return (
                <li onClick={this.selectColor.bind(this, this.props.id)} className={`rounded-full ${this.props.color} hover:cursor-pointer`}>
                    <button className="w-6"></button>
                </li>
        );
    }
}

export default ColorBox;