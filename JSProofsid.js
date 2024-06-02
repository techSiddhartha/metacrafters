// create a variable to hold your NFT's

const nftList = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (TName,TColor,TShape,TShapeColor,Tno) {
    const NFT = {
        "name": null,
        "color": null,
        "shape": null,
        "shapecolor": null,
        "number": null
    };
    NFT.name= TName;
    NFT.color= TColor;
    NFT.shape= TShape;
    NFT.shapecolor= TShapeColor;
    NFT.number= Tno;

    nftList.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()

function listNFTs () {
for(i=0;i<nftList.length;i++)
    {
        console.log(nftList[i]);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nNFTs in list:"+" "+nftList.length);
}

//call you functions below this line

//minting nfts
mintNFT("michael","green","square","dark-green","90");
mintNFT("david","yellow","triangle","red","50");


listNFTs();
getTotalSupply();
