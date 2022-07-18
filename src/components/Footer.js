import React from 'react'

function Footer() {
const date = new Date().getFullYear();

  return (
    <footer>
      <p className='coypright'>Copyright@ {date}</p>
    </footer>
  )
}

export default Footer