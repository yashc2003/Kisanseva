import React, { useState, useEffect } from 'react';
import './preloader.css';
import image1 from './loading.gif'

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading && (
                <div className="preloader ">
                    {/* <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
            </div> */}
                    <img src={image1 } height="100px" className='' />
                    <h1 className='g-font-b text-black ms-2 text-opacity-75 fs-3 mt-3'> Loading Your website...</h1>
                </div>
            )}
        </>
    );
}
