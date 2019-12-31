import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DetailFilmInfo } from '../../components';
import { fetchFilmDetailsData } from '../../services';

export class FilmDetailsContainer extends Component {
  componentDidMount() {
    fetchFilmDetailsData(this.props.match.params.filmId);
  }

  render() {
    const { filmInfo, filmsList } = this.props;

    if (filmInfo.id)
      return <DetailFilmInfo filmInfo={filmInfo} filmsTheSameGenre={filmsList} />;

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
