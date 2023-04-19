import React, { useState } from 'react';
import { FlexColumn, InfoCard, RoundContainer } from '../style';
import editIcon from  "../../assets/edit-red.png";
import emailIcon from  "../../assets/email.png";
import phoneIcon from  "../../assets/phone.png";
import contactIcon from "../../assets/contacts.png";
import ContactModal from './ContactModal';
//import { NavLink } from 'react-router-dom';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <InfoCard>
            <div className='edit-icon-container'>
                <img src={editIcon} alt='icon' onClick={() => setIsOpen(true)}/>
            </div>
            <div className='card-title'>
                <img className='icon-img' src={contactIcon} alt='dashboard'/>
                Contact
            </div>
            <div className='d-flex justify-content-between pt-3'>
                <FlexColumn>
                    <div className='card-text'>
                        <img className='icon-img' src={emailIcon} alt='icon'/>
                        narojisivamurthi@gmail.com/narojisivamurthi1230@gamil.com
                    </div>
                    <div className='card-text'>
                        <img className='icon-img' src={phoneIcon} alt='icon'/>
                        8639141013/8179534761
                    </div>
                </FlexColumn>
                <div className='ps-3'>
                    <RoundContainer className='number-container'>
                        +1
                    </RoundContainer>
                </div>
            </div>
            {isOpen && 
            <ContactModal
                title={"Contacts"}
                isOpen={isOpen}
                postModalClose={() => setIsOpen(false)}
            />}
        </InfoCard>
    );
};

export default Contact;