import './Tooltips.css'

const ToolTip = ({ children, label }) => {
    return (
        <div className="tooltip">
            {children}
            <span className="tooltiptext">{label}</span>
        </div>
    );
}

export { ToolTip };