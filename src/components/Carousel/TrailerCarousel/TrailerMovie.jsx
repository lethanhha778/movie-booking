import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_VIDEO } from '../../../redux/types/CarouselType/CarouselType';
import './trailer.css'

export default function TrailerMovie() {

    const link = useSelector((state) => state.CarouselReducer)
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch({ type: CLOSE_VIDEO, payload: { open: false } });
    };

    return (
        <Modal size="lg"
            show={link.open}
            onHide={handleClose}
        >
            <iframe src={link.linkYouTube}
                allowFullScreen
                frameBorder="0"
                allow="autoplay"
                title="trailer "></iframe>
        </Modal>

    )
}
