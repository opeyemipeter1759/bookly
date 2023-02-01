import React from 'react';

export const CustomBtn=({label, style, className=""})=> {
  return (
      <button className={` btn ${className}`} style={{ ...style}}>{label}</button>
  )
}
