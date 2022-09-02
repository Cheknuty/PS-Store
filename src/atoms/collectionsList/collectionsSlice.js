import { createSlice } from "@reduxjs/toolkit";
import coll1 from "../../assests/img/coll1.jpg"
import coll12x from "../../assests/img/coll1@2x.jpg"
import coll2 from "../../assests/img/coll2.jpg"
import coll22x from "../../assests/img/coll2@2x.jpg"
import coll3 from "../../assests/img/coll3.jpg"
import coll32x from "../../assests/img/coll3@2x.jpg"
import coll4 from "../../assests/img/coll4.jpg"
import coll42x from "../../assests/img/coll4@2x.jpg"
import coll5 from "../../assests/img/coll5.jpg"
import coll52x from "../../assests/img/coll5@2x.jpg"
const collectionsSlice = createSlice({
    name: "collectionsList",
    initialState: {
        collections: [
            { img: coll1, img2x: coll12x },
            { img: coll2, img2x: coll22x },
            { img: coll3, img2x: coll32x },
            { img: coll4, img2x: coll42x },
            { img: coll5, img2x: coll52x },
        ],
        status: "idle",
        error: null,
    },
    reducers: {
        
    },
})

export default collectionsSlice.reducer;