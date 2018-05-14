$.fn.extend({
    'appear': function (callback, boxID, isOnce) {

        //如果设置了观察母体元素，传递给IntersectionObserver构造函数
        var config = {}
        !!boxID ? config.root = boxID : config.root = null

        //如果没有特别设置，则只记录一次出现
        isOnce === undefined ? isOnce = true : isOnce = isOnce

        //创建一个观察者实例
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.intersectionRatio > 0) {

                    //如果只绑定一次
                    if (isOnce) observer.unobserve(entry.target);

                    //触发交互事件后的回调，传入当前发生事件的元素
                    !!callback && callback(entry.target)
                }
            })
        }, config)

        //给传入的每个元素绑定观察
        this.each(function (i, ele) {
            observer.observe(ele)
        })

        return this;
    }
})