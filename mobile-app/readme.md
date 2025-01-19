Great! You already have an emulator called "Pixel_6_API_30". Let's use it:

Start the emulator:

```shell
$ANDROID_HOME/emulator/emulator -avd Pixel_6_API_30
```

Wait for the emulator to fully start up (it may take a minute or two)
In a new terminal window, verify the device is connected:
 ```shell
 $ANDROID_HOME/platform-tools/adb devices
 ```

### Emulate app on android
```cordova emulate android```

### Build as android
```cordova build android```

### Check Log
```adb logcat ```

## Check  specific Log

``adb logcat | grep "instant"
``