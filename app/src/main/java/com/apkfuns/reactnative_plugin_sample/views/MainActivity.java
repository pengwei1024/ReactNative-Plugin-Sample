package com.apkfuns.reactnative_plugin_sample.views;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import android.widget.SimpleAdapter;

import com.apkfuns.reactnative_plugin_sample.R;
import com.apkfuns.reactnative_plugin_sample.model.BundleEntity;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MainActivity extends AppCompatActivity implements AdapterView.OnItemClickListener {

    private ListView mListView;
    private SimpleAdapter adapter;
    private final Object[][] dataSet = {
            {R.mipmap.ic_launcher_round, "小程序示例"},
            {R.mipmap.ic_launcher_round, "百度 Hi"}
    };

    // 从 sdcard 加载 bundle
    private static final boolean LOAD_FROM_SDCARD = true;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
        for (int i = 0; i < dataSet.length; i++) {
            Map<String, Object> listItem = new HashMap<String, Object>();
            listItem.put("head", dataSet[i][0]);
            listItem.put("name", dataSet[i][1]);
            list.add(listItem);
        }
        mListView = (ListView) findViewById(R.id.ListView);
        adapter = new SimpleAdapter(this, list, R.layout.adapter_list_simple,
                new String[]{"head", "name"}, new int[]{R.id.icon, R.id.name});
        mListView.setAdapter(adapter);
        mListView.setOnItemClickListener(this);
    }

    @Override
    public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
        Intent it = new Intent(this, ReactActivity.class);
        BundleEntity entity = null;
        switch (position) {
            case 0:
                entity = new BundleEntity(new File("hi.android.bundle"), "hi.android", "HiReactNativeApp");
                if (LOAD_FROM_SDCARD) {
                    entity.setBundleFile(new File("/sdcard/bundleAssert/app1"));
                }
                it.putExtra("data", entity);
                break;
            case 1:
                entity = new BundleEntity(new File("index.android.bundle"), "index.android", "MyReactNativeApp");
                if (LOAD_FROM_SDCARD) {
                    entity.setBundleFile(new File("/sdcard/bundleAssert/app2"));
                }
                it.putExtra("data", entity);
                break;
            default:
                break;
        }
        startActivity(it);
    }
}
