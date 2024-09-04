import React, {Component} from 'react';

class NoteApp extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container m-auto">
                <div className="flex flex-col max-w-[50%] min-w-[30%] m-auto min-h-[30vh]">
                    <input type="text" placeholder="Add Note"
                           className="flex border-2 border-cyan-200 rounded p-2 w-[100%] mx-auto mt-36 focus:border-cyan-500 focus:outline-none"/>
                    <ul className="flex flex-row gap-2 my-4">
                        <li className="bg-amber-400 rounded-full hover:cursor-pointer">
                            <button className="w-6"></button>
                        </li>
                        <li className="bg-blue-700 rounded-full hover:cursor-pointer">
                            <button className="w-6"></button>
                        </li>
                    </ul>
                    <ul className="flex flex-row gap-6 justify-end">
                        <li>
                            <button
                                className="fa fa-eraser text-2xl text-purple-500 border-2 border-purple-300 rounded py-1 px-3
                                hover:bg-purple-500 hover:text-white hover:border-purple-500 transition delay-20">
                            </button>
                        </li>
                        <li>
                            <button
                                className="fa fa-plus text-2xl text-emerald-500 border-2 border-emerald-300 rounded py-1 px-3
                                hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition delay-20">
                            </button>
                        </li>
                    </ul>
                    <div className="flex flex-wrap justify-between items-center mt-8">
                        <span className="min-w-[30%] border-2 rounded p-4 text-center mb-6">test</span>
                        <span className="min-w-[30%] border-2 rounded p-4 text-center mb-6">test</span>
                        <span className="min-w-[30%] border-2 rounded p-4 text-center mb-6">test</span>
                        <span className="min-w-[30%] border-2 rounded p-4 text-center mb-6">test</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoteApp;