Component({

  properties: { /* 组件的对外属性，是属性名到属性设置的映射表，属性设置中可包含三个字段 type value observer */
    size: { /* 尺寸  medium / small / mini*/
      type: String
    },
    type: { /* 类型 primary / success / warning / danger / info / text*/
      type: String
    },
    plain: { /* 是否朴素按钮 */
      type: Boolean,
      value: false
    },
    round: { /* 是否圆形按钮 */
      type: Boolean,
      value: false
    },
    loading: { /* 是否加载中状态 */
      type: Boolean,
      value: false
    },
    disabled: { /* 是否禁用状态 */
      type: Boolean,
      value: false
    }
  },

  attached: function () { //在组件实例进入页面节点树时执行

    this.switchType(this.properties.type); //设置按钮类型 
    this.switchSize(this.properties.size); //设置按钮类型 
  },

  data: { // 这里是一些组件内部数据

    buttonType: "", //按钮类型 
    buttonSize: "" //按钮尺寸 
  },
  methods: { // 这里是一个自定义方法

    /**
     * 设置按钮类型 
     */
    switchType(val) {
      if (val != '') {
        this.setData({
          buttonType: `mds-button--${val}`
        })
      }
    },

    /**
     * 设置按钮尺寸 
     */
    switchSize(val) {
      if (val != '') {
        this.setData({
          buttonSize: `mds-button--${val}`
        })
      }
    }

  }

})