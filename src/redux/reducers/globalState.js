import {UpdateSiteKeyword} from "../actions/index.js";

export const globalCrossStateObject = {
    showNewPostForm: false,
    PostList: []
}

export default function (state = globalCrossStateObject, action) {
    switch(action.type) {
        case UpdateSiteKeyword: {
            return action.payload;
        }
        default: 
            return state;
    }
}