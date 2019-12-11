import React from 'react';
import ReactDOM from 'react-dom';

import Filter from './components/Filter/Filter';

import './index.css';


const ListItem = () => {
    return (
        <li class="p-2 border">
            Take trash out
            <div class="p-2 border">
            <button className="btn btn-primary">
                <i className="fa fa-remove"></i>
            </button>
            <button className="btn btn-warning">
                <i className="fa fa-check"></i>
            </button>
            </div>
        </li>
    );
};

const ListItem1 = () => {
    return (
        <li class="p-2 border">
            pay apartment rent
            <div class="p-2 border">
                <button className="btn btn-primary">
                    <i className="fa fa-remove"></i>
                </button>
                <button className="btn btn-warning">
                    <i className="fa fa-check"></i>
                </button>
            </div>
        </li>
    );
};

const List = () => {
    return (
        <div>
            
            <ul>
                <ListItem />
                <ListItem1 />
                <ListItem />
                <ListItem1 />
            </ul>
        </div>
    );
};

const AddItem = () => {
    return (
        <div class="p-2 border">
            
            <textarea></textarea>
            <button className="btn btn-info">Add</button>
        </div>
    );
};

const App = () => {
    return (
        <div>
            
            <Filter />
            <List />
            <AddItem />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);