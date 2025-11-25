function Content ({variant, ...props}) {
    const name = variant ? `content-${variant}`: '';
    return (
        <div className = {name} {...props}></div>
    )
}
export default Content