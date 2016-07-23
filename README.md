#React FB Like
React component for facebook like button!
[Live Demo](https://zerocho.herokuapp.com/portfolio/ReactFBLike)

##How to install
```
npm install react-fb-like --save
```

##How to use
```
var ReactFBLike = require('react-fb-like');
<ReactFBLike language="ko_KR" appId="520712144760137" />
```

ES2015 style
```
import ReactFBLike from 'react-fb-like';
```

##Result
![reactfblike](https://cloud.githubusercontent.com/assets/10962668/16993907/47b99278-4ee0-11e6-8f58-ef4442acf263.png)

##Props
You can use all props that facebook supports. But be careful! You should use **camelCase**. And attribute **ref** is changed to **reference** because it is a reserved word in React.
[Official Documentation](https://developers.facebook.com/docs/plugins/like-button)

###Required props
- language(such as en_US, ko_KR, fr_FR)
- appId

###Other props
- action
- colorscheme
- href
- kidDirectedSite
- layout
- reference(which is ref in facebook)
- share
- showFaces
- width

## Demo
[Live Demo](https://zerocho.herokuapp.com/portfolio/ReactFBLike)

## Wanna Contribute?
Please contribute to this package via **Pull Request**, or you can open **Issues**!

## License
MIT
