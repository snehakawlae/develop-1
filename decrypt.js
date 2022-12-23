    //Encrypted payload that needs to be decrypted which has iv inclueded of 16 bytes.
    let encryptedMsg = "3823824u92832888888888888888888888888888888888888888888888888888888888888888888888888888888888";
if (encryptedMsg.length == 0) {
    return res.send({ "code": "100", "status": "failed", "message": "Encryption payload is required" });
}
try {
    //Sample encryption key 
    const key = "11111111100200223334444440000455"; // set random encryption key of 32 bytes

    //convert the encrypted paylaod to array bytes
    let output = Buffer.from(encryptedMsg, "utf-8");

    //convert the array bytes to the base64 encoded string
    let base64Encoded = output.toString("base64");

    //fetch the 16 bytes from the base64 encoded string as iv
    const iv = (Buffer.from(base64Encoded, 'base64').slice(0, 16))

    //send key and iv to the crypto algorithm 
    const decrypter = crypto.createDecipheriv("aes-256-cbc", key, iv);
    let decryptedMsg = decrypter.update(encryptedMsg, "hex", "utf8");
    decryptedMsg += decrypter.final("utf8");
    decryptedMsg = decryptedMsg.substring(decryptedMsg.indexOf('{'), decryptedMsg.length).trim();
    original_phrase = decryptedMsg;
} catch (error) {
    return res.send({ "code": "100", "status": "failed", "message": "Something went wrong" });
}
