import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { theaterServices } from '../../services/theaterService';
import './index.css'


export default function Theater() {
    var moment = require("moment");

    const [listsTheater, setListsTheater] = useState([])
    const [listHeThongRap, setListHeThongRap] = useState([])

    useEffect(() => {
        theaterServices
            .listTheater()
            .then((result) => {
                // console.log(result.data.content);
                setListsTheater(result.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        theaterServices
            .listCinema()
            .then((result) => {
                // console.log(result.data.content);
                setListHeThongRap(result.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    let renderHeThongRap = () => {
        return listsTheater.map((heThongRap, index) => {
            // console.log(rap.logo)
            return <Nav.Item key={index}>
                <Nav.Link eventKey={heThongRap.maHeThongRap}>
                    <img style={{ width: "50px", height: "50px" }} src={heThongRap.logo} alt={heThongRap.maHeThongRap}
                    />
                </Nav.Link>
            </Nav.Item>
        })
    }

    let renderCumRapTheoRap = () => {
        return listHeThongRap.map((cinemar, index) => {
            return <Tab.Pane eventKey={cinemar.maHeThongRap} key={index}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="bhd-star-cineplex-pham-hung">
                    <Row>
                        <Col sm={5} className='cinema-tabs'>
                            <Nav variant="pills" className="flex-column">
                                {cinemar.lstCumRap.map((cumRap, index) => {
                                    return <Nav.Item key={index}>
                                        <Nav.Link eventKey={cumRap.maCumRap}>{cumRap.tenCumRap}</Nav.Link>
                                    </Nav.Item>
                                })}
                            </Nav>
                        </Col>
                        <Col sm={7} className='cinema-tabs'>
                            <Tab.Content>
                                {cinemar.lstCumRap.map((cumRap, index) => {
                                    return <Tab.Pane eventKey={cumRap.maCumRap} key={index}>
                                        {cumRap.danhSachPhim.map((phim) => {
                                            // console.log(phim.lstLichChieuTheoPhim)
                                            return <div key={phim.maPhim}>
                                                <div className='d-flex'>
                                                    <img style={{ width: "50px", height: "50px" }} src={phim.hinhAnh} alt="" />
                                                    <p className='fw-bold' >{phim.tenPhim}</p>
                                                </div>
                                                <div>
                                                    {phim.lstLichChieuTheoPhim.map((lichChieu, index) => {
                                                        // console.log(lichChieu.ngayChieuGioChieu);
                                                        return <div key={index}>
                                                            <span>Ngày Chiếu: {moment(lichChieu.ngayChieuGioChieu).format("DD-MM-yyyy")}</span>
                                                             <button style={{ display: 'block' }} >
                                                                {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
                                                            </button>
                                                        </div>
                                                    })}
                                                </div>

                                            </div>
                                        })}
                                    </Tab.Pane>
                                })}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Tab.Pane>
            // })
        })
    }
    return (
        <div className="container-cinema ">
            <Tab.Container id="left-tabs-example" defaultActiveKey="BHDStar">
                <Row>
                    <Col sm={12} lg={2}>
                        <Nav variant="pills" className="flex-row flex-lg-column">
                            {renderHeThongRap()}
                        </Nav>
                    </Col>
                    <Col sm={12} lg={10}>
                        <Tab.Content>
                            {renderCumRapTheoRap()}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}
