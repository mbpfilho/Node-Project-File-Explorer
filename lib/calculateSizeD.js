//require node modules
const {execSync}=require('child_process');

const calculateSizeD=itemFullStaticPath=>{
    //scape spaces, tabs etc
    const itemFullStaticPathCleaned=itemFullStaticPath.replace(/\s/g,'\ ');
    let commandOutput;
    try{
        commandOutput=execSync(`du -sh "${itemFullStaticPathCleaned}"`).toString();
    }catch(err){
        console.log(`exectSync error: ${err}`);
        mainContent=`<div class="alert alert-danger">Internal Server Error</div>`;
        return false;
    }
    // const commandOutput=execSync(`du -sh "${itemFullStaticPathCleaned}"`).toString();

    //remove space, tabs, etc
    const filesize=commandOutput.replace(/\s/g,'');

    //split filesize using the '/' separator
    filesize=filesize.split('/');

    //human size is the first item of the array
    filesize=filesize[0];

    //unit
    const filesizeUnit=filesize.replace(/\d|\./g,'');

    //size number
    const filesizeNumber=parseFloat(filesizeNumber.replace(/[a-z]/i,''));

    const units="BKMGT";

    //B 10B -> 10 bytes (*1000^0)
    //K 10K -> 10*1000 bytes (*1000^1)
    //M 10M -> 10*1000*1000 bytes (*1000^2)
    //G 10G -> 10*1000*1000*1000 bytes (*1000^3)
    //T 10T -> 10*1000*1000*1000*1000 bytes (*1000^4)

    const filesizeBytes=filesizeNumber*Math.pow(1000,units.indexOf(filesizeUnit));

    return [filesize,filesizeBytes]; 
};

module.exports=calculateSizeD