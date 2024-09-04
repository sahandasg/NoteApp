import React, {Component} from 'react';
import Note from "./Note"
import ColorBox from "./ColorBox";

class NoteApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newNote: "",
            notes: [],
            colors: [{
                id: 1,
                color: "bg-[#C68FE6]"
            }, {
                id: 2,
                color: "bg-[#1230AE]"
            }, {
                id: 3,
                color: "bg-[#16423C]"
            }, {
                id: 4,
                color: "bg-[#48CFCB]"
            }, {
                id: 5,
                color: "bg-[#ED3EF7]"
            }, {
                id: 6,
                color: "bg-[#CDC2A5]"
            }, {
                id: 7,
                color: "bg-[#E85C0D]"
            }, {
                id: 8,
                color: "bg-[#522258]"
            }],
            selectedColor: "",
        }
        this.titleHandler = this.titleHandler.bind(this);
        this.addNote = this.addNote.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.removeNote = this.removeNote.bind(this);
        this.colorSelector = this.colorSelector.bind(this);

    }

    titleHandler(e) {
        let newTitle = e.target.value;
        this.setState({
            newNote: newTitle,
        })
    }

    addNote() {
        if (this.state.newNote) {
            this.setState({
                notes: [...this.state.notes, {
                    id: this.state.notes.length + 1,
                    title: this.state.newNote,
                    color: this.state.selectedColor
                }],
            })
            this.setState({
                newNote: "",
                selectedColor: "",
            })
        }
    }

    clearAll() {
        this.setState({
            notes: []
        })
    }

    removeNote(id) {
        let newNotes = this.state.notes.filter(note => note.id !== id)
        this.setState({
            notes: newNotes
        })
    }

    colorSelector(id) {
        let newColor = this.state.colors.filter(color => color.id === id)
        this.setState({
            selectedColor: newColor[0].color,
        })
    }

    render() {
        return (
            <div className="container m-auto">
                <div className="flex flex-col max-w-[50%] min-w-[30%] m-auto min-h-[30vh]">
                    <input type="text" placeholder="Add Note" onChange={this.titleHandler} value={this.state.newNote}
                           className={`flex border-2 ${this.state.selectedColor} rounded p-2 w-[100%] mx-auto mt-36 focus:border-cyan-500 focus:outline-none`}/>
                    <ul className="flex flex-row gap-2 my-4">
                        {
                            this.state.colors.map(color => (
                                <ColorBox key={color.id} {...color} colorHandler={this.colorSelector}/>
                            ))
                        }
                    </ul>
                    <ul className="flex flex-row gap-6 justify-end">
                        <li>
                            <button
                                onClick={this.clearAll}
                                className="fa fa-eraser text-2xl text-purple-500 border-2 border-purple-300 rounded py-1 px-3
                                hover:bg-purple-500 hover:text-white hover:border-purple-500 transition delay-20">
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={this.addNote}
                                className="fa fa-plus text-2xl text-emerald-500 border-2 border-emerald-300 rounded py-1 px-3
                                hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition delay-20">
                            </button>
                        </li>
                    </ul>
                    <div className="flex flex-wrap justify-between items-center mt-8">
                        {
                            this.state.notes.map(note => (
                                <Note key={note.id} {...note} removeHandler={this.removeNote}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default NoteApp;