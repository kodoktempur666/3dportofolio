import React from 'react'

const Button = ({ text, className, id, href, download}) => {
  const handleClick = (e) => {
    if (href) return;
    e.preventDefault()
    const target = document.getElementById('counter')

    if(target && id) {
        const offset = window.innerHeight * .15

        const top = target.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <a 
    href={href || '#'}
    download={download || undefined}
    onClick={handleClick}
    className={`${className ?? ''} cta-wrapper`}>
        <div className='cta-button group'>
            <div className='bg-circle' />
            <p className='text'>{text}</p>
            <div className='arrow-wrapper'>
                <img src="/images/arrow-down.svg" alt="arrow" />
            </div>
        </div>
    </a>
  )
}

export default Button