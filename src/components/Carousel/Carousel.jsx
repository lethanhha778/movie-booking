import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import '../Carousel/carousel.css'
import { AiOutlinePlayCircle } from "react-icons/ai";
import { imgCarouselData } from '../../constant/imgCarouselData';
import { OPEN_VIDEO } from '../../redux/types/CarouselType/CarouselType';
import TrailerMovie from '../TrailerCarousel/TrailerMovie';
import { movieService } from '../../services/movieService';

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
    var moment = require("moment");
    const [listMovies, setListMovies] = useState([])
    useEffect(() => {
        movieService
            .listMovie()
            .then((result) => {
                setListMovies(result.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    let [codeMovie, setCodeMovie] = useState(0);
    let [detailMovie, setDetailMovie] = useState([]);
    let [cinema, setCinema] = useState([]);
    let [dayMovie, setDayMovie] = useState([]);
    let [hoursMovie, setHoursMovie] = useState([]);

    useEffect(() => {
        if (codeMovie !== 0) {
            movieService
                .detailMovie(codeMovie)
                .then((result) => {
                    setDetailMovie(result.data.content.heThongRapChieu);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [codeMovie]);

    // useEffect (() => { 
    //     if( cinema !== ''){
    //         console.log(cinema)
    //         let ha =  detailMovie.map((rap) => { 
    //             return rap.cumRapChieu.map( (cumrap) => { 
    //                return cumrap.find((ten)=>{
    //                 return ten.maCumRap === cinema
    //                })
    //              })
    //          })
    //          console.log(ha);
    //     }
    //  },[cinema])

    let handleMovie = (e) => {
        let codeMovie = parseInt(e.target.value);
        console.log(codeMovie)
        setCodeMovie(codeMovie);
        setDetailMovie([])
    };

    let handleCinema = (e) => {
        let cinema = e.target.value
        console.log(cinema);
        setCinema(cinema)
    }
    let handleDay = (e) => {
        let dayMovie = e.target.value
        setDayMovie(dayMovie)
    }

    let handleHours = (e) => {
        let hoursMovie = e.target.value
        setHoursMovie(hoursMovie)
    }

    let renderMovies = () => {
        return listMovies.map((movies, index) => {
            return <option key={index} value={movies.maPhim}>{movies.tenPhim}</option>
        })
    }

    let renderCinema = () => {
        if (detailMovie.length === 0) {
            return <option >
                Phim Chưa Được Chiếu
            </option>
        }
        else {
            return detailMovie.map((rap) => {
                return rap.cumRapChieu.map((theaterCluster, index) => {
                    return (
                        <option value={theaterCluster.maCumRap} key={index}>
                            {theaterCluster.tenCumRap}
                        </option>
                    );
                });
            });

        }

    }
    let renderMovieDay = () => {
        return detailMovie.map((rap) => {
            return rap.cumRapChieu.map((cumRap) => {
                if(cinema !== cumRap.maCumRap){
                    return null
                }
           
                    return cumRap.lichChieuPhim.map((lich, index) => {
                        return <option value={lich.ngayChieuGioChieu} key={index}>
                            {moment(lich.ngayChieuGioChieu).format("DD-MM-yyyy")}{lich.maLichChieu}
                        </option>
                    })
                
            })
        })
    }
    let renderMovieHouse = () => {
        if (dayMovie.length !== 0) {
            return <option value={moment(dayMovie).format("hh:mm A")} key={dayMovie}>
                {moment(dayMovie).format("hh:mm A")}
            </option>
        }

    }


    let renderBookTicket = () => {
        if (hoursMovie.length === 0) {
            return <button className='btn-oder-none' disabled={true}>Đặt Vé</button>
        }
        else {
            return <button className=' btn-book-ticket'>Đặt Vé</button>
        }
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
            <div className='booking d-none d-md-block'>
                <div className="booking-movie d-flex flex-column flex-lg-row">
                    <div className="col-md-12 col-lg-6 py-1">
                        <Form className='d-flex'>
                            <Form.Group className="col-md-8 col-lg-8 px-1">
                                <Form.Select id="disabledSelect"
                                    defaultValue={'default'}
                                    onChange={handleMovie}>
                                    <option>Chọn Phim</option>
                                    {renderMovies()}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="col-md-4 col-lg-4 px-1">
                                <Form.Select id="disabledSelect"
                                    defaultValue={'default'}
                                    onChange={handleCinema} >
                                    <option>Chọn Rạp</option>
                                    {renderCinema()}
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </div>
                    <div className="col-md-12 col-lg-6 py-1">
                        <Form className='d-flex'>
                            <Form.Group className="col-md-4 col-lg-4 px-1">
                                <Form.Select id="disabledSelect"
                                    defaultValue={'default'}
                                    onChange={handleDay} >
                                    <option>Chọn Ngày</option>
                                    {renderMovieDay()}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="col-md-4 col-lg-4 px-1">
                                <Form.Select id="disabledSelect"
                                    defaultValue={'default'}
                                    onChange={handleHours} >
                                    <option>Chọn Giờ</option>
                                    {renderMovieHouse()}
                                </Form.Select>
                            </Form.Group>
                            <div className='col-md-4 col-lg-4 px-1'>
                                {renderBookTicket()}
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CarouselMovie;