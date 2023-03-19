
function SeachHeader({search}) {

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        search('can');
    }

    return ( <div className="searchDiv">
        <form onSubmit ={handleFormSubmit}> 
            <label>Ne arıyorsunuz?</label>
            <input />
        </form>
    </div> );
}

export default SeachHeader;