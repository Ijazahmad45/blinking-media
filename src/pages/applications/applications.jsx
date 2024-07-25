import React from 'react'
import Card from '../../components/card/card'
import { Box } from '@mui/material'
import tablets from '../../assets/images/tablet.svg'
import liabrary from '../../assets/images/library.svg'
export default function Applications({tab5Click,tab6Click}) {
    const applicationData=[
        {imgSource:tablets,cardTitle:'Blinking Med- Medical',CardContent:' Touchless Technology  offers hygienic interaction by projecting virtual interfaces.Fostering safe...',type:'Medical'},
        {imgSource:liabrary,cardTitle:'Blinking  Retail',CardContent:'Touchless Technology  offers hygienic interaction by projecting virtual interfaces.Fostering safe...',type:'Retail'},
       
      ]
  return (
    <>
     <Box  sx={{display:'flex',justifyContent:'center',gap:5,     paddingTop: '3px'}}>
        {applicationData.map((item,index)=>{
            return(
               <Box key={index} sx={{cursor:'pointer'}} onClick={item.type=="Medical" ? tab5Click : tab6Click}>
                 <Card imgSource={item.imgSource} cardTitle={item.cardTitle} CardContent={item.CardContent} />
               </Box>
            )
        })}
     </Box>


     
    </>
  )
}
