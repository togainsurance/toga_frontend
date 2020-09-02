const selectStyle = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: 'fff',
    color: 'black',
    borderColor: isFocused ? /* istanbul ignore next */ '#6b1587' : 'none',
    outline: 'none',
  }),
  container: (styles) => ({
    ...styles,
    minWidth: '100%',
    outline: 'none',
    borderColor: 'none',
    color: 'black',
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    /* istanbul ignore next */
    const color = '#6b1587';
    /* istanbul ignore next */
    return {
      ...styles,
      backgroundColor: isFocused || isSelected ? color : 'white',
      color: isFocused || isSelected ? '#fff' : color,
      cursor: isDisabled ? 'not-allowed' : 'default',
      textTransform: 'capitalize',
    };
  },
  placeholder: (styles) => ({
    ...styles,
    color: 'black',
  }),

  singleValue: (styles) => {
    /* istanbul ignore next */

    return {
      ...styles,
      color: 'black',
      textTransform: 'capitalize',
    };
  },
  dropdownIndicator: (styles, { isFocused, isSelected }) => {
    const color = '#6b1587';

    return { ...styles, color: isFocused || isSelected ? 'black' : color };
  },
  indicatorSeparator: (styles) => {
    /* istanbul ignore next */
    return {
      ...styles,
      color: 'black',
    };
  },

  menu: (styles) => {
    /* istanbul ignore next */
    return {
      ...styles,
      zIndex: 9999,
    };
  },
};

export default selectStyle;
