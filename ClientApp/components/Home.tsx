import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ScreenshareControls } from 'simplewebrtc-screenshare-v2';
//const screenshare = require('screen-share-simplewebrtc');

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    
    public render() {
      //  let app = require('simplewebrtc-screenshare-v2');
        
        return <div>
            <h1>Hello, world!</h1>
            <ScreenshareControls/>
        </div>;
    }
}
