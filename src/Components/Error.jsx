import React from 'react'

const Error = ({message = 'Something went wrong. Please try again.'}) => 
{
    return (
        <div className="d-flex justify-content-center align-items-center py-5">
            <div className="alert alert-danger text-center" role="alert">
                {message}
            </div>
        </div>
    )
}

export default Error