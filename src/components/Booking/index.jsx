import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form';
import { movieService } from '../../services/movieService';
import '../Booking/style.css'
import { listMovieAction } from '../../redux/actions/movieAction';


export default function Booking() {
    // let {mangPhim} = useSelector(state => state.movieReducer)
    // let dispatch = useDispatch()

    // useEffect(() => {
    //     getAPI()
    // }, [])
    // console.log(mangPhim)

    // let getAPI = ()=>{
    //     let acction = listMovieAction('GP13')
    //     dispatch(acction)
    // }

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
        console.log(dayMovie)
    }

    let handleHours = (e) => {
        let hoursMovie = e.target.value
        setHoursMovie(hoursMovie)
        console.log(hoursMovie)
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
    let renderMovieDay = () => {
        return detailMovie.map((rap) => {
            return rap.cumRapChieu.map((cumRap) => {
                if (cinema !== cumRap.maCumRap) {
                    return null
                }
                return cumRap.lichChieuPhim.map((lich, index) => {
                    return <option value={lich.ngayChieuGioChieu} key={index}>
                        {moment(lich.ngayChieuGioChieu).format("DD-MM-yyyy")}
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
        return null
    }


    let renderBookTicket = () => {
        if (hoursMovie.length === 0 || hoursMovie === 'default') {
            return <button className='btn-oder-none' disabled={true}>Đặt Vé</button>
        }
        return <button className=' btn-book-ticket'>Đặt Vé</button>
    }
    return (
        <div className='booking d-none d-md-block'>
            <div className="booking-movie d-flex flex-column flex-lg-row">
                <div className="col-md-12 col-lg-6 py-1">
                    <Form className='d-flex'>
                        <Form.Group className="col-md-8 col-lg-8 px-1">
                            <Form.Select id="disabledSelect"
                                defaultValue={'default'}
                                onChange={handleMovie}
                                className='fw-bold' >
                                <option value={'default'}>Chọn Phim</option>
                                {renderMovies()}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="col-md-4 col-lg-4 px-1">
                            <Form.Select id="disabledSelect"
                                defaultValue={'default'}
                                onChange={handleCinema}
                                className='fw-bold'  >
                                <option value={'default'}>Chọn Rạp</option>
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
                                onChange={handleDay}
                                className='fw-bold'  >
                                <option value={'default'}>Chọn Ngày</option>
                                {renderMovieDay()}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="col-md-4 col-lg-4 px-1 fw-bold">
                            <Form.Select id="disabledSelect"
                                defaultValue={'default'}
                                onChange={handleHours}
                                className='fw-bold' >
                                <option value={'default'}>Chọn Giờ</option>
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
    )
}
