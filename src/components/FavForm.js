import React, { Component } from 'react'

export class FavForm extends Component {
    render() {
        return (
            <>
                <form onSubmit={e=>this.props.updateFunc(e) }>
                    <label>
                        Name:
                        <input type="text" value={this.props.updatedName} onChange={this.updatedMyName} />
                    </label>
                    <label>
                        Image:
                        <input type="text" value={this.props.updatedImg} onChange={this.updatedMyImg} />
                    </label>
                    <label>
                        Level:
                        <input type="text" value={this.props.updatedLevel} onChange={this.updatedMyLevel} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </>
        )
    }
}

export default FavForm


//need check