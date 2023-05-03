import *as react from 'react';
import {view,text,stylesheet} from 'react-native';

export default function index(){
    return(
        <view style={styles.container}>
          <text style={styles.paragraph}>
          exemplo 3
          </text>
        </view>     
     );
}

const styles = stylesheet.create({
    container: {
        flex: 1,
        justifycontent'center',
        backgroundcolor: '#f5f5f5',
        padding:8,
    },
    
})