#!/bin/bash

rm -rf bundle
mkdir bundle

# 打包
react-native bundle --entry-file index.android.js --bundle-output ./bundle/index.android.bundle --platform android --assets-dest ./bundle --dev false


# 复制到 sdcard
adb shell rm -rf /sdcard/baiduHi/bundle
adb push ./bundle /sdcard/baiduHi/bundle