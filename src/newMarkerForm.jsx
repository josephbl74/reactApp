export function newMarkerForm(){
    return(
        <form onSubmit={handleSubmit} className="new-marker-form">
            <div className="form-row">
                <h3 htmlFor="marker">New Marker</h3>
                {/* marker's title input */}
                <label htmlFor="title">Title</label>
                <input 
                    value={newMarker}
                    onChange={e => setNewMarker(e.target.value)}
                    type="text"
                    id="marker "
                />
                <br></br>
            </div>
            <button className="btn">Add+</button>
        </form>
    )
}