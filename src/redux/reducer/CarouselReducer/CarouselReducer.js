import { OPEN_VIDEO, CLOSE_VIDEO } from "../../types/CarouselType/CarouselType"



const initialState = {
    open: false,
    linkYouTube:''
}

export const CarouselReducer = (state = initialState, action) => {
    switch (action.type) {
   
        case OPEN_VIDEO:
             return { open: action.payload.open, linkYouTube: action.payload.linkYouTube };
        case CLOSE_VIDEO:
            return { open: action.payload.open, linkYouTube: "" }

        default:
            return state
    }
}
