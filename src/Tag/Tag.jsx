import './Tag.css'

const Itag = ({ title, mode }) => {
    return (
        <div className={`tag-main ${mode}`}>
            <p className="tag-title">
                {title}
            </p>
        </div>
    )
}

export { Itag }