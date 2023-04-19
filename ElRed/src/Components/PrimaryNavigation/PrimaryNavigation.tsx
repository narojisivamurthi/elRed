import React from 'react';
import { MegamenuItem, PrimaryNavigationContainer } from './styles';
import { FlexColumn, InfoCard } from '../style';
import Button from '../DesignSystem/Button';
import dashboardGrayIcon from  "../../assets/dashboard-gray.png";
import dashboardRedIcon from  "../../assets/dashboard-red.png";
import orderGrayIcon from  "../../assets/order-gray.png";
import orderRedIcon from  "../../assets/order-red.png";
import teamGrayIcon from  "../../assets/team-gray.png";
import teamRedIcon from  "../../assets/team-red.png";
import partnerGrayIcon from  "../../assets/partner-gray.png";
import partnerRedIcon from  "../../assets/partner-red.png";
import productsGrayIcon from  "../../assets/products-gray.png";
import productsRedIcon from  "../../assets/products-red.png";
import awardGrayIcon from  "../../assets/award-gray.png";
import awardRedIcon from  "../../assets/award-red.png";
import aboutGrayIcon from  "../../assets/about-gray.png";
import aboutRedIcon from  "../../assets/about-red.png";
import paymentGrayIcon from  "../../assets/payment-gray.png";
import paymentRedIcon from  "../../assets/payment-red.png";
import questionIcon from  "../../assets/question.png";
import logoNavigation from "../../assets/logo-navigation.jpg";

//import { NavLink } from 'react-router-dom';

const PrimaryNavigation = () => {
    const navigationList = [
        {
            id: '1',
            nameHeader: 'Dashboard',
            normalSrc: dashboardGrayIcon,
            hoverSrc: dashboardRedIcon
        },
        {
            id: '2',
            nameHeader: 'Orders',
            normalSrc: orderGrayIcon,
            hoverSrc: orderRedIcon
        },
        {
            id: '3',
            nameHeader: 'Team Members',
            normalSrc: teamGrayIcon,
            hoverSrc: teamRedIcon
        },
        {
            id: '4',
            nameHeader: 'Partners',
            normalSrc: partnerGrayIcon,
            hoverSrc: partnerRedIcon
        },
        {
            id: '5',
            nameHeader: 'Product Listings',
            normalSrc: productsGrayIcon,
            hoverSrc: productsRedIcon
        },
        {
            id: '6',
            nameHeader: 'Awards & Honours',
            normalSrc: awardGrayIcon,
            hoverSrc: awardRedIcon
        },
        {
            id: '7',
            nameHeader: 'About Us',
            normalSrc: aboutGrayIcon,
            hoverSrc: aboutRedIcon
        },
        {
            id: '8',
            nameHeader: 'Payment Info',
            normalSrc: paymentGrayIcon,
            hoverSrc: paymentRedIcon
        }
    ]
    return (
        <PrimaryNavigationContainer className='justify-content-between'>
            <img className='logo-navigation' src={logoNavigation} alt='icon'/>
            <FlexColumn className='py-3'>
                {navigationList.map((item) => 
                    <MegamenuItem isSelected={item.id === '7'}>
                        {/* <NavLink
                            to={item.link}
                            activeClassName={'is-active'}
                        > */}
                            <img className='normal-img' src={item.normalSrc} alt='dashboard'/>
                            <img className='hover-img' src={item.hoverSrc} alt='dashboard'/>
                            {item.nameHeader}
                        {/* </NavLink> */}
                    </MegamenuItem>
                )} 
            </FlexColumn>
            <div>
                <InfoCard className='text-center'>
                    <div className='card-title pb-1 flex-column'>
                        <img className='mb-2' src={questionIcon} alt='icon'/>
                        Need Help?</div>
                    <div className='card-text'>Out Support team is at your disposal</div>
                    <div className='p-1'>
                        <Button variant="primary">Get Help</Button>
                    </div>
                </InfoCard>
            </div>
        </PrimaryNavigationContainer>
    );
};

export default PrimaryNavigation;