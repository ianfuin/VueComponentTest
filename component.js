Component({
  options: { /* 一些组件选项 */
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  relations: {},//组件间关系定义

  behaviors: [],//类似于mixins和traits的组件间代码复用机制

  properties: {/* 组件的对外属性，是属性名到属性设置的映射表，属性设置中可包含三个字段 type value observer*/
    myProperty: { // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal) {
        // this
      } // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串
    },
    myProperty2: String // 简化的定义方式
  },

  data: {},
  /* 私有数据，可用于模版渲染 */

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  created: function () { }, //在组件实例进入页面节点树时执行，注意此时不能调用 setData
  attached: function () { },  //在组件实例进入页面节点树时执行
  ready: function () { }, //在组件布局完成后执行，此时可以获取节点信息（使用 SelectorQuery ）
  moved: function () { }, //在组件实例被移动到节点树另一个位置时执行
  detached: function () { }, //在组件实例被从页面节点树移除时执行

  methods: {/* 组件的方法，包括事件响应函数和任意的自定义方法 */
    onTap: function () {

      let myEventDetail = {} // detail对象，提供给事件监听函数
      let myEventOption = {
        bubbles: false, //事件是否冒泡
        composed: false, //事件是否可以穿越组件边界，为false时，事件将只能在引用组件的节点树上触发，不进入其他任何组件内部
        capturePhase: false //事件是否拥有捕获阶段
      } // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption);
      /* 自定义组件触发事件时，需要使用 triggerEvent 方法，指定事件名、detail对象和事件选项 */

    }
  }

})