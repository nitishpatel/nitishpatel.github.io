import React from 'react'

const Card = ({title,image,description,link}) => {
    return (
            <div className="feature_item card   project shadow-sm border-0">
                <div className="card-body "><img src={image} alt="" className="img-fluid " />
                    <h6 className="text-center"> {title}</h6>
                    <p >{description}</p>
                   
                </div>
            </div>

    )
}

export default Card
