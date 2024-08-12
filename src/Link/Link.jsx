import './Link.css'

const Link = ({ children, destination, color, mode }) => {
    return (
    <a href={destination} className={`link-main  back-${mode}`} style={{color: color}}>
        {children}
    </a>
  );
};

export default Link;