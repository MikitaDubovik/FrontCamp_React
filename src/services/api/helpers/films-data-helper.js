import { store } from "../../../store"
import { getFilmDetailsCompleted, getFilmDetailsError, getFilmDetailsStart, getFilmsCompleted, getFilmsError } from "../../../actions";
import { getFilmsStart, } from "../../../actions";
import { getFilmById, getFilmsByQuery, searchBy } from '../../../services/api';

export const fetchFilmDetailsData = async (filmId) => {
    try {
        store.dispatch(getFilmDetailsStart());

        const filmDetail = await getFilmById(filmId);

        store.dispatch(getFilmDetailsCompleted(filmDetail));

        fetchFilmsData(filmDetail);
    } catch (error) {
        store.dispatch(getFilmDetailsError());
    }
}

export const fetchFilmsData = async (searchParams) => {
    try {
        store.dispatch(getFilmsStart())
        let films;
        if (typeof searchParams !== 'object') {
            films = await getFilmsByQuery({
                searchBy: searchBy.GENRES,
                search: searchParams.genres[0],
            });
            
        } else {
            films = await getFilmsByQuery(searchParams);            
        }

        store.dispatch(getFilmsCompleted(films.data));
    } catch (error) {
        store.dispatch(getFilmsError())
    }
}