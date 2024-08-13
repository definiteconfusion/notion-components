import './Containers.css'

const Vstack = ({ children, control, padding }) => {
    return (
        <div className="vstack-main" style={{ alignItems: control }}>
            {children.map((child, index) => (
                <div key={index} style={{ marginBlock: padding }}>
                    {child}
                </div>
            ))}
        </div>
    );
}

const Hstack = ({ children, control, padding }) => {
    return (
    <div className="hstack-main" style={{alignItems: control}}>
        {children.map((child, index) => (
                <div key={index} style={{ marginInline: padding,  marginBlock: padding}}>
                    {child}
                </div>
            ))}
    </div>
    );
}

export { Vstack, Hstack };