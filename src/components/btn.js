import React from 'react';
import { Link } from 'react-router-dom'

export const CustomBtn=({label, style, className=""})=> {
  return (
      <button className={` btn ${className}`} style={{ ...style}}>{label}</button>
  )
}
export const CustomLink = ({label, to, className=""})=> {
    return (
        <Link to={to} className={`btn ${className}`}>{label}</Link>
    )
  }
