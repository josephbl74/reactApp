export function markerList(markers){
    return (
        <ul className="list">
            {markers.length === 0 && "No Markers"}
            {markers.map(marker => {
                return (
                    <li key={marker.id}>
                    <label>
                        <input 
                        type="checkbox"
                        checked={marker.completed}
                        // onChange={e => toggleMarker(marker.id, e.target.checked)}
                        />
                        {marker.title}
                    </label>
                    <button
                        // onClick={() => deleteMarker(marker.id)}
                        className="btn"
                    >Delete
                    </button>
                    </li>
                )
            })}
        </ul>
    )
}