import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TabButton } from '../../components/common/tab-buttons-section/tab-button/index';

import { getSortType, getSearchType } from '../../actions';

class TabButtonContainer extends Component {
    render() {
        const { tabButtonTitle, clickTabButton, index, type, sortBy, searchBy } = this.props;
        let buttonType = type == "SEARCH BY" ? searchBy : sortBy;

        buttonType = buttonType.replace('_', ' ');
        return (
            <TabButton
                title={tabButtonTitle}
                onClickButton={clickTabButton}
                rightRadius={!!index}
                type={buttonType}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    searchBy: state.searchBy,
    sortBy: state.sortBy
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        clickTabButton: () => {
            if (ownProps.type == "SEARCH BY") {
                dispatch(getSearchType(ownProps.tabButtonTitle));
            } else {
                dispatch(getSortType(ownProps.tabButtonTitle));
            }
        }
    };
};

export const tabButtonContainer = connect(mapStateToProps, mapDispatchToProps)(TabButtonContainer);
