import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {

  return (
    <div className="header-container">
      <div>
        {props.title}
      </div>
        
    </div>
)};

Title.defaultProps = {
  title: '中科智慧农业谷知识库构建工具',
};

Title.propTypes = {
  title: PropTypes.string,
}

export default Title;