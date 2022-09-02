import { createSlice } from "@reduxjs/toolkit";
import gen1 from "../../assests/img/gen1.jpg"
import gen12x from "../../assests/img/gen1@2x.jpg"
import gen2 from "../../assests/img/gen2.jpg"
import gen22x from "../../assests/img/gen2@2x.jpg"
import gen3 from "../../assests/img/gen3.jpg"
import gen32x from "../../assests/img/gen3@2x.jpg"
import gen4 from "../../assests/img/gen4.jpg"
import gen42x from "../../assests/img/gen4@2x.jpg"
import gen5 from "../../assests/img/gen5.jpg"
import gen52x from "../../assests/img/gen5@2x.jpg"
import gen6 from "../../assests/img/gen6.jpg"
import gen62x from "../../assests/img/gen6@2x.jpg"
import gen7 from "../../assests/img/gen7.jpg"
import gen72x from "../../assests/img/gen7@2x.jpg"
import gen8 from "../../assests/img/gen8.jpg"
import gen82x from "../../assests/img/gen8@2x.jpg"
import gen9 from "../../assests/img/gen9.jpg"
import gen92x from "../../assests/img/gen9@2x.jpg"
import gen10 from "../../assests/img/gen10.jpg"
import gen102x from "../../assests/img/gen10@2x.jpg"
import gen11 from "../../assests/img/gen11.jpg"
import gen112x from "../../assests/img/gen11@2x.jpg"
import gen12 from "../../assests/img/gen12.jpg"
import gen122x from "../../assests/img/gen12@2x.jpg"
const genresSlice = createSlice({
    name: "genresList",
    initialState: {
        genres: [
            { img: gen1, img2x: gen12x },
            { img: gen2, img2x: gen22x },
            { img: gen3, img2x: gen32x },
            { img: gen4, img2x: gen42x },
            { img: gen5, img2x: gen52x },
            { img: gen6, img2x: gen62x },
            { img: gen7, img2x: gen72x },
            { img: gen8, img2x: gen82x },
            { img: gen9, img2x: gen92x },
            { img: gen10, img2x: gen102x },
            { img: gen11, img2x: gen112x },
            { img: gen12, img2x: gen122x },
        ],
        status: "idle",
        error: null,
    },
    reducers: {
        
    },
})

export default genresSlice.reducer;