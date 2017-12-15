#!/bin/bash

rm -rf bundle
mkdir bundle
mkdir ./bundle/app1 && mkdir ./bundle/app2

# 打包
react-native bundle --entry-file index.js --bundle-output ./bundle/app1/index.android.bundle --platform android --assets-dest ./bundle/app1 --dev false
react-native bundle --entry-file hi.js --bundle-output ./bundle/app2/index.android.bundle --platform android --assets-dest ./bundle/app2 --dev false


# 复制到 sdcard
adb shell rm -rf /sdcard/bundleAssert/
adb shell mkdir /sdcard/bundleAssert/
adb push ./bundle/* /sdcard/bundleAssert/