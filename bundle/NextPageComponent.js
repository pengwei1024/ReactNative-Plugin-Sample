import React from 'react';
import {
     View,
     Text,
 } from 'react-native';

 export default class NextPageComponent extends React.Component{
     constructor(props){
         super(props);
         this.state = {};
     }

     render(){
         return (
             <View>
                 <Text>我是默认页面</Text>
             </View>
             );
     }
 }