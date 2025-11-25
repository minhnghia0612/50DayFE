import './Button.css'

function Button({children, variant, ...props}) {
    const name = variant ? `button-${variant}`: '';
    return(
        <div className={name} {...props}>
            {children}
        </div>
    )
}

export default Button