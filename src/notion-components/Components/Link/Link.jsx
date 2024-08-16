import './Link.css'

const Link = ({ children, destination, color, mode, className }) => {
    return (
    <a href={destination} className={`link-main  back-${mode} ${className}`} style={{color: color}}>
        {children}
    </a>
  );
};

export { Link };