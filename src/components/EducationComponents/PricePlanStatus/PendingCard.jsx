import React from 'react'

const PendingCard = () => {

    return(
        <section className={"orangeBackground"} id={"takeCourse"}>
            <div className={"pendingBlock statusBlock"}>
                <h3 className={"statusTitle pendingTitle"}>Thank you! <br/> We have received your request. </h3>
                <p className={"statusParagraph pendingParagraph"}>When all the necessary procedures will be
                    completed, you will get an access to the course.</p>
                <button className={"pendingButton"}>In pending...</button>
            </div>
        </section>
    )
}

export default PendingCard;
