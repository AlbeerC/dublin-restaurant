import './Button.css'

function Button ( {children} ) {

    return (
        <button className='main-button'>{children}</button>
    )
}

export default Button