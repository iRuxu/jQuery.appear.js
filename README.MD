

# jQuery.appear.js

基于IntersectionObserver接口对DOM元素在视窗或滚动元素中的出现进行操作，可替代类似懒加载的功能。

#### 1.引入文件
```html
<script src="http://libs.baidu.com/jquery/1.10.2/jquery.min.js"></script>
<script src="jQuery.appear.js"></script>
```

#### 2.调用插件
```javascript
$(selector).appear(callback,boxID,isOnce)
```
+ selector：选择器
+ callback：当元素出现时，需要执行的回调函数，回调函数传入一个参数，即该元素本身
+ boxID：可选，默认为整个视窗（null），可指定为某个可滚动的父级元素的id（字符串）
+ isOnce：可选，是否只记录一次，默认为是（true），如需反复统计，当指定为false