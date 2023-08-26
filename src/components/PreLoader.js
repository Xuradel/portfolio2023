import React, { useEffect } from 'react'
import { preLoaderAnim } from '../animations'
import './PreLoader.css'

const PreLoader = () => {

    useEffect(()=>{
        preLoaderAnim()
    },[])

  return (
    <div className='preloader'>
        <div className='texts-container'>
            <span>Luis</span>
            <span>Escobar</span>
            <span>Portfolio.</span>
        </div>
    </div>
  )
}

export default PreLoader
