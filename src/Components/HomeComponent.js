import React from 'react';
import {Link} from 'react-router-dom';
import {Card, CardBody, Button, CardTitle, CardImg} from 'reactstrap';

const HomeComponent = () => 
{
    return(
        <div className="container">
            <div className="row">
                <img id="rotate" src={process.env.PUBLIC_URL+'/assets/welcome.png'} alt="logo"/>
                <Card className="card">
                    <CardTitle> Give an Attempt for the Quiz on General Abbreviations! </CardTitle>
                    <CardBody >
                        <CardImg src={process.env.PUBLIC_URL+'/assets/happy.png'} className="image"/>
                        <Button type="submit" color="warning" className="button"> <Link to="/quiz/questions"> START QUIZ </Link> </Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    );

}

export default HomeComponent;