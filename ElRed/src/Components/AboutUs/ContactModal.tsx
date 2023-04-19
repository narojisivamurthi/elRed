import React, { FunctionComponent, useState } from 'react';
import WithModal from '../DesignSystem/Modal';
import { FlexColumn, InfoCard, InformationText } from '../style';
import editIcon from  "../../assets/edit-red.png";
import deleteIcon from  "../../assets/bin.png";
import emailIcon from  "../../assets/email.png";
import phoneIcon from  "../../assets/phone.png";
import contactIcon from "../../assets/contacts.png";
import addIcon from "../../assets/add.png";
import Button from '../DesignSystem/Button';
import FormInput from '../DesignSystem/FormElements/Input';
import { useForm } from 'react-hook-form';

const ContactModal: FunctionComponent = (props:any) => {
    const [isEdit , setIsEdit] = useState(false);
    const contactList = [
        {
            title: 'Sales Team',
            email: 'test@gmail.com',
            phone: '8639141013'
        },
        {
            title: 'Sales Team',
            email: 'test@gmail.com',
            phone: '8639141013'
        },
        {
            title: 'Sales Team',
            email: 'test@gmail.com',
            phone: '8639141013'
        }
    ];

    const {handleSubmit, control} = useForm({});

    const onSubmit = (data:any) => {
      console.log(data);
    };

    return (
        <FlexColumn className='justify-content-between flex-fill'>
            <FlexColumn className='flex-fill'>
                <InformationText className='pt-0 pb-3'>Please provide the company's email & contacts</InformationText>
                {!isEdit && contactList && contactList.map((item) => 
                    <div className='my-2'>
                        <InfoCard>
                            <div className='edit-icon-container'>
                                <img className='me-3' src={deleteIcon} alt='icon'/>
                                <img className='ml-1' src={editIcon} alt='icon' onClick={() => setIsEdit(true)}/>
                            </div>
                            <div className='card-title'>
                                <img className='icon-img' src={contactIcon} alt='dashboard'/>
                                {item.title}
                            </div>
                            <div className='d-flex justify-content-between pt-3'>
                                <FlexColumn>
                                    <div className='card-text'>
                                        <img className='icon-img' src={emailIcon} alt='icon'/>
                                        {item.email}
                                    </div>
                                    <div className='card-text'>
                                        <img className='icon-img' src={phoneIcon} alt='icon'/>
                                        {item.phone}
                                    </div>
                                </FlexColumn>
                            </div>
                        </InfoCard>
                    </div>
                )}
                {isEdit && 
                <>
                 <form className='d-flex flex-column flex-fill' onSubmit={handleSubmit(onSubmit)}>
                    <FlexColumn className='flex-fill'>
                        <FormInput displayName='Email ID' name="email" placeholder='email' control={control}/>
                        <Button className='w-100 mb-3 m-0' variant='dangerPrimary'>
                            <img src={addIcon} className='pe-1' alt='icon'/>
                            Add More
                        </Button>
                        <FormInput displayName='Contact Number' name="phone" placeholder='phone' control={control}/>
                        <Button className='w-100 m-0 mb-3' variant='dangerPrimary'>
                            <img src={addIcon} className='pe-1' alt='icon'/>
                            Add More
                        </Button>
                    </FlexColumn>
                    <FlexColumn className=''>
                        <Button type={'submit'} variant='danger' className='w-100 m-0'>
                            Save
                        </Button>
                    </FlexColumn>
                    
                </form>
                </>
               }
            </FlexColumn>
            {!isEdit && <FlexColumn className=''>
                <Button type='submit' className='w-100 m-0' variant='danger' onClick={props.postModalClose}>
                    Save
                </Button>
            </FlexColumn>}
        </FlexColumn>
    );
};

export default WithModal(ContactModal);
