module.exports = {
  extends: '@mate-academy/eslint-config-react-typescript',
  rules: {
    'arrow-body-style': 0,
    'object-curly-newline': [2, {
      'ObjectExpression': {
        'consistent': true,
        'minProperties': 5,
      },
    }],
  }
};
