#!/bin/bash

rm -rf bundle2
mkdir bundle2

# 打包
react-native bundle --entry-file hi.android.js --bundle-output ./bundle2/index.android.bundle --platform android --assets-dest ./bundle --dev false


# 复制到 sdcard
adb shell rm -rf /sdcard/baiduHi/bundle2
adb push ./bundle2 /sdcard/baiduHi/bundle2