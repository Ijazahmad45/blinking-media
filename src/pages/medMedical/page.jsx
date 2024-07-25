import React from 'react'
import BlinkingCommon from '../../components/blinkingCommon/blikingCommon'
import listIcon from '../../assets/images/listIcon.svg'
export default function page() {
  const medMedicalData=[
    {
    componentName:'Blinking Med-Medical',
    cardData:[{
      listTitle:'Touchless Patient Experience',
      imgSource:listIcon,
      listData:[
        'Seamless Self Check-in',
        'Effortless Elevator Access',
        'Enhanced Patient Experience '
      ]
    },
    {
      imgSource:listIcon,
      listTitle:'Air-Controlled Medical Gear',
      listData:[
        'Touchless Control',
        'Intuitive Engagement',
        'Elevated Patient Care '
      ]
    },
    {
      imgSource:listIcon,
      listTitle:'Holographic Diagnostics: No Limits',
      listData:[
        'Seamless Integration',
        'Glove-Friendly Control',
        '  Cutting-Edge Innovation '
      ]
    },
    {
      imgSource:listIcon,
      listTitle:'Holographic Diagnostics: No Limits',
      listData:[
        'Seamless Integration',
        'Glove-Friendly Control',
        '  Cutting-Edge Innovation '
      ]
    },
    {
      imgSource:listIcon,
      listTitle:'Holographic Diagnostics: No Limits',
      listData:[
        'Seamless Integration',
        'Glove-Friendly Control',
        '  Cutting-Edge Innovation '
      ]
    }
  ]

  },
  
  ]
  return (
    <>
    <BlinkingCommon medMedicalData={medMedicalData} />
    </>
  )
}
