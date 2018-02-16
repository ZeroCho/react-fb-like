#React FB Like
React component for facebook Like and Share button!

##How to install
[Live Demo](https://www.zerocho.com/portfolio/ReactFBLike)

```
npm install react-fb-like --save
```

##How to use
```
var ReactFBLike = require('react-fb-like');
<ReactFBLike language="ko_KR" appId="717589285046812" version="v2.12" />
```

ES2015 style
```
import ReactFBLike from 'react-fb-like';
```

##It renders only once
If you go to the another page and come back to where this component locates, sometimes this component disappears.
This is because this component is rendered only once when FB script loads.
So if you want to manually show this component again, you should call `FB.XFBML.parse();`

##Result
![reactfblike](https://cloud.githubusercontent.com/assets/10962668/16993907/47b99278-4ee0-11e6-8f58-ef4442acf263.png)

##Props
You can use all props that facebook supports. But be careful! You should use **camelCase**. And attribute **ref** is changed to **reference** because it is a reserved word in React.
[Official Documentation](https://developers.facebook.com/docs/plugins/like-button)

###Required props
- language(such as en_US, ko_KR, fr_FR) [supported language](https://developers.facebook.com/docs/messenger-platform/messenger-profile/supported-locales)
- appId
- version: version of facebook-jssdk, default: 'v2.12'

###Other props
- action
- colorscheme
- href
- kidDirectedSite
- layout
- reference(which is a **ref** attribute in facebook)
- share
- showFaces
- width

## Demo
[Live Demo](https://zerocho.herokuapp.com/portfolio/ReactFBLike)

## Wanna Contribute?
Please contribute to this package via **Pull Request**, or you can open **Issues**!

## License
MIT
