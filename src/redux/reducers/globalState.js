import {UpdateSiteKeyword} from "../actions/index.js";

export const globalCrossStateObject = {
    showNewPostForm: false,
    postsList: [
        {
            id: 123,
            author: 'Ryder Dale',
            title: 'Ryder\'s first post',
            likesCount: 5,
            description: 'Building my first React app!',
            imgURL: 'https://source.unsplash.com/175x175/?stuff',
            lastUpdatedDays: 4,
            commentCount: 3
        },
        {
            id: 124,
            author: 'Ryder Dale',
            title: 'Ryder\'s second post',
            likesCount: 148,
            description: 'Still building my first React app!',
            imgURL: 'https://source.unsplash.com/175x175/?people',
            lastUpdatedDays: 10,
            commentCount: 1
        }

    ]

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