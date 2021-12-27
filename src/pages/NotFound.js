import React from 'react'
import './NotFound.css'
import {Link} from "react-router-dom"
import BlankImage from '../images/emptyImage.jpg'
export function BlankPage(){
    return <div>
        <h3>Blank Page</h3>
        <Link to='/'>← Back to Dashboard</Link>
        <div className="row">
            <div className="col-md-3 "></div>
            <div className="col-md-5 col-sm-12">
            <img style={{margin:'50px',height:'600px'}}src={BlankImage} alt=""/>
            </div>
            <div className="col-md-4"></div>
        </div>
      
    </div>
}
export default function NotFound() {
    return (
        <div className='NotFoundDiv'>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <p className="error" >404</p>
           
           <p className="notFoundText">Page Not Found</p>
            <p className="glitchText">It looks like you found a glitch in the matrix...</p>
            <Link to='/'>← Back to Dashboard</Link>
                </div>
                <div className="col-md-4"></div>
            </div>
            
           
        </div>
    )
}
