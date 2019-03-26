import { httpService } from "./HTTPService";

class Movies {
    getAll() {
        return httpService.get('movies');
    }

    createMovie(movie) {
        return httpService.post('movies', movie)
    }

    get(id) {
        return httpService.get('movies/' + id)
    }

    edit(id, body) {
        return httpService.put('movies/'+ id, body)
    }

    delete(id) {
        return httpService.delete('movies/'+id);
    }
}

export const moviesService = new Movies();