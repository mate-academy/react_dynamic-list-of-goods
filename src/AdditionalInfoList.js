import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Api from './Api';

export default class AdditionalInfoList extends Component {
  state = {
    productsNames: [],
    isLoading: false,
    fetchError: false,
    isClicked: false,
    iconBtn: 'add',
  };

  getProductsNames = async() => {
    if (!this.state.isClicked) {
      this.setState({
        isLoading: true,
      });
      try {
        const data = await new Api(this.props.url).getData();
        const names = data.map(name => name.name);

        this.setState({
          isLoading: false,
          isClicked: true,
          iconBtn: 'close',
        });
        switch (this.props.id) {
          case 1:
            this.setState({
              productsNames: names
                .sort((a, b) => a.localeCompare(b)).slice(0, 5),
            });
            break;
          case 2:
            this.setState({
              productsNames: data
                .filter(elem => elem.color === 'red')
                .map(item => item.name),
            });
            break;
          default:
            this.setState({
              productsNames: names,
            });
        }
      } catch (e) {
        this.setState({
          isLoading: false,
          fetchError: true,
        });
      }
    } else {
      this.setState({
        productsNames: [],
        isLoading: false,
        fetchError: false,
        isClicked: false,
        iconBtn: 'add',
      });
    }
  };

  render() {
    const { productsNames, fetchError, isLoading, iconBtn } = this.state;
    const elements = fetchError
      ? ['Error loading data...']
      : productsNames.map(elem => (
        <a key={elem} href="#!" className="collection-item">{elem}</a>
      ));

    if (isLoading) {
      return (
        <div className="preloader-wrapper small active">
          <div className="spinner-layer spinner-green-only">
            <div className="circle-clipper left">
              <div className="circle" />
            </div>
            <div className="gap-patch">
              <div className="circle" />
            </div>
            <div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>
        </div>
      );
    }

    return (
      <>
        <a
          onClick={this.getProductsNames}
          href="./#"
          className="btn-floating halfway-fab waves-effect waves-light red"
        >
          <i className="material-icons">
            {iconBtn}
          </i>
        </a>
        {elements.length > 0
        && (
          <div className="collection">
            {elements}
          </div>
        )
        }
      </>
    );
  }
}

AdditionalInfoList.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};
