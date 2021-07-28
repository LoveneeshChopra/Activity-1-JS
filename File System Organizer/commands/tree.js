let fs=require("fs");
let path=require("path");
function treeFn(dirPath){
    // let destPath;
    if(dirPath==undefined){
    console.log("Kindly enter the path");
    return;
    }
    else{
        let doesExist=fs.existsSync(dirPath);
        if(doesExist)
        {
            treeHelper(dirPath,"");
        }
        else{
            console.log("Kindly enter the correct path");
            return;
        }
    }
}

function treeHelper(dirPath,indent){
    // is file or foler
    let isFile=fs.lstatSync(dirPath).isFile();
    if(isFile==true)
    {
        let fileName=path.basename(dirPath);
        console.log(indent+ "|--" +fileName)
    }
    else{
        let dirName=path.basename(dirPath);
        console.log(indent+"--"+dirName);
        fs.readdirSync(dirPath);
        let childrens=fs.readdirSync(dirPath);
        for(let i=0;i<childrens.length;i++)
        {
            let childPath=path.join(dirPath,childrens[i]);
            treeHelper(childPath,indent+"\t");
        }
    }
}
module.exports={
    treeKey:treeFn
}