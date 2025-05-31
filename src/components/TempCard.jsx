function TempCard(props) {
    return (
        <>
            <div className="app">
                <h1>Temperature</h1>
                <div className="temperature">{props.temperature}°C</div>
                <div className="buttons">
                    <button onClick={props.decreaseTemperature}>Decrease</button>
                    <button onClick={props.increaseTemperature}>Increase</button>
                </div>
            </div>
        </>
    );
}

export default TempCard;
