### Error message:
1. Cannot find module '../cordova/platform_metadata'
   ```#bash
   ionic cordova plugin rm cordova-plugin-add-swift-support --force
   ionic cordova plugin add cordova-plugin-add-swift-support
   ```
2. 'range(at:)' has been renamed to 'rangeAt(_:)'
    ```note
    lock version "cordova-plugin-photo-library": "2.1.1",
    latest version 2.2.0, do not use latest.
    ```
    
### Composite background graph and qrcode
```html
    <img id="myImg"/>
```
```javascript
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 700;
    let bgImg  = new Image();
    bgImg.crossOrigin = 'anonymous';
    bgImg.src='./test.jpg';
    // bgImg.src='http://47.75.244.75/test-files/test.jpg';
    bgImg.onload = ()=>{
        context.drawImage(bgImg, 0, 0, 1024,768, 0, 0, 414, 736);
        let qrImg = new Image();
        qrImg.crossOrigin = 'anonymous';
        qrImg.src = './mengxuan_store.png';
        // qrImg.src='http://47.75.244.75/test-files/mengxuan_store.png'
        qrImg.onload = () => {
            context.drawImage(qrImg, 0, 0, 370, 370, 200, 400, 200, 200);
            let myImg = document.getElementById('myImg');
            myImg.src=canvas.toDataURL('image/png')
        }
    }
```
    
