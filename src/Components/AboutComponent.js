import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle, Col} from 'reactstrap';

const AboutComponent = () => {
    return(
        <div className="container">
            <div className="row">
                <Col md>
                    <Card className='card' >
                    <CardTitle><h2>Website Developed By:</h2></CardTitle>   
                    <CardImg src={process.env.PUBLIC_URL+'/assets/profile.png'} className='image'/>
                    <CardBody>
                    <p>| Shubham Sardar | <br/>| Second year IT Student |<br/>| Pune Institute of Computer Technology</p>
                    <CardText>
                        Thank You for visiting this website.
                        <br/> You can Contact me on: 
                        <div class="row">
                            <div className="col"><a class="fa fa-linkedin-square" href="https://www.linkedin.com/in/shubham-sardar-321a02196"> Linkedin </a></div>
                            
                            <div className="col"><a class="fa fa-envelope" href="mailto:sardarshubham07@gmail.com"> Email </a></div>
                            <div className="col"><a class="fa fa-github" href="https://github.com/SardarShubham/quiz"> Github</a></div>    
                        </div>
                    </CardText>
                    </CardBody>
                    </Card>
                </Col>
            </div>
        </div>
    );
}

export default AboutComponent;