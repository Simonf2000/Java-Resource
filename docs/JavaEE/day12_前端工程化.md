# 1.回顾

```tex
1. 响应性和setup函数
	响应性
	setup函数
2. 样式导入
3. js和ts的选择
4. Vue3
	4.1 差值表达式和文本渲染
	4.2 属性绑定
		单向绑定
		双向绑定
	4.3 事件绑定
	4.4 响应式数据
	4.5 条件渲染
	4.6 列表渲染
	4.7 属性计算
	4.8 数据监听器
	4.9 Vue的生命周期
	4.10 组件传参
```

# 2.练习

- 动态表格

```html
<script setup>
   import {reactive} from 'vue'

   let emps=reactive([{id:101,name:'小明',salary:60000},{id:102,name:'小花',salary:70000}])

   let obj=reactive({id:'',name:'',salary:''})

   let addEmp=()=>{
    //添加到数组内
     emps.push(obj)
     //表单实现清空
     obj={}
   }

   let delEmp=(i)=>{
      emps.splice(i,1)
   }
</script>

<template>
  <div>
    <table border="1" width="500px">
      <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>工资</th>
        <th>操作</th>
      </tr>
      <tr v-for="emp,index in emps" :key="index">
        <td>{{ emp.id }}</td>
        <td>{{ emp.name }}</td>
        <td>{{ emp.salary }}</td>
        <td @click="delEmp(index)">删除</td>
      </tr>
    </table>
    <table>
      <tr>
        <td>编号</td>
        <td><input type="text" v-model="obj.id"></td>
      </tr>
      <tr>
        <td>姓名</td>
        <td><input type="text" v-model="obj.name"></td>
      </tr>
      <tr>
        <td>工资</td>
        <td><input type="text" v-model="obj.salary"></td>
      </tr>
      <tr>
        <td colspan="2">
          <input type="button" value="添加" @click="addEmp()">
        </td>
      </tr>

    </table>
  </div>
</template>

<style scoped>

</style>

```

# 3.路由

- 功能
  - 进行页面的组件切换，页面变化

## 3.1 router.js

```js
/* 导入两个工具 */
import {createRouter,createWebHashHistory} from 'vue-router'

/* 导入需要路由控制的组件 */
import Home from '../components/Home.vue'
import List from '../components/List.vue'

/*  调用createRouter创建路由对象
    a. 所有的组件都显示在一个区域内(router-view)
    b. 让不同的组件显示在不同的区域内
*/
/* let router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {component:Home,path:'/home666'},
        {component:List,path:'/list888'},
        {component:Home,path:'/'},
    ]
}) */


let router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            components:{
                default:Home,
                HomeAddress:Home
            },
            path:'/home666'
        },
        {
            components:{
                ListAddress:List
            },
            path:'/list888'
        },
        {
            path:'/',
            redirect:'/home666'
        }
    ]
})

export {router}
```

## 3.2 App.vue

```html
<script setup>
   
</script>

<template>
  <div>
    <!-- 1. 准备两个超链接(类似) -->
    <router-link to="/home666">首页 |</router-link>
    <router-link to="/list888"> 列表页</router-link>

    <!-- 2. 准备一个区域 -->
    <router-view></router-view>
    <h2>下方将展示Home页</h2>
    <router-view name="HomeAddress"></router-view>
    <h2>下方将展示List页</h2>
    <router-view name="ListAddress"></router-view>
  </div>
</template>

<style scoped>

</style>
```

## 3.3 编程式路由

```html
<script setup>
/* 1. 编程是路由需要导入一个工具 */
import {useRouter} from 'vue-router'

/* 2. 调用useRouter函数,拿到该函数的返回值 */
let myRouter=useRouter()

let toHomeView=()=>{
  //编程式路由
  // myRouter.push('/home666')
  myRouter.push({path:'/home666'})


}
   
</script>

<template>
  <div>
    <!-- 1. 准备两个超链接(类似) -->
    <router-link to="/home666">首页 |</router-link>
    <router-link to="/list888"> 列表页 |</router-link>
      <!-- 编程式路由的按钮 -->
    <input type="button" value="首页" @click="toHomeView()">

    <!-- 2. 准备一个区域 -->
    <router-view></router-view>
    <h2>下方将展示Home页</h2>
    <router-view name="HomeAddress"></router-view>
    <h2>下方将展示List页</h2>
    <router-view name="ListAddress"></router-view>
  </div>
</template>

<style scoped>

</style>

```

## 3.4 路由传参

### 3.4.1 键值对参数

- url?key=value&key=value&key=value

- App.vue参数传递方

  - ```html
    <script setup>
    /* 1. 编程是路由需要导入一个工具 */
    import {useRouter} from 'vue-router'
    
    /* 2. 调用useRouter函数,拿到该函数的返回值 */
    let myRouter=useRouter()
    
    let toHomeView=()=>{
      //编程式路由
      //键值对传参
      // myRouter.push('/home666?name=lucy&age=23')
      myRouter.push({path:'/home666',query:{name:'lucy88',age:24}})
    
    }
       
    </script>
    
    <template>
      <div>
        <!-- 1. 准备两个超链接(类似) -->
        <router-link to="/home666?name=tom&age=20">首页1 |</router-link>
        <router-link to="/home666?name=rose&age=21">首页2 |</router-link>
        <router-link to="/home666?name=jack&age=22">首页3 |</router-link>
        <router-link to="/list888"> 列表页 |</router-link>
        <input type="button" value="首页" @click="toHomeView()">
    
        <!-- 2. 准备一个区域 -->
        <router-view></router-view>
        <h2>下方将展示Home页</h2>
        <router-view name="HomeAddress"></router-view>
        <h2>下方将展示List页</h2>
        <router-view name="ListAddress"></router-view>
      </div>
    </template>
    
    <style scoped>
    
    </style>
    
    ```

  - Home.vue参数接收方

    - ```html
      <script setup>
      
      import {onUpdated, ref} from 'vue'
      
         /* 如何获取键值对类型的路由参数 */
      /* 1. 需要导入一个工具 */
       import {useRoute} from 'vue-router'
      
       /* 2. 调用函数，拿到该函数的返回值 */
       let myRoute=useRoute()
      
       /* 3. 接收键值对参数 */
      let rsName=ref('')
      let rsAge=ref('')
      
      rsName.value=myRoute.query.name
      rsAge.value=myRoute.query.age
      
      onUpdated(()=>{
          rsName.value=myRoute.query.name
          rsAge.value=myRoute.query.age
      })
      
      
      
      
      </script>
      
      <template>
        <div>
          <h1>首页</h1>
          <h3>姓名：{{ rsName }}</h3>
          <h3>年龄：{{ rsAge }}</h3>
        </div>
      </template>
      
      <style scoped>
      
      </style>
      ```

    - 

### 3.4.2 路径参数

- url/value/value/value

- App.vue参数传递方

  - ```html
    <script setup>
    /* 1. 编程是路由需要导入一个工具 */
    import {useRouter} from 'vue-router'
    
    /* 2. 调用useRouter函数,拿到该函数的返回值 */
    let myRouter=useRouter()
    
    let toListView=()=>{
      // myRouter.push('/list888/lucy/23')
      //需要使用name属性值指定组件
      myRouter.push({name:'listView',params:{name:'lucy99',age:24}})
    }
       
    </script>
    
    <template>
      <div>
        
        <router-link to="/list888/tom/20"> 列表页1 |</router-link>
        <router-link to="/list888/rose/21"> 列表页2 |</router-link>
        <router-link to="/list888/jack/22"> 列表页3 |</router-link>
        <input type="button" value="列表页" @click="toListView()">
    
        <!-- 2. 准备一个区域 -->
        <router-view></router-view>
        <h2>下方将展示Home页</h2>
        <router-view name="HomeAddress"></router-view>
        <h2>下方将展示List页</h2>
        <router-view name="ListAddress"></router-view>
      </div>
    </template>
    
    <style scoped>
    
    </style>
    
    ```

- List.vue参数接收方

  - ```html
    <script setup>
    import {onUpdated, ref} from 'vue'
    import {useRoute} from 'vue-router'
    let myRoute=useRoute()
    
    let rsName=ref('')
    let rsAge=ref('')
    
    rsName.value=myRoute.params.name
    rsAge.value=myRoute.params.age
    onUpdated(()=>{
      rsName.value=myRoute.params.name
      rsAge.value=myRoute.params.age
    })
       
    </script>
    
    <template>
      <div>
        <h1>列表页</h1>
        <h3>姓名：{{ rsName }}</h3>
        <h3>年龄：{{ rsAge }}</h3>
      </div>
    </template>
    
    <style scoped>
    
    </style>
    ```

  - 

## 3.5 路由守卫

```js
//前置守卫
router.beforeEach((to,from,next)=>{
    console.log(to.path);
    console.log(from.path);
    if(to.path=="/home666"){
        console.log('想去首页，不好意思，去不了...');
        next('/list888/aaa/20')  //没有放行指定目的地
    }else{
        next() //放行
    }
})

//后置守卫
router.afterEach((to,from)=>{
    console.log('后置守卫...');
    console.log(to.path);
    console.log(from.path);
})
```

















