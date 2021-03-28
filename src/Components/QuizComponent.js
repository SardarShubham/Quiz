import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {QUESTIONS} from '../shared/abbrevations';
import {Button, Card, CardTitle, Progress, Jumbotron, CardImg, CardText, CardBody, Row, Col} from 'reactstrap';

class QuizComponent extends Component
{
    constructor(props){
        super(props);
        this.state = {
            questions: QUESTIONS,
            colors: ['warning', 'warning', 'warning', 'warning'],
            counter: 0,
            isAnswered: false,
            queCount: 1,
            waitCounter: 0,
            score: 0 
        }
        this.renderQuestion = this.renderQuestion.bind(this);
        this.incremateCounter = this.incremateCounter.bind(this);
        this.incremateWaitCounter = this.incremateWaitCounter.bind(this);
        this.renderResult = this.renderResult.bind(this);
    }

    renderQuestion(question){
        return(
            <div key={question.queId} className="Question">
                <Row><Col md><Jumbotron className="Jumbotron"><img src={process.env.PUBLIC_URL+'/assets/question_mark.png'} color='transparent' alt="question mark"></img>{question.queStatement}</Jumbotron></Col></Row>
                <Row><Col md><Button color={this.state.colors[0]} block onClick={()=>this.evaluate(question, 1)} disabled={this.state.isAnswered} className="button"> {question.opt1}</Button></Col></Row>
                <Row><Col md><Button color={this.state.colors[1]} block onClick={()=>this.evaluate(question, 2)} disabled={this.state.isAnswered} className="button"> {question.opt2}</Button></Col></Row>
                <Row><Col md><Button color={this.state.colors[2]} block onClick={()=>this.evaluate(question, 3)} disabled={this.state.isAnswered} className="button"> {question.opt3}</Button></Col></Row>
                <Row><Col md><Button color={this.state.colors[3]} block onClick={()=>this.evaluate(question, 4)} disabled={this.state.isAnswered} className="button"> {question.opt4}</Button></Col></Row>
            </div>
        );
    }

    renderResult(){
        return(
            <div>result</div>
        );
    }

    incremateCounter(){
        this.setState({counter : this.state.counter+1})
    }

    incremateWaitCounter(){
        this.setState({waitCounter : this.state.waitCounter+1});
        if (this.state.isAnswered){
            if(this.state.waitCounter >= 2){
                this.setState({
                    isAnswered: false,
                    queCount: this.state.queCount+1,
                    colors: ['warning', 'warning', 'warning', 'warning']
                })
            }
        }
    }

    evaluate(question, test){
        let temp = ['warning', 'warning', 'warning', 'warning'];
        let point = 0;
        if (question.answerOpt === test){
            point = 1;
        } 
        else{
            temp[test-1] = 'danger';
        }
        temp[question.answerOpt-1] = 'success';
        this.setState({
            colors : temp,
            waitCounter : 0,
            isAnswered: true,
            score: this.state.score+point
        });
    }

    render(){
        if (this.state.queCount<=10){
            return(
                <div className="container">
                    <div className="row">
                    
                        <Col md>
                            <Progress color="success" value={this.state.queCount*10} className="progress"> </Progress>
                        </Col>
                    
                    {this.renderQuestion(this.state.questions[this.state.queCount-1])}
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Card className='card'>
                            <CardImg src={process.env.PUBLIC_URL+'/assets/Trophy.png'} alt='congratulation' className='image'/>
                            <CardImg src={process.env.PUBLIC_URL+'/assets/congrats.png'} alt='congrats' className='image'/>
                            <CardTitle> <h2>Result : {this.state.score}/10</h2></CardTitle>
                            <CardBody>
                                <CardText>
                                    Since now you have attempted the quiz, have a look at my Profile :)<br/>
                                    <Button color="secondary"> <Link to="/quiz">Home</Link></Button><br/>
                                    <Button color='primary' className='button'><Link to="/about">Go to Profile</Link></Button>
                                </CardText>
                            </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            );
        }
    }

    componentDidMount(){
        setInterval(this.incremateCounter, 1000);
        setInterval(this.incremateWaitCounter, 1000);
    }
}


export default QuizComponent;