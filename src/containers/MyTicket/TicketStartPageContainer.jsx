import React from 'react';
import '../../scss/myTicket/myTicket.scss'
import MyTicket from "../../components/MyTicketComponents/Tikets/MyTicket";
import TicketPreview from "../../components/MyTicketComponents/TicketChat/TicketPreview";

const TicketStartPageContainer = () => {

  return (
    //render MyTicket or TicketPreview
    <>
      <MyTicket/>
      <TicketPreview/>
    </>
  )
}

export default TicketStartPageContainer;
