import classes from './HighlightedQuote.module.css';

const HighlightedQuote = (props) => {
  // let id = props.id
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
      
    </figure>
    
  );
};

export default HighlightedQuote;
