import React from 'react'

export default function Copyright() {
    let year = new Date().getFullYear()
    return (
        <>
            <div className='bg-primary py-2'>
                <div className="container">
                    <div className="row">
                        <div className="col "></div>
                        <p className='text-white text-center mb-0'>&copy;{year}. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
