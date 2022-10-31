
import axios from 'axios'
import { URL_API, groupID, TOKEN } from "../util/setting";

export class MovieServices {
    listMovie = () => {
        return axios({
            url: `${URL_API}/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`,
            method: "get",
            headers: {
                'TokenCybersoft': TOKEN
            }
        });
    };
    detailMovie = (codeMovie) => {
        return axios({
            url: `${URL_API}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${codeMovie}`,
            method: "get",
            headers: {
                'TokenCybersoft': TOKEN
            }
        });
    };

}

export const movieService = new MovieServices();