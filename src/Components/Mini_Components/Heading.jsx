import React from 'react';
import BBB from '../../Assets/Wallpaper/polygon-bg-element.svg'

const Heading = (Props) => {
    return (
        <>
            <div className='text-center fw-bold' style={{ backgroundImage: `url(${BBB})`,paddingTop:"50px", paddingBottom:"50px" ,fontSize: `${!Props.Font ? "47px" : Props.Font}` }}>
                {Props.Title}
            </div>
        </>
    )
}

export default Heading
