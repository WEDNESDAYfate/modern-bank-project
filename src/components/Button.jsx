import React from 'react'
import styles from '../style'
const Button = () => {
    return (
        <div type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none
        ${styles} mt-5 rounded-[10px] cursor-pointer`}>Get Started</div>
    )
}

export default Button