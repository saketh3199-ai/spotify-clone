import React from 'react'

const Loading = ({message='loading...',fullScreen = true}) => 
(
  
    <div className={fullScreen? "position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50": "d-flex justify-content-center align-items-center py-5"} style={fullScreen ? {zIndex: 1050} : {}}>
            <div className="bg-white rounded-3 p-4 text-center shadow">
                <div
                    className="spinner-border text-success mb-3"
                    role="status"
                ></div>

                <div className="fw-bold text-dark">
                    {message}
                </div>
            </div>
        </div>
  
)

export default Loading