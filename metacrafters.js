
const NFTs = [];


function mintNFT(title, director, actor, actress, releaseYear, type, language) {
    const NFT = {
        "title": title,
        "director": director,
        "actor": actor,
        "actress": actress,
        "releaseYear": releaseYear,
        "type": type,
        "language": language
    };
    NFTs.push(NFT);
    console.log("Minted NFT for movie: " + title);
}


function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nID:\t\t" + (i + 1));
        console.log("Title: \t\t" + NFTs[i].title);
        console.log("Director: \t" + NFTs[i].director);
        console.log("Actor: \t\t" + NFTs[i].actor);
        console.log("Actress: \t" + NFTs[i].actress);
        console.log("Release Year: \t" + NFTs[i].releaseYear);
        console.log("Type: \t\t" + NFTs[i].type);
        console.log("Language: \t" + NFTs[i].language);
        console.log('------------------------');
    }
}

function getTotalSupply() {
    console.log("\nTotal NFTs minted: " + NFTs.length);
}


mintNFT("Inception", "Christopher Nolan", "Leonardo DiCaprio", "Elliot Page", 2010, "Sci-Fi", "English");
mintNFT("The Matrix", "Lana Wachowski, Lilly Wachowski", "Keanu Reeves", "Carrie-Anne Moss", 1999, "Action", "English");
mintNFT("Interstellar", "Christopher Nolan", "Matthew McConaughey", "Anne Hathaway", 2014, "Sci-Fi", "English");
mintNFT("The Shawshank Redemption", "Frank Darabont", "Tim Robbins", "N/A", 1994, "Drama", "English");
mintNFT("The Godfather", "Francis Ford Coppola", "Marlon Brando", "Diane Keaton", 1972, "Crime", "English");

console.log("Listing all NFTs:");
listNFTs();
getTotalSupply();