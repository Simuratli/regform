import React, {useEffect, useState} from "react";
import shortid from "shortid";
import PendingGetAccessModal from "../ViewsComponents/Modal/PendingGetAccessModal";
import {NavLink, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const CoursePricePlan = ({pricePlans, price}) => {

    const { educationAccessStatus} = useSelector(({education}) => education);
    const [active, setActive] = useState(false);
    const handleOpenModal = (e) => {
        setActive(true);
    }
    const {slug} = useParams();

    //get total price
    const paidPlan = pricePlans.filter(plan => plan.price > 0)[0]
    const [totalPrice, setTotalPrice] = useState(paidPlan.price)

    useEffect(() => {

    }, [educationAccessStatus.coursePermissionState]);
    const addExtras = (e) => {
        const price = e.target.value
        if (e.target.checked){
            setTotalPrice(totalPrice + Number.parseInt(price))
        } else {
            setTotalPrice(totalPrice - Number.parseInt(price))
        }
    }

    switch (educationAccessStatus.coursePermissionState) {
        case "Forbidden" :
            return (
                <>
                    <section className={"pricePlan"} id={'takeCourse'}>
                        <h2>Price plans</h2>
                        <ul className={"paidCardsContainer"}>
                            {pricePlans.map(planItem =>
                                <li className={"paidCard"}>
                                    {
                                        planItem.price === 0
                                            ? <>
                                                <div className={"paidCardHeader"}>
                                                    <h3 className={"title free"}>FREE</h3>
                                                    <p className={"format free"}>Offline</p>
                                                    <p className={"price free"}>
                                                        <span className={"dollarSign"}>$</span>
                                                        {planItem.price}
                                                    </p>
                                                </div>

                                                <span className={"startDate"}>
                                            {/*<h3>Start date: <p>notify me</p></h3>*/}
                                            </span>
                                                <div key={shortid.generate()}
                                                     dangerouslySetInnerHTML={{__html: planItem.description}}>
                                                </div>
                                                <div key={shortid.generate()}
                                                     dangerouslySetInnerHTML={{__html: planItem.checkPoints}}>
                                                </div>
                                                <>
                                                    <button onClick={handleOpenModal} className={"getAccessButton"}>Get access</button>
                                                    <PendingGetAccessModal active={active} setActive={setActive} isPaid={false} price={price}/>
                                                </>
                                            </>
                                            : <>
                                                <div className={"paidCardHeader"}>
                                                    <h3 className={"title paid"}>PAID</h3>
                                                    <p className={"format paid"}>Online</p>
                                                    <p className={"price paid"}>
                                                        <span className={"dollarSign"}>$</span>
                                                        {planItem.price}
                                                    </p>
                                                </div>

                                                <div key={shortid.generate()}
                                                     dangerouslySetInnerHTML={{__html: planItem.description}}>
                                                </div>
                                                <div key={shortid.generate()}
                                                     dangerouslySetInnerHTML={{__html: planItem.checkPoints}}>
                                                </div>
                                                <ul className={"extraBenefitsList"} >
                                                    <li className={"extraBenefit"}>
                                                        <input type={"checkbox"} name="mentor_assistance"
                                                               value="20" onClick={addExtras}/>
                                                        <label htmlFor={"mentor_assistance"}>Need mentor's assistance (1
                                                            hour) <span className={"paid"}>+20$</span></label>
                                                    </li>
                                                    <li className={"extraBenefit"}>
                                                        <input type={"checkbox"} name="exam_certificate"
                                                               value="10" onClick={addExtras}/>
                                                        <label htmlFor={"exam_certificate"}>Pass an exam and get a
                                                            certificate <span className={"paid"}>+10$</span></label>
                                                    </li>
                                                </ul>

                                                <div className={"totalPriceBlock"}>
                                                    <p className={"price paid"}>
                                                        <h5 className={"totalPriceTitle"}>Total Price</h5>
                                                        <span className={"dollarSign"}>$</span>
                                                        {totalPrice}
                                                    </p>
                                                </div>
                                                <>
                                                    <button onClick={handleOpenModal} className={"getAccessButton"}>Get access</button>
                                                    <PendingGetAccessModal active={active} setActive={setActive} isPaid={true} price={totalPrice}/>
                                                </>
                                            </>
                                    }

                                </li>
                            )}
                        </ul>
                    </section>
                </>
            )
        case "Pending" :
            return (
                <div style={{display: "grid", gridTemplateColumns: "1fr", gridGap: "20px", justifyItems: "center"}}>
                    <div>Wait please for your invintation on your email</div>
                    <button className={"getAccessButton"}>Pending for access</button>
                </div>

            )
        case "Allowed":
            return (
                <div style={{display: "grid", gridTemplateColumns: "1fr", gridGap: "20px", justifyItems: "center"}}>
                    <div>Pleasant learning!</div>
                    <NavLink to={"/education/" + slug + "/free-course"}>
                        <button className={"getAccessButton"}>Watch course</button>
                    </NavLink>
                </div>
            )
        default:
            return <button className={"getAccessButton"}>Get access</button>

    }


    // return (
    //     <section className={"pricePlan"} id={'takeCourse'}>
    //         <h2>Price plans</h2>
    //         <ul className={"paidCardsContainer"}>
    //             {pricePlans.map(planItem =>
    //                 <li className={"paidCard"}>
    //                     {
    //                         planItem.price === 0
    //                             ? <>
    //                                 <div className={"paidCardHeader"}>
    //                                     <h3 className={"title free"}>FREE</h3>
    //                                     <p className={"format free"}>Offline</p>
    //                                     <p className={"price free"}>
    //                                         <span className={"dollarSign"}>$</span>
    //                                         {planItem.price}
    //                                     </p>
    //                                 </div>
    //
    //                                 <span className={"startDate"}>
    //                                         {/*<h3>Start date: <p>notify me</p></h3>*/}
    //                                         </span>
    //                                 <div key={shortid.generate()}
    //                                      dangerouslySetInnerHTML={{__html: planItem.description}}>
    //                                 </div>
    //                                 <div key={shortid.generate()}
    //                                      dangerouslySetInnerHTML={{__html: planItem.checkPoints}}>
    //                                 </div>
    //                                 <GetAccessButton isPaid={false}/>
    //                             </>
    //                             : <>
    //                                 <div className={"paidCardHeader"}>
    //                                     <h3 className={"title paid"}>PAID</h3>
    //                                     <p className={"format paid"}>Online</p>
    //                                     <p className={"price paid"}>
    //                                         <span className={"dollarSign"}>$</span>
    //                                         {planItem.price}
    //                                     </p>
    //                                 </div>
    //
    //                                 <div key={shortid.generate()}
    //                                      dangerouslySetInnerHTML={{__html: planItem.description}}>
    //                                 </div>
    //                                 <div key={shortid.generate()}
    //                                      dangerouslySetInnerHTML={{__html: planItem.checkPoints}}>
    //                                 </div>
    //                                 <ul className={"extraBenefitsList"} >
    //                                     <li className={"extraBenefit"}>
    //                                         <input type={"checkbox"} name="mentor_assistance"
    //                                                value="20" onClick={addExtras}/>
    //                                         <label htmlFor={"mentor_assistance"}>Need mentor's assistance (1
    //                                             hour) <span className={"paid"}>+20$</span></label>
    //                                     </li>
    //                                     <li className={"extraBenefit"}>
    //                                         <input type={"checkbox"} name="exam_certificate"
    //                                                value="10" onClick={addExtras}/>
    //                                         <label htmlFor={"exam_certificate"}>Pass an exam and get a
    //                                             certificate <span className={"paid"}>+10$</span></label>
    //                                     </li>
    //                                 </ul>
    //
    //                                 <div className={"totalPriceBlock"}>
    //                                     <p className={"price paid"}>
    //                                         <h5 className={"totalPriceTitle"}>Total Price</h5>
    //                                         <span className={"dollarSign"}>$</span>
    //                                         {totalPrice}
    //                                     </p>
    //                                 </div>
    //
    //                                 <GetAccessButton isPaid={true} price={totalPrice}/>
    //                             </>
    //                     }
    //
    //                 </li>
    //             )}
    //         </ul>
    //     </section>
    // );
};

export default CoursePricePlan;
