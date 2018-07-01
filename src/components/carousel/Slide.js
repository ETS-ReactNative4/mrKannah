import React from 'react'
import PropTypes from 'prop-types'
import Button from "@material-ui/core/Button";

function Slide (props) {
  const {
    id,
    content,
    header,
    headerBackColor,
    style,
    link,
    label
  } = props;
  
  const slideID = `slide${id}`;
  return (
    <div id={slideID} style={style}>
      <div style={{height: '80px', backgroundColor: headerBackColor}}>{header}</div>
      <div style={{padding: '10px'}}>
        {content}
        {link && 
        <div style={{marginTop: '10px', textAlign: 'center'}}><Button
          variant='raised'
          onClick={() => window.open(link, '_newtab')}
        >
          {label || 'Learn more'}
        </Button></div>}
      </div>
    </div>
  )
}

Slide.propTypes = {
  header: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
  headerBackColor: PropTypes.string,
  link: PropTypes.string,
  label: PropTypes.string,
  content: PropTypes.node.isRequired,
}

export default Slide;
