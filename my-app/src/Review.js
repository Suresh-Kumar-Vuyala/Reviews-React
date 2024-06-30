import React from 'react'


const ReviewCom = (props) => {
    return (
        <>
            <section className="container">
                <section className='img-container'>
                    <img className="img-person" src={props.Data.image}></img>
                    <h3>{props.Data.name}</h3>
                    <h5>{props.Data.job}</h5>
                    <p>{props.Data.text}</p>

                </section>

            </section>



        </>
    )
}


export default ReviewCom;