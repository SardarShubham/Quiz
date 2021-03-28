import React, {Component} from 'react';
import {Card, CardImg, CardText, CardImgOverlay} from 'reactstrap';

class Menu extends Component
{
    render(){
        return(
            <Card>
                <CardImg src = 'logo512.png'/>
                    <CardImgOverlay>
                        <CardText>Text it <hr/>is</CardText>
                    </CardImgOverlay>
            </Card>
        )
    }
}

export default Menu;