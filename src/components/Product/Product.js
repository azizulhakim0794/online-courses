import React from 'react';
import './Product.css'
import { Button} from 'react-bootstrap';

const Product = (props) => {
    const styleImg = {height: '200px',width: '300px'}
    return (
        <div className="main-cart">
        <div className="for-img">
        <img style={styleImg} src = {props.course.img} alt=""/>
            </div>    
        <div className="course-ditails">
        <h4>{props.course.name}</h4>
        <br/>
        <p> <a href="https://bangla2.programming-hero.com/">Click to go Our Website</a></p>
        <p> Price : ${props.course.price}</p>
        <Button onClick={() => props.handleAddCourse(props.course)} variant="secondary" id="buy-btn" size="lg">Enroll Now</Button>
        </div>
        
        </div>
    );
};

export default Product;