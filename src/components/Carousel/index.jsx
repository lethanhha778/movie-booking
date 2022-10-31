import React from 'react';
import { useDispatch } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import '../Carousel/style.css'
import { AiOutlinePlayCircle } from "react-icons/ai";
import { imgCarouselData } from '../../constant/imgCarouselData';
import { OPEN_VIDEO } from '../../redux/types/CarouselType/CarouselType';
import TrailerMovie from '../Carousel/TrailerCarousel/TrailerMovie';
import Booking from '../Booking';

function CarouselMovie() {
    let dispacth = useDispatch()
    let openVideo = (link) => {
        console.log(link);
        dispacth({
            type: OPEN_VIDEO,
            payload: {
                open: true,
                linkYouTube: link
            }
        })
    }
    return (
        <div className='banner'>
            <Carousel>
                {imgCarouselData.map((img) => {
                    return (
                        <Carousel.Item interval={6000} key={img.maPhim}>
                            <img
                                className="d-block w-100"
                                src={img.hinhAnh}
                                alt={img.biDanh}
                            />
                            <div className='icon-play'>
                                <AiOutlinePlayCircle onClick={() => {
                                    openVideo(img.trailer)
                                }} />
                            </div>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
            <TrailerMovie />
            <Booking/>
        </div>

    );
}

export default CarouselMovie;