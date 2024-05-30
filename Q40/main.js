// define the make_album function
function make_album(artist_namme, album_title, tracks) {
    var album = {
        artist: artist_namme,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three functions creating 3 veriables  with diferent value
var album1 = make_album("Mehtab", "Album title 1");
var album2 = make_album("Altaf", "Album title 2");
// calling a make_album function with third perameter
var album3 = make_album("Zeeshan", "Album title 3", 10);
// printing values our object createdby function
console.log(album1);
console.log(album2);
console.log(album3);
