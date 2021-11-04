import React from 'react'

export const Cards = ({Name, Price, Description, Img}) => {
    return (
        <div className='Cards-annouces'>
        <div className='Cards-Body'>
            <h3 style={{marginBottom:'10px'}}>
                {Name}
            </h3>
            <img src={Img} alt={Name}/>
            {Description.length<24 ? <p style={{textAlign:'center'}}>{Description}</p>:<p style={{textAlign:'left'}}>{Description}</p>}
            <p>{Price}</p>
            </div>
        </div>
    )
}
