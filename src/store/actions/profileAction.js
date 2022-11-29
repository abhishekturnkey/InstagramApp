import { ADD_FRIEND_PROFILE } from "../types/friendType"
import { ADD_PROFILE } from "../types/profileType"

export const addProfile = (profile) => {
    return {
        type: ADD_PROFILE,
        payload: profile
    }
}

export const friendProfile = (profile) => {
    return {
        type: ADD_FRIEND_PROFILE,
        profile: profile
    }
}