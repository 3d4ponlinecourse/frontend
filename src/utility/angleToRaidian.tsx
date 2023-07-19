import React from 'react'

const angleToRaidian = (angle:number):number => {
  return (
    angle * Math.PI/180
  )
}

export default angleToRaidian