import React, { Component } from 'react';
import { connect } from 'react-redux';

import { store } from '../../store';
import { DetailFilmInfo } from '../../components';
import { getFilmById, getFilmsByQuery, searchBy } from '../../services/api';
import { getFilmDetails, getFilms } from '../../actions';

export class FilmDetailsContainer extends Component {
  fetchData = async (filmId) => {
    try {
      const filmDetail = await getFilmById(filmId);

      const { data: filmsByGenre } = await getFilmsByQuery({
        searchBy: searchBy.GENRES,
        search: filmDetail.genres[0],
      });

      store.dispatch(getFilmDetails(filmDetail));
      store.dispatch(getFilms(filmsByGenre));
    } catch (error) { }
  };

  async componentDidMount() {
    await this.fetchData(this.props.match.params.filmId);
  }

  render() {
    const { filmInfo, filmsList } = this.props;

    if (filmInfo.id)
      return <DetailFilmInfo tailFilmInfo filmInfo={filmInfo} filmsTheSameGenre={filmsList} />;

    return <h1>Spinner</h1>;
  }
}

const mapStateToProps = (state) => ({
  filmInfo: state.filmDetails,
  filmsList: state.films,
});

const mapDispatchToProps = (dispatch, ownProps) => { };

export const filmDetailsContainer = connect(
  mapStateToProps,
  null,
)(FilmDetailsContainer);
