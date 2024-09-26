import React, { useState, useEffect } from 'react';

const Icon = ({ name, style = {} }) => {
  return(
    <i className={`ti ti-${name}`} style={style}></i>
  )
}

export { Icon };
