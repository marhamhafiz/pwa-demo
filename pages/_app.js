import '../styles/globals.css'
// import { useEffect } from 'react';
import Script from 'next/script';
import FcmTokenComp from '../components/firebaseForeground';

function MyApp({ Component, pageProps }) {

  // useEffect(() => {
  //   window.addEventListener("message", function (event) {
  //     // We are receiveing messages from any origin, you can check of the origin by
  //     // using event.origin
    
  //     // get the port then use it for communication.
  //     var port = event.ports[0];
  //     if (typeof port === 'undefined') return;
    
  //     // Post message on this port.
  //     port.postMessage("Test")
    
  //     // Receive upcoming messages on this port.
  //     port.onmessage = function(event) {
  //       console.log("[PostMessage1] Got message" + event.data);
  //     };
  //   });
  // })
  <Script id="post-message-demo">
    {`
      window.addEventListener("message", function (event) {
        // We are receiveing messages from any origin, you can check of the origin by
        // using event.origin
      
        // get the port then use it for communication.
        var port = event.ports[0];
        if (typeof port === 'undefined') return;
      
        // Post message on this port.
        port.postMessage("Test")
      
        // Receive upcoming messages on this port.
        port.onmessage = function(event) {
          console.log("[PostMessage1] Got message" + event.data);
        };
      })
    `}
  </Script>

  return (
    <div>
      <FcmTokenComp /> {/* Render for foreground notification handling */}
      <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
