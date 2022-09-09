import { createSlice } from "@reduxjs/toolkit";
import more1 from "../../assests/img/more1.png"
import more12x from "../../assests/img/more1@2x.png"
import more2 from "../../assests/img/more2.png"
import more22x from "../../assests/img/more2@2x.png"
import more3 from "../../assests/img/more3.png"
import more32x from "../../assests/img/more3@2x.png"
const moreSlice = createSlice({
    name: "moreList",
    initialState: {
        more: [
            {
                img: more1,
                img2x: more12x,
                text: "PS5"
            },
            {
                img: more2,
                img2x: more22x,
                text: "PS VR"
            },
            {
                img: more3,
                img2x: more32x,
                text: "PS2"
            },
        ],
        status: "idle",
        error: null,
    },
    reducers: {
        
    },
})

export default moreSlice.reducer;