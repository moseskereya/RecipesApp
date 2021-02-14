import React from 'react'
import Spinners from './Components/images/spinner.gif'

const Spinner = () => {
    return (
        <div className="spin">
            <img src={Spinners} alt="Loading_image"
                style={styles} />
        </div>
    )
}

export default Spinner

const styles = {
    width: '200px',
    margin: '40px auto',
    display: 'block'
}