import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Home } from '../../components';
import { searchBy, sortBy } from '../../services';
import { getTextInputValue, getSortType } from '../../actions';
import { fetchFilmsData } from '../../services/api/helpers/films-data-helper';

class HomeContainer extends Component {

  componentDidMount() {
    if (this.props.match.params.query) {
      var keyValue = {};
      let searchParams = this.props.match.params.query.split('&');
      searchParams.forEach(element => {
        let el = element.split('=');
        keyValue[el[0]] = el[1];
      });

      fetchFilmsData(keyValue);
    } else {
      fetchFilmsData({
        searchBy: searchBy.TITLE,
        sortBY: sortBy.RELEASE_DATE,
        textInputValue: '',
      });
    }
  }

  clickSubmitButton = async () => {
    const { textInputValue, searchBy, sortBy } = this.props;
    await fetchFilmsData({ search: textInputValue, searchBy, sortBy });
  };

  render() {

    const { filmsList, textInputValue, changeTextInputValue, clickTabButton } = this.props;

    return (
      <Home
        filmsInfo={filmsList}
        onClickTabButton={clickTabButton}
        changeTextInputValue={changeTextInputValue}
        textInputValue={textInputValue}
        onClickSubmitButton={this.clickSubmitButton}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  filmsList: state.films,
  textInputValue: state.textInputValue,
  searchBy: state.searchBy,
  sortBy: state.sortBy,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeTextInputValue: (event) => {
      dispatch(getTextInputValue(event.target.value));
    },
    clickTabButton: () => {
      dispatch(getSortType(sortBy.RELEASE_DATE));
    }
  };
};

export const homeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
