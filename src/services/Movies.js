import { httpService } from "./HTTPService";
import { ENDPOINTS } from "./HTTPService";

class Movies {
    getAll() {
        return httpService.get(ENDPOINTS.MOVIES);
    }

    createMovie(movie) {
        return httpService.post(ENDPOINTS.MOVIES, movie)
    }

    get(id) {
        return httpService.get(ENDPOINTS.MOVIES + id)
    }

    edit(id, body) {
        return httpService.put(ENDPOINTS.MOVIES+'/'+ id, body)
    }

    delete(id) {
        return httpService.delete(ENDPOINTS.MOVIES+'/'+id);
    }
}

export const moviesService = new Movies();