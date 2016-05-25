import React, { PropTypes } from 'react';
import ResultItem from 'components/ResultItem';
import classNames from 'classnames/bind';
import styles from 'css/components/main-section';
const cx = classNames.bind(styles);

const MainSection = ({ onDestroy, results}) => {
  const resultItems = results.map((result, key) => {
    return (
      <ResultItem
      key={key}
        index={key}
        result = {result}
        onDestroy={onDestroy} />);
  });
// className={cz('panel-group')}
  return (
    <div className={cx('main-section')}>
      {resultItems}
    </div>
  );
};

export default MainSection;
