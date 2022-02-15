import React from 'react'

import {Button} from './style'

const RightArrow = ({ className, style, onClick }) => {
  return (
    <Button style={{ ...style }} onClick={onClick} >
        <img src="/images/rightArrow.png" alt="" />
    </Button>
  )
}

export default RightArrow