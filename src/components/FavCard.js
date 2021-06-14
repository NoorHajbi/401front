import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'
export class DigimonsCard extends Component {
    render() {
        return (
            <div> 
                <Card style={{ width: '18rem' }} key={this.props.index}> 
                    <Card.Img variant="top" src= {this.props.digimons.img} />
                    <Card.Body>
                        <Card.Title>{this.props.digimons.name}</Card.Title>
                        <Card.Text>
                        {this.props.digimons.level}
                        </Card.Text>
                        <Button variant="primary"  onClick={() => this.props.addToFav(this.props.update)}>Update</Button>
                        <Button variant="primary"  onClick={() => this.props.addToFav(this.props.delete)}>Delete</Button>

                    </Card.Body>
                </Card>

            </div>
        )
    }
}

export default DigimonsCard
//key = index
