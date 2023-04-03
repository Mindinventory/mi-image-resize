const sharp = require('sharp');

module.exports = async (imagePath, w, h = null, crop = 0) => {
    try {
        w = parseInt(w);
        h = parseInt(h);
        if(!w) throw new Error('Invalid width');
        
        let image = sharp(imagePath);
        const { width, height } = await image.metadata();
        if(!h) h = parseInt((w * height) / width);

        let final;
        if(crop) {
            w = width > w ? w : parseInt(width*.9);
            h = height > h ? h : parseInt(height*.9);
            final = (await image.extract({ width: w, height: h, top: height-h, left: width-w }).toBuffer()).toString('base64');
        }
        else final = Buffer.from(await image.resize(w, h).toBuffer()).toString('base64');

        return final;
    } catch (error) {
        return error;
    }
}