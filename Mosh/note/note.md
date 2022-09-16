### Debugge

    MAC: command + N, command + D
    Windows: control + N
    * Chrome: Remote Debugging
    *** VSCode: React Native Tools

### Publish

    publish to expo (web page)
        expo account
        expo publish

### APIs

    View
    SafeAreaView
    Text
    Image(local / online)
    Touchables
    Button
    Alert
        Alert.alert
    StyleSheet
    Platform code
        Platform.OS === 'ios' ? xx : xx
        Constants.statusBarheight

### Layouts

    Dimensions
        Physical Pixels = DIPs * Scale Factor
        width: '50%'
        Dimensions.get(‘window’|‘screen’) / 在IOS，window和screen是一样的，android略微不同
    Device Orientation
        app.json > orientation
        useDimensions
        useDeviceOrientation

### Styles

    Icons
        expo icons
            MaterialCommuityIcons
    Platform specific code
        Platform.OS === 'ios' ? xx : xx
        Platform.select({ ios: {}, android: {} })
        file
    	    xxx.iso.js
    	    xxx.android.js

### List -###########################

    FlatList
    	data
    	ketExtractor
    	renderItem
    	ItemSeparatorComponent
        handle selection
        handle swipe
            gesture handler > Swipeable
        pull to refresh
            refreshing
            onRefresh
    	numColumns
    		一行几个item
    SectionList

### TextInput -###########################

        blurOnSubmit
        autoCapitalize
        autoCorrect
        keyboardType
        secureTextEntry

### Switch

### Picker

### Modal

### Forms -###########################

    Build
    Validate

### Others

    long text
        Text > numberOfLines

### Device

### ImagePicker

    expo install expo-image-picker
        ImagePicker.requestCameraPermissionsAsync()

### Permission

        expo-permissions

### Location

### Upload Progress

### Navigation

### OfflineApp

    Network
    Cache
    Notication

### Publish
