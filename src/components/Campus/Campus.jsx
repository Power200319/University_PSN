import React from 'react'
import './Campus.css'
import gallery1 from '../../assets/stu-1.png'
import gallery2 from '../../assets/stu-4.png'
import gallery3 from '../../assets/stu-3.png'
import gallery4 from '../../assets/student.png'
import white_arrow from '../../assets/white_arrow.png'
const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery1} alt=""/>
            <img src={gallery2} alt=""/>
            <img src={gallery3} alt=""/>
            <img src={gallery4} alt=""/>
        </div>
        <button className='btn dark-btn'>see more here <img src={white_arrow} alt=""/> </button>
    </div>
  )
}

export default Campus