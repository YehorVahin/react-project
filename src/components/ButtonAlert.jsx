export default function ButtonAlert() {
    const handleClick = () => alert('OUCH')
    return(
        <button onClick={handleClick}>
            Alert
        </button>
    )
}