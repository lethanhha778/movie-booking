import axios from 'axios'
import { TOKEN, URL_API, groupID } from '../../util/setting'
import { LAY_DANH_SACH_PHIM,LAY_CHI_TIET_PHIM } from '../types/movieType'





export const listMovieAction = () => {
    return (dispatch2) => {
        let promise = axios({
            url: `${URL_API}/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`,
            method: "get",
            headers: {
                'TokenCybersoft': TOKEN
            }
        })
        promise.then((result) => {
            let acction2 = {
                type: LAY_DANH_SACH_PHIM,
                mangPhim: result.data.content
            }
            dispatch2(acction2)
        })
        promise.catch((error) => {
            console.log(error);
        })
    }
}
export const detailMovieAction = (codeMovie) => {
    return (dispatch2) => {
        let promise = axios({
            url: `${URL_API}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${codeMovie}`,
            method: "get",
            headers: {
                'TokenCybersoft': TOKEN
            }
        })
        promise.then((result) => {
            let acction2 = {
                type: LAY_CHI_TIET_PHIM,
                phim: result.data.content
            }
            dispatch2(acction2)
        })
        promise.catch((error) => {
            console.log(error);
        })
    }
}