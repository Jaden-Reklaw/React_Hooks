function Button(props) {
    const handleClick = () => props.onClickFunc(props.increment);

    return (
      <div>
        <button onClick={handleClick}>
            +{props.increment}
        </button>
      </div>
    );
  }
  
  export default Button;