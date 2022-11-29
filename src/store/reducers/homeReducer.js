import { ADD_POSTS } from "../types";

const initialState = {
    posts: [
       {
            id: 1,
            user: {
                name: 'powerlook',
                location: 'Chaandrashila Peak',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU'
            },
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU',
            likedBy: {
                images: [
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
                ],
                name: 'Prezrohit',
                other: 88,
            },
            description: 'Har Har Mahadev asdf asdf adf adf adsf asdf asdf',
            commentsMeta: {
                totalComments: 24,
                comments: [
                    {
                        id: 1,
                        user: {
                            name: 'powerlook',
                        },
                        message: 'asdfsadf'
                    },
                    {
                        id: 1,
                        user: {
                            name: 'powerlook',
                        },
                        message: 'asdfsadf'
                    }
                ]
            }
       },
       {
            id: 2,
            user: {
                name: 'powerlook',
                location: 'Chaandrashila Peak',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU'
            },
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU',
            likedBy: {
                images: [],
                name: 'Prezrohit',
                other: 88,
            },
            description: 'Har Har Mahadev asdf asdf adf adf adsf asdf asdf',
            commentsMeta: {
                totalComments: 24,
                comments: [
                    {
                        id: 1,
                        user: {
                            name: 'powerlook',
                        },
                        message: 'asdfsadf'
                    },
                    {
                        id: 1,
                        user: {
                            name: 'powerlook',
                        },
                        message: 'asdfsadf'
                    }
                ]
            }
        }
    ]
}

export function homeReducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case ADD_POSTS: {
            return Object.assign({...state}, {posts: payload})
        }
        default: 
            return state;
    }
}