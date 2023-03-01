import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{   },
    reducers:{
        cacheResults:(state,action) => {
            state = Object.assign(state,action.payload);
        },
    },
});

export const {cacheResults} = searchSlice.actions;

export default searchSlice.reducer;

/**
 * Cache :
 *  time complexity to search in array = O(n)
 *  time complexity to search in Object = O(1)
 *  We can also use new Map() also
 * [i, ip, iph, iphone]
 * 
 * {
 *      i:
 *      ip:
 *      iph:
 *      iphone:
 * }
 */