import React from 'react'
import photo from './photo.jpg'
import ProgressBar from '@ramonak/react-progress-bar'

function User() {
    return (
        <div className='container'>
            <div className="id-photo">
                <div className='text-center mt-3'>
                    <img src={photo} alt="" className='rounded-circle border border-primary' style={{ width: "300px", height: "300px" }} />
                </div>
            </div>

            <div className="id-details-section d-flex justify-content-center mt-3">
                <div className="course border-end border-dark border-3 d-flex align-items-center justify-content-center" style={{ width: "100px", height: "100px" }} >
                    <h2>2</h2>
                </div>
                <div className="course border-end border-dark border-3 d-flex align-items-center justify-content-center" style={{ width: "100px", height: "100px" }} >
                    <h2>2</h2>
                </div>
                <div className="course border-end border-dark border-3 d-flex align-items-center justify-content-center" style={{ width: "100px", height: "100px" }} >
                    <h2>2</h2>
                </div>
                <div className="course  d-flex align-items-center justify-content-center" style={{ width: "100px", height: "100px" }} >
                    <h2>2</h2>
                </div>
            </div>

            <div className="id-course mt-4 position-relative">
                <div className="container rounded " style={{ width: "50%", height: "100px", background: "linear-gradient(90deg, #5170ff, #ff66c4)" }}>
                    <div className="container d-flex p-3">
                        <h4 className='' style={{text:"#004aad"}}>1.</h4>
                        <h5 className='' style={{ padding: "2px 5px" }}>Learn Ethical Hacking from scratch</h5>
                    </div>
                    <div className="position-absolute" style={{top:"45%", left:"29.3%"}} >
                        <label className='' style={{fontSize:"0.7rem"}}>Course Progress</label>
                    </div>
                    <div className="position-absolute" style={{top:"45%", left:"62%"}} >
                        <label className='' style={{fontSize:"0.7rem"}}>80%  complete</label>
                    </div>
                    <div className="progressBar container mx-4" >
                        <ProgressBar completed={80} customLabel=' ' height='7px' width='90%'/>
                    </div>
                </div>
            </div>
            <div className="id-course mt-4 position-relative">
                <div className="container rounded " style={{ width: "50%", height: "100px", background: "linear-gradient(90deg, #5170ff, #ff66c4)" }}>
                    <div className="container d-flex p-3">
                        <h4 className='' style={{text:"#004aad"}}>2.</h4>
                        <h5 className='' style={{ padding: "2px 5px" }}>100 days python complete bootcamp</h5>
                    </div>
                    <div className="position-absolute" style={{top:"45%", left:"29.3%"}} >
                        <label className='' style={{fontSize:"0.7rem"}}>Course Progress</label>
                    </div>
                    <div className="position-absolute" style={{top:"45%", left:"62%"}} >
                        <label className='' style={{fontSize:"0.7rem"}}>40%  complete</label>
                    </div>
                    <div className="progressBar container mx-4" >
                        <ProgressBar completed={40} customLabel=' ' height='7px' width='90%'/>
                    </div>
                </div>
            </div>
            <div className="id-course mt-4 position-relative">
                <div className="container rounded " style={{ width: "50%", height: "100px", background: "linear-gradient(90deg, #5170ff, #ff66c4)" }}>
                    <div className="container d-flex p-3">
                        <h4 className='' style={{text:"#004aad"}}>3.</h4>
                        <h5 className='' style={{ padding: "2px 5px" }}>100 days python complete bootcamp</h5>
                    </div>
                    <div className="position-absolute" style={{top:"45%", left:"29.3%"}} >
                        <label className='' style={{fontSize:"0.7rem"}}>Course Progress</label>
                    </div>
                    <div className="position-absolute" style={{top:"45%", left:"62%"}} >
                        <label className='' style={{fontSize:"0.7rem"}}>0%  complete</label>
                    </div>
                    <div className="progressBar container mx-4" >
                        <ProgressBar completed={0} customLabel=' ' height='7px' width='90%'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User