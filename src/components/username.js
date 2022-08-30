import React from 'react';

// Takes text input for username
export default class Username extends React.Component {
    render() {
        return (
        <div> 
            <form>
            <label>
                Username:
                <input type="text" name="name" />
            </label>
            </form>
        </div>
        )
    }
}