import React from 'react'
import Header from './Header'
const Home = () => {
    return (
        <>
            <div className='rect'></div>
            <div className='container d-flex border-0 shadow-ti card '>

                <div className="card-body  mx-auto">
                    <Header />
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Company Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder='e.g, Example Inc' aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Industry</label>
                            <select class="form-select" aria-label="Default select example">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Company Size</label>
                            <div className="d-flex justify-content-between">
                                <button type='button' className='butn butn-secondary p-1 text-center'> 1-20</button>
                                <button type='button' className='butn butn-secondary p-1 text-center'>21-50</button>
                                <button type='button' className='butn butn-secondary p-1 text-center'>51-200</button>
                                <button type='button' className='butn butn-secondary p-1 text-center'> 201-500</button>
                                <button type='button' className='butn butn-secondary p-1 text-center'>500+</button>




                            </div>

                        </div>
                        <button type='button' className='butn butn-blue w-100 text-center'> Get started</button>
                    </form>
                </div>

            </div>
            <p className='text-muted position-absolute bottom-0'>Terms of use  |  Privacy policy </p>
        </>
    )
}

export default Home