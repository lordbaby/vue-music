## 轮播组件思路
### 1. 无缝轮播
### 2. 自动轮播
### 3. 切换时间
以上三个问题都交给better-scroll来处理
下面是组件编写思路
1. DOM结构
slider
    slider-group    --over-flow:hidden
        slider-item     --float:left
    dots
2. 何时加载初始化slider
在vue mounted后20毫秒 做一下几个过程
2.1. 初始化slider-group及slider-item的宽度
slider-group = n * slider的宽度
slider-item = slider的宽度
如果是无缝切换，slider-group的宽度需要在加上2倍的slider的宽度。（因为better-scroll在slider-group的首位又重新克隆了一边尾首的slider-item）
3. 初始化slider
采用的是better-scroll
监听scrollEnd事件
通过currentPageIndex来激活当前哪个slider-item，即与dots联动
4. 初始化dots
5. 自动播放
采用定时器setTimeout， gotoPage(pageIndex)
注意事项
当正好自动轮播，用户也正好手动轮播结合时会出现未知的bug
处理方式
在beforeScrollStart钩子中清掉自动轮播的定时器
在endScroll钩子中在启动自动轮播的定时器
当用户resize事件发生时需要重新计算一下slider-group、slider-item的宽度，以及重新slider的refresh()方法