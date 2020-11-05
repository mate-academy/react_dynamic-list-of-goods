import PropTypes from 'prop-types';

const getInfo = url => fetch(`${url}`)
  .then((response) => {
    if (!response.ok) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject(`${response.status} - ${response.statusText}`);
    }

    return response.json();
  });

getInfo.propTypes = {
  url: PropTypes.string.isRequired,
};

export default getInfo;
