import React from 'react';
import FakeData from '../FakeData/user'
import {useState} from 'react'
import './Courses.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Courses = () => {
    
        const first12 = FakeData.slice(0,13);
       const[courses, setCourses] = useState(first12)
       const handleAddCourse =(course) => {
           const newCart = [...cart, course]
           setCart(newCart);
       }
       const [cart, setCart] = useState([])
    
    return (
        <div className="course-container">
            <div className="course-show">
                
                {
                    courses.map(course => <Product 
                        handleAddCourse = {handleAddCourse}
                        course ={course}
                        ></Product>)
                }
        
            </div>
            <div className="course-cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Courses;