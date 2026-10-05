const SayHello = (props) => {
    const {name = "Default", age = 28} = props;
    return <h1>Hello {name} {age}</h1>
};

export default SayHello;