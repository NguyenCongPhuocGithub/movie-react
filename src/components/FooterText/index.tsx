import React from 'react'

interface FooterTextType {
    label: string;
}

const FooterText = ({label}:FooterTextType) => {
  return (
    <p>© {label} All Right Reserved</p>
  )
}

export default FooterText