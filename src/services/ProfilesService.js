import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class ProfilesService {
    async getProfile(id) {
        const res = await api.get(`api/profiles/${id}`)
        logger.log('profile Res', res.data)
        AppState.profile = res.data
    }

    async editProfile(updatedProfile, query = '') {
        const res = await api.put('api/profiles' + query, updatedProfile)
        logger.log(res.data)
        AppState.profile = new Profile(res.data)
    }
}

export const profilesService = new ProfilesService()