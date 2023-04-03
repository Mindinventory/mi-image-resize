# IMAGE GLIDE LIBRARY

This is a lightweight npm package that can be used to resize images. With this package, you can easily resize images to any dimensions you want, without losing image quality.

![mi-image-resize](https://raw.githubusercontent.com/Mindinventory/mi-image-resize/main/MI_IMAGE_RESIZE.gif)
## Installation
To use this package, you first need to install it using npm. Run the following command in your terminal:

```
npm install image-glide-library
```

## Usage
To use this package, you need to require it in your NodeJS code:

```
const resize = require('image-glide-library');
```
It'll import resize function directly to your code. Then, you can use the resize function to resize your images.

### Parameters

This function takes 4 arguments. 
* It mainly takes an `image-path` first.
* You can pass your desired `width` in 2nd parameter.
* It takes `height` in 3rd parameter which is an optional parameter. If you don't pass this argument, it'll adjust it automatically as per aspect ratio.
* And finally it takes `crop` parameter which is also an optional parameter. You can pass it as `true` if you want to use this feature.

Here's an example:

This function returns the promise that resolves with the base64 string of the resized image. You can use it as per your need.


```
// This'll resize an image with 1080x720 size
const resizedImage = await resize('path/to/image.jpg', 1080, 720);

// This'll resize an image with 720px as the width and set the height by according to original aspect ratio
const newImage = await resize('path/to/image.png', 720);

// This'll crop an image and apply new width and height to it
const croppedImage = await resize('path/to/image.jpg', 600, 500, true);
```

## Let us know!
If you use our open-source libraries in your project, please make sure to credit us and Give a star to [www.mindinventory.com](https://mindinventory.com/)

## LICENSE
Node-js boilerplate is [MIT-licensed](https://github.com/Mindinventory/node-js-boilerplate/blob/master/LICENSE).


![alt text](https://git.mindinventory.com/uploads/-/system/appearance/header_logo/1/mi-logo.png)

<a href="https://www.mindinventory.com/contact-us.php?utm_source=gthb&utm_medium=repo&utm_campaign=circular-cards-stack-view" target="__blank">
<img src="https://github.com/Sammindinventory/MindInventory/raw/main/hirebutton.png" width="203" height="43"  alt="app development">
</a>