
///<reference path="../androidui-sdk/android-ui.d.ts"/>
///<reference path="../gen/R.ts"/>

module sample.app {
    import Activity = android.app.Activity;
    import ActionBarActivity = android.app.ActionBarActivity;
    import NumberPicker = android.widget.NumberPicker;


    export class SamplePickerActivity extends ActionBarActivity {
        onCreate():void {
            super.onCreate();
            this.setTitle('Picker');
            this.setContentView(R.layout.sample_picker);
        }
    }
}