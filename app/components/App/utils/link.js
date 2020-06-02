
export function generateLinkString(length){
    var result ='';
    var characters = 'ABCDEFGHIJKMNLOPQRSTUVWXYZabcdefghijkmnlopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (let index = 0; index < length; index++) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
        
    }
        return result;

}