import { LAY_DANH_SACH_PHIM } from "../types/movieType"


const initialState = {
    mangPhim: [
        
    ]
}


export  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case LAY_DANH_SACH_PHIM:
            state.mangPhim = action.mangPhim
            return {...state}
        default:
            return state
    }
}