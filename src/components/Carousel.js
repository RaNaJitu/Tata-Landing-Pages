import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {TextContainer, InfoContainer, ImageContainer, NameWrapper, CompanyNameContainer, NameContainer} from "./AboutSection"


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';


export default function Carousel( {slides}) {
    console.log('slider', slides)
    const type = slides[0].type
    let noPageShowInSection, isButton, modules
    let autoplay = {}
    if(type === 'about') { 
        noPageShowInSection=1
        isButton = true
        modules = [Autoplay, Navigation]
        autoplay = false
        autoplay =  false
    } else {
        noPageShowInSection =4
        isButton = false
        modules = [Autoplay]
        autoplay = {
            delay: 4000,
            disableOnInteraction: true
        }
    }
  return (
    <>
        <Swiper
        slidesPerView={noPageShowInSection}
        spaceBetween={30}
        loop={true}
        navigation= {isButton}
        autoplay= {autoplay}
        speed={1000}
        freeModeMomentum= {false}
        modules={modules}
      >

        {slides.map(item => {
            if(item.type ==='about'){
                return(
                    <SwiperSlide key={item.id}>
                        <TextContainer>
                            {item.text}
                        </TextContainer>
                        <InfoContainer>
                            <ImageContainer>
                                <img
                                    style={{ width: "100% " }}
                                    src={item.image}
                                    alt="Footer images"
                                />
                             </ImageContainer>
                            <NameWrapper>
                                <NameContainer>{item.name}</NameContainer>
                                <CompanyNameContainer>{item.companyName}</CompanyNameContainer>
                            </NameWrapper>
                        </InfoContainer>
                    </SwiperSlide>
                )
            } else {
                return(
                    <SwiperSlide key={item.id}>
                        <img src={item.image} alt='company logo' />
                    </SwiperSlide>
                )
            }
            
        })}
      </Swiper>
      
    </>
  );
}