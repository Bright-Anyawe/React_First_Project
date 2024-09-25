function Button({text='Click me!', color='blue', fontSize='12', handleClick}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };
  return (
    <button
      onClick={() => handleClick("https://www.theodinproject.com")}
      style={buttonStyle}
    >
      {text}
    </button>
  );
}

function RenderButtonApp() {

    const handleButtonClick = (url) => {
    window.location.href = url;
}

  return (
    <div>
      <Button handleClick={handleButtonClick} />
      <Button text="Don't click me!" color="red" />
      <Button fontSize="20" />
    </div>
  );
}

export default RenderButtonApp;
