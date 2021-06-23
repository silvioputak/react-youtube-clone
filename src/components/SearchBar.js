import React from 'react'

class SearchBar extends React.Component {
    state = {term: ''}

    updateInput = (e) => {
        this.setState({term: e.target.value});
        
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.input(this.state.term);
    }
   

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="">Video Search</label>
                        <input
                        onChange={this.updateInput}
                        type="text"
                        value={this.state.term} 
                        placeholder="Type something.."
                        />
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SearchBar
