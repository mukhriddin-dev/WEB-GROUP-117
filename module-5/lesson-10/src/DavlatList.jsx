function DavlatList({ davlats, handleRemoveDavlat }) {
console.log(davlats)

    return (
      <ul>
        {davlats.map((davlat) => (
          <li key={davlat} onClick={() => handleRemoveDavlat(davlat)}>
            {davlat}
          </li>
        ))}
      </ul>
    );
  }


export default DavlatList;