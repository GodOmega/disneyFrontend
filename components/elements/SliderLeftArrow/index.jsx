import React from 'react'

import {Button} from './style'

const LeftArrow = ({ style, onClick }) => {
  return (
    <Button style={{ ...style }} onClick={onClick} >
        <img src="/images/leftArrow.png" alt="" />
    </Button>
  )
}

export default LeftArrow