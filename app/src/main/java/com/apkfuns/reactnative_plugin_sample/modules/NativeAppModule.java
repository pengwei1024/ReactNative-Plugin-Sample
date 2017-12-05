package com.apkfuns.reactnative_plugin_sample.modules;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.text.TextUtils;
import android.util.Log;

import com.apkfuns.reactnative_plugin_sample.util.HiJBMapWrapper;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;


/**
 * Created by pengwei on 2017/12/4.
 */

public class NativeAppModule extends ReactContextBaseJavaModule {

    private static final String TAG = "NativeAppModule";

    public NativeAppModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "NativeApp";
    }

    @ReactMethod
    public void open(ReadableMap readableMap, Callback success, Callback failure, Callback listener) {
        HiJBMapWrapper hiMap = new HiJBMapWrapper(readableMap, success, failure, listener);
        String data = hiMap.getDataString();
        if (TextUtils.isEmpty(data)) {
            hiMap.callFailure("data is null");
        } else {
            String[] pkgAndName = data.split(";");
            if (pkgAndName.length == 2) {
                try {
                    Intent intent = new Intent();
                    intent.setClassName(pkgAndName[0], pkgAndName[1]);
                    intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                    getContext().startActivity(intent);
                    hiMap.callSuccess("true");
                } catch (Exception e2) {
                    hiMap.callSuccess("false");
                }
            } else {
                try {
                    Uri intent_uri = Uri.parse(data);
                    Intent intent = new Intent(Intent.ACTION_VIEW, intent_uri);
                    if (getContext() != null) {
                        getContext().startActivity(intent);
                        hiMap.callSuccess("true");
                        return;
                    }
                } catch (Exception e) {
                    Log.e(TAG, e.getMessage(), e);
                }
                hiMap.callSuccess("false");
            }
        }
    }

    private Context getContext() {
        return getCurrentActivity();
    }
}
