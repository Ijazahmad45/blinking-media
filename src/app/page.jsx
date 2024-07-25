"use client";
import { Box } from "@mui/material";
import LayoutBox from "./components/boxes/LayoutBox";
import React, { useState } from "react";
import CustomButton from "../app/components/buttons/button";
import TabContents from "../app/components/tabContents/TabContents";
import TabContent from "../app/components/tabContents/TabContent";

import TopBar from "../../src/components/topBar/topBar";
import MenuButton from "../app/components/buttons/MenuButton";
import SideButton from "./components/buttons/sideButton"
import ContactUs from "../pages/contactUs/page";
import AboutUs from "../pages/aboutUs/page";
import BlinkingRetail from "../pages/blinkingRetail/page";
import MedMedical from "../pages/medMedical/page";
import Slider from '../pages/unlookingFuture/slider'
import Applications from '../pages/applications/applications'
const Home = () => {
  const homeTab="tab2";
  const tab2Data={title:'Applications',content:'A World Where Touching Dreams Is The New Normal!'};
  const [activeTab, setActiveTab] = useState(homeTab);
  const [activeHome, setActiveHome] =useState(false);
  const [topBarData,setTopBarData]=useState(tab2Data);
  const [showBackBtn,setshowBackBtn]=useState(false);

  const handleChange = (tab) => {
    setActiveTab(tab);
    if(tab=='tab1'){
      setTopBarData({title:'About Us',content:'A World Where Touching Dreams Is The New Normal!'});
      setshowBackBtn(false);
    }
    else if(tab=='tab2'){
      setTopBarData(tab2Data);
      setshowBackBtn(false);
     }
     else if(tab=='tab3'){
      setTopBarData({title:'Products',content:'Germ-Free, Contactless Solutions'})
      setshowBackBtn(false);
     }
     else if(tab=='tab4'){
      setTopBarData({title:'Contact Us',content:'Please feel free to reach out to us using the information below'});
      setshowBackBtn(false);
     }
     
     else if(tab=='tab5'){
      setTopBarData({title:'Contact Us',content:''});
      setshowBackBtn(true);
     }
     
     else if(tab=='tab6'){
      setTopBarData({title:'Contact Us',content:''});
      setshowBackBtn(true);

     }
  };
  
  const handleButtonsAnimation = () => {
    setActiveHome(true);
  };

  const mainWrapper = {
    position: "relative",
    zIndex: 100,
  };

  const content = {
    position: "absolute",
  };

  const buttonWrapperStyle = {
    display: "flex",
    alignItems: "flex-end",
    margin: `${activeHome ? "0px -155px": '0px -580px'}`,
    transition: 'margin 1s, opacity 1s',
    zIndex: 1,
    opacity: `${activeHome ? "1": '0'}`,
  };
  return (
    <>
      <LayoutBox>
        {/* HEADING AND SUBHEADING */}
        <TopBar
          headerTitle={topBarData.title}
          headerContent={topBarData.content}
          showBackBtn={showBackBtn}
          backBtnClick={() => handleChange(homeTab)}
        />

        {/* CONTENT */}

        <TabContents id="contents">
          <TabContent id="tab1" active={activeTab === "tab1"}>
            <AboutUs />
          </TabContent>
          <TabContent id="tab2" active={activeTab === "tab2"}>
            <Applications tab5Click={() => handleChange("tab5")} tab6Click={() => handleChange("tab6")}/>
          </TabContent>
          <TabContent id="tab3" active={activeTab === "tab3"}>
            <Slider/>
          </TabContent>
          <TabContent id="tab4" active={activeTab === "tab4"}>
            <ContactUs/>
          </TabContent>
          <TabContent id="tab5" active={activeTab === "tab5"}>
            <MedMedical/>
          </TabContent>
          <TabContent id="tab6" active={activeTab === "tab6"}>
            <BlinkingRetail/>
          </TabContent>
        </TabContents>

        {/* BUTTONS */}
        
        <SideButton/>
        <Box
          sx={{
            position: "absolute",
            bottom: "-87px",
            transform: " translateY(100%)",
            left: "0",
            right: "0",
          }}
        >
          <Box
            className={"TabButtons"}
            sx={{ display: "flex", justifyContent: "space-evenly" }}
          >
             <Box sx={buttonWrapperStyle}>
              <CustomButton btnName='About Us' onClick={() => handleChange("tab1")}/>
            </Box>
            <Box sx={buttonWrapperStyle}>
              <CustomButton
                tabId="tab2"
                onClick={() => handleChange("tab2")}
                btnName='Applications'
              /> 
            </Box>
             <Box sx={{...buttonWrapperStyle,opacity:1, zIndex:10}}>
              <MenuButton onClick={handleButtonsAnimation} homeBtnClick={() => handleChange("tab2")}/>
            </Box>
             <Box sx={buttonWrapperStyle}>
              <CustomButton
                tabId="tab3"
                btnName='Products'
                onClick={() => handleChange("tab3")}
              />
            </Box>
             <Box sx={buttonWrapperStyle}>
              <CustomButton
                tabId="tab4"
                btnName='Contact Us'
                onClick={() => handleChange("tab4")}
              ></CustomButton>
            </Box>
          </Box>
        </Box>
      </LayoutBox>
    </>
  );
};

export default Home;
