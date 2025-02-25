function gramophone(band, album, song){
    let sec = band.length * album.length * song.length / 2;
    let rotations = Math.ceil(sec / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);
}

//(albumName.length * bandName.length) * song-name.length / 2
//`The plate was rotated {rotations} times.`

gramophone('Black Sabbath', 'Paranoid', 'War Pigs') 
//The plate was rotated 167 times.
gramophone('Rammstein', 'Sehnsucht', 'Engel') 
//The plate was rotated 81 times.