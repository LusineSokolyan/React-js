import React from 'react';

import './Filter.css';

const Filter = () => {
    return (
        <div class="p-2 border">
            <h1>TodoList</h1>
            <input type="text" />
            <button className="btn btn-info">Search</button>
            <hr/>
        
        </div>
    );
};

export default Filter;