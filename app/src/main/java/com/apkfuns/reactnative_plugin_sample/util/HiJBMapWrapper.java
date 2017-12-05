package com.apkfuns.reactnative_plugin_sample.util;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;

public class HiJBMapWrapper {
    private ReadableMap data;
    private Callback success;
    private Callback failure;
    private Callback listener;

    public HiJBMapWrapper(ReadableMap data, Callback success, Callback failure, Callback listener) {
        this.data = data;
        this.success = success;
        this.failure = failure;
        this.listener = listener;
    }

    public String getDataString() {
        if (data != null) {
            return data.getString("data");
        }
        return null;
    }

    public ReadableArray getDataArray() {
        if (data != null) {
            return data.getArray("data");
        }
        return null;
    }

    public ReadableMap getDataMap() {
        if (data != null) {
            return data.getMap("data");
        }
        return null;
    }

    public boolean callSuccess(Object... objects) {
        if (success == null) {
            return false;
        }
        success.invoke(objects);
        return true;
    }

    public boolean callSuccess() {
        return callSuccess("success");
    }

    public boolean callFailure(Object... objects) {
        if (failure == null) {
            return false;
        }
        failure.invoke(objects);
        return true;
    }

    public boolean callFailure() {
        return callFailure("data error");
    }

    public boolean callListener(Object... objects) {
        if (listener == null) {
            return false;
        }
        listener.invoke(objects);
        return true;
    }
}

