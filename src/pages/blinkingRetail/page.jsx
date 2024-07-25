import React from 'react'
import BlikingCommon from '../../components/blinkingCommon/blikingCommon'
import chicken from '../../assets/images/chicken.svg'
export default function page() {
    const retailData=[
        {
        componentName:'Blinking Retail',
        cardData:[{
          imgSource:chicken,
          listTitle:'Holo Windows: Your Nonstop Sales Ally',
          listData:[
            'Maximize Storefront Appeal',
            'Round-the-Clock Impact',
            'Enhance Customer Engagement '
          ]
        },
        
       
        {
          imgSource:chicken,
          listTitle:'Upgrade to Touchless POS!',
          listData:[
            'Touchless Control',
            'Intuitive Engagement',
            'Elevated Patient Care '
          ]
        },
         {
          imgSource:chicken,
          listTitle:'Seamless, Secure Payments',
          listData:[
            'Contactless Payments',
            'Air Signature',
            'Private PIN Entry' ]
        },]
      },
      ]
      
  return (
    <>
     <BlikingCommon medMedicalData={retailData}/>
    </>
  )
}
