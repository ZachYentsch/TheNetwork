import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class AnimesService {
    async getAnimes() {
        const res = await api.get('api/ads')
        logger.log(res.data)
        AppState.animes = res.data
    }
}

export const animesService = new AnimesService()