package com.apkfuns.reactnative_plugin_sample.model;

import android.os.Parcel;
import android.os.Parcelable;

import java.io.File;

/**
 * Created by pengwei on 2017/12/5.
 */

public class BundleEntity implements Parcelable {
    private String bundleAssetName;
    private File bundleFile;
    private String jsMainModuleName;
    private String moduleName;

    public BundleEntity(String bundleAssetName, String jsMainModuleName, String moduleName) {
        this.bundleAssetName = bundleAssetName;
        this.jsMainModuleName = jsMainModuleName;
        this.moduleName = moduleName;
    }

    public BundleEntity(File bundleFile, String jsMainModuleName, String moduleName) {
        this.bundleFile = bundleFile;
        this.jsMainModuleName = jsMainModuleName;
        this.moduleName = moduleName;
    }

    public String getBundleAssetName() {
        return bundleAssetName;
    }

    public File getBundleFile() {
        return bundleFile;
    }

    public String getJsMainModuleName() {
        return jsMainModuleName;
    }

    public String getModuleName() {
        return moduleName;
    }


    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel dest, int flags) {
        dest.writeString(this.bundleAssetName);
        dest.writeSerializable(this.bundleFile);
        dest.writeString(this.jsMainModuleName);
        dest.writeString(this.moduleName);
    }

    protected BundleEntity(Parcel in) {
        this.bundleAssetName = in.readString();
        this.bundleFile = (File) in.readSerializable();
        this.jsMainModuleName = in.readString();
        this.moduleName = in.readString();
    }

    public static final Parcelable.Creator<BundleEntity> CREATOR = new Parcelable.Creator<BundleEntity>() {
        @Override
        public BundleEntity createFromParcel(Parcel source) {
            return new BundleEntity(source);
        }

        @Override
        public BundleEntity[] newArray(int size) {
            return new BundleEntity[size];
        }
    };
}
