'use client'
import React,{useState,useEffect} from 'react'
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import starsIcon from '../../assets/images/starsIcon.svg';
import MoonIcon from '../../assets/images/MoonIcon.svg';
import { keyframes } from 'styled-jsx/css';
const thumbOpacity0to1 = keyframes`
   from {opacity: 1;}
  to {opacity: 0;}
`;
const SwitchBtn = styled((props) => (
    <Switch className='dayNightSwitchBtn' focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} >
        </Switch>
  ))
  (({ theme }) => ({
    
    '--MuiSwitch-track-border-radius':'40.71px',
    width: 95,
    height: '43px',
    borderRadius:'var(--MuiSwitch-track-border-radius)',
    padding: '0',
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 35.29,
      height: 35.29,
      backgroundColor: 'white',
      boxShadow: '-1px 1px 3px 0px rgba(121, 164, 253, 1), 1px -1px 2px 0px rgba(163, 194, 255, 1)',
      zIndex: 2,

      '&:before,:after':{
        content:'""',
        width:'100%',
        height:'100%',
        opacity:1,
        position: 'absolute',
        borderRadius: '50%',
        transition:'opacity 1000ms'
      },'&:before':{
        backgroundImage:`url("${MoonIcon.src}")`, //moon
        opacity:0,
        transition:'opacity 1000ms',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        
      },'&:after':{
        background: 'linear-gradient(137.79deg, #FFD338 12.41%, #FF9D42 91.44%)',
        opacity:1,
        transition:'opacity 1000ms',
        animation:`${thumbOpacity0to1} 1s ease`
      }

    },
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: "7.2px 0 2px 6px",
      transitionDuration: '900ms',
      transform: 'translateX(0px) translateY(-3.35px)',
      '&:before':{
        content:'""',
        position:'absolute',
        
        width: '44px',
        height: '44px',
        top: '-5px',
        right: '-17.5px',
        flexShrink: "0",
        borderRadius: "20px",
        background: 'rgba(243, 243, 243, 1)',
        mixBlendMode: "lighten",
        filter: "blur(13px)",
        zIndex: -1
      },

      
      '& .MuiSwitch-input': {
        left: '-48%',
        zIndex: 10
      },
      '&.Mui-checked': {
        transform: 'translateX(48px) translateY(-3.35px)',
        '&:before':{
          top: '8px',
          right: '-4.5px',
          width: '63px',
          height: '23px',
          background: 'rgba(42, 42, 114, 1)',
          borderradius: '9px',
          filter: 'blur(9px)'
        },
        
        '& .MuiSwitch-input': {
          left: '-150%'
        },

        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: 35.29,
          height: 35.29,
          boxShadow:'1px -1px 2px 0px rgba(35, 35, 87, 1)',

          '&:before':{
            backgroundImage:`url("${MoonIcon.src}")`,
            opacity:'1',
            transition:'opacity 1000ms',
            boxShadow: '-0.6785714030265808px 0.6785714030265808px 2.0357141494750977px 0px #323297',
            boxShadow: '0.6785714030265808px -0.6785714030265808px 1.3571428060531616px 0px #232357',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
          },
          '&:after':{
            background: 'linear-gradient(137.79deg, #FFD338 12.41%, #FF9D42 91.44%)', 
            opacity:'0',
            transition:'opacity 1000ms'

          }
        },
        '& + .MuiSwitch-track': {
          backgroundColor: 'rgba(21, 21, 53, 1)',
          opacity:1,
          
          '&:before':{
            content:'""',
            position:'absolute',
            top: '0',
            backgroundSize:'contain',
            backgroundPosition:'center',
       
            width: '41.39px',
            height: '32.57px',
            left: '8px',
            top: '5px',
            backgroundImage:`url("${starsIcon.src}")`,
          }
        }
        
      },
    },
    '& .MuiSwitch-track': {
        height:'auto',
        opacity:1,
        position:'relative',
        border:'solid 3px white',
        background: theme.palette.mode === 'dark' ? '#151535':'#BDD4FF',
        borderRadius:'var(--MuiSwitch-track-border-radius)',
        transition: theme.transitions.create(['background-color'], {
        duration: 1000,
      }),
    },
}));
import { updateSwitchValue } from '../../components/localstorageUtils'

export default function SwitchButton() {
  const [checked, setChecked] = useState(false);
  const [localCheck, setLocalCheck] = useState(false);

  useEffect(() => {
    setLocalCheck(localStorage.getItem('switchValue') === 'true');
  }, []);

  const handleChecked = (event) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    setLocalCheck(isChecked);
    updateSwitchValue(isChecked); // Use the utility function to update localStorage
  };

  return (
    <>
      <SwitchBtn checked={localCheck} onChange={handleChecked} />
    </>
  );
}
