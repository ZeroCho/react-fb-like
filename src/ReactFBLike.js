import React, { Component, PropTypes } from "react";

export default class ReactFBLike extends Component {
  static propTypes = {
    appId: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    href: PropTypes.string,
    layout: PropTypes.string,
    action: PropTypes.string,
    size: PropTypes.string,
    share: PropTypes.bool,
    showFaces: PropTypes.bool,
    width: PropTypes.oneOf(PropTypes.string, PropTypes.number),
    reference: PropTypes.string,
    colorscheme: PropTypes.string,
    kidDirectedSite: PropTypes.bool
  };

  static defaultProps = {
    language: 'en_US',
    layout: 'standard',
    action: 'like',
    size: 'small',
    share: true,
    showFaces: true,
    colorscheme: 'light',
    kidDirectedSite: false
  };

  componentWillMount() {
    const { language, appId } = this.props;
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = `//connect.facebook.net/${language}/sdk.js#xfbml=1&version=v2.7&appId=${appId}`;
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  render() {
    const { href, layout, action, size, share, showFaces, reference, width, colorscheme, kidDirectedSite } = this.props;
    return (
      <div
        className="fb-like"
        data-href={href}
        data-layout={layout}
        data-action={action}
        data-size={size}
        data-show-faces={showFaces}
        data-share={share}
        data-width={width}
        data-ref={reference}
        data-colorscheme={colorscheme}
        data-kid-directed-site={kidDirectedSite}
      >
      </div>
    );
  }
}
