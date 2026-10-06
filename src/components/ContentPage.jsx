const ContentPage = (props) => {
    const {isLoggedIn} = props;

    /* if(!isLoggedIn) {
        return <h2>Контент недоступний</h2>
    }

    return <h2>Контент</h2> */
    return (
        <div>
            <h2>{isLoggedIn ? 'Контент' : 'Контент недоступний'}</h2>
            {isLoggedIn && <h2>Контент</h2>}
        </div>
    )
};
export default ContentPage;