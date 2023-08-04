# React Native Custom Toggle

#### **Introduction**

"If you're looking for a 'Toggle' component that is entirely built with StyleSheets and allows easy style changes without installing any additional packages, then this component is perfect for you. Simply add the file to the 'components' folder and use this reusable component with toggle functionality throughout your application. You can easily utilize the tools shown in the Introductions section to incorporate it into your project."

#### **Default Toggle**
![defaultl toggle](./img/size100.png)
```
<TouchableWithoutFeedback>
    <Toggle/>
</TouchableWithoutFeedback>
```
```
import { TouchableWithoutFeedback,View } from 'react-native';
import Toggle from './components/Toggle.js';

export default function App () {
    return (
        <View>
            <TouchableWithoutFeedback>
                <Toggle/>
            </TouchableWithoutFeedback>
        </View>
    )
}
```



#### **Properties**


##### **1.Style**
##### a. Size
Resizeble toggle

```
<TouchableWithoutFeedback>
    <Toggle toggleSize={100} />
</TouchableWithoutFeedback>
```
```
<TouchableWithoutFeedback>
    <Toggle toggleSize={200} />
</TouchableWithoutFeedback>
```

##### b. Background Color
Toggle states -> true
```
<TouchableWithoutFeedback>
    <Toggle toggleOnColor={'green'} />
</TouchableWithoutFeedback>
```
Toggle states -> false
```
<TouchableWithoutFeedback>
    <Toggle toggleOffColor={'red'} />
</TouchableWithoutFeedback>
```
##### c. Toggle Sign

```
<TouchableWithoutFeedback>
    <Toggle toggleSign={true} />
<TouchableWithoutFeedback>
```
##### d. Toggle Circle Margin
```
<TouchableWithoutFeedback>
    <Toggle toggleCircleMarginLeft={3} />
<TouchableWithoutFeedback>
```
```
<TouchableWithoutFeedback>
    <Toggle toggleCircleMarginLeft={10} />
<TouchableWithoutFeedback>
```
```
<TouchableWithoutFeedback>
    <Toggle toggleCircleMarginRight={3} />
<TouchableWithoutFeedback>
```
```
<TouchableWithoutFeedback>
    <Toggle toggleCircleMarginRight={10} />
<TouchableWithoutFeedback>
```
##### e. Toggle Shape
```
<TouchableWithoutFeedback>
    <Toggle toggleShape={'circle'} />
<TouchableWithoutFeedback>
```
```
<Toggle toggleShape={'rectangle'} />
```
##### f. Circle Color
```
<TouchableWithoutFeedback>
    <Toggle toggleCircleColor={'red'} />
<TouchableWithoutFeedback>
```

##### **2. Utilization**
##### a. Toggle State

```
<TouchableWithoutFeedback>
    <Toggle toggleState={state} />
<TouchableWithoutFeedback>
```
##### b. Toggle Function
```
<TouchableWithoutFeedback>
    <Toggle toggleFunction={handleToggle} />
<TouchableWithoutFeedback>
