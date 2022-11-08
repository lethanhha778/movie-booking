import axios from 'axios'
import { URL_API, groupID, TOKEN } from "../util/setting";

export class TheaterServices {
    listTheater = () => {
        return axios({
            url: `${URL_API}/QuanLyRap/LayThongTinHeThongRap`,
            method: "get",
            headers: {
                'TokenCybersoft': TOKEN
            }
        });
    };
    listCinema = () => {
        return axios({
            url: `${URL_API}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${groupID}`,
            method: "get",
            headers: {
                'TokenCybersoft': TOKEN
            }
        });
    }


}

export const theaterServices = new TheaterServices();