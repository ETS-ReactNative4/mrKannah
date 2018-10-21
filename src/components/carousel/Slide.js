import React from 'react'
import PropTypes from 'prop-types'
import Button from "@material-ui/core/Button";

const titleStyles = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: 'white',
  textAlign: 'center'
};

function Slide (props) {
  const {
    id,
    title,
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
        <p style={titleStyles}>{title}</p>
        {content}
        {link && 
        <div style={{marginTop: '10px', textAlign: 'center'}}><Button
          variant='contained'
          onClick={() => window.open(link, '_blank')}
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
