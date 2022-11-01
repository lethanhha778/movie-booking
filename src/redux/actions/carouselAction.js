import axios from 'axios'
import { LAY_DANH_SACH_BANNER } from '../types/CarouselType/CarouselType';
import { URL_API, TOKEN } from "../util/setting";


export const carouselAction = () => {
    return (dispatch2) => {
        let promise = axios({
            url: `${URL_API}/QuanLyPhim/LayDanhSachBanner`,
            method: "get",
            headers: {
                'TokenCybersoft': TOKEN
            }
        })
        promise.then((result) => {
            let acction2 = {
                type: LAY_DANH_SACH_BANNER,
                mangBanner: result.data.content
            }
            dispatch2(acction2)
        })
        promise.catch((error) => {
            console.log(error);
        })
    }
}