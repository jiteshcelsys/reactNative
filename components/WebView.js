import React from 'react';
import {WebView} from 'react-native-webview';

function WebViewComponent() {
  return (
    <>
      <WebView
        source={{
          uri: 'https://www.thehindu.com/news/international/andy-warhol-violated-a-photographers-copyright-on-image-of-prince-supreme-court-rules/article66867494.ece',
        }}
      />
    </>
  );
}

export default WebViewComponent;
