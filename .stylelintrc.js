module.exports = {
  extends: ['stylelint-config-recommended-scss'],
  rules: {
    'color-no-invalid-hex': [
      true,
      {
        message: (hex) => `"${hex}" is invalid hex color!`,
      },
    ],
  },
}
