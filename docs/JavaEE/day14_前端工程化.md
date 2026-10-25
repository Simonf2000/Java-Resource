# 1.回顾

```tex
1. 异步请求
	Promise
	async和await
	axios
		异步请求的框架
		axios({})
		axios.get()
		axios.post()
		拦截器
	跨域处理
```

# 2.日程管理第六期

- 代码见项目

# 3.Pinia

## 3.1 创建pinia共享的数据

```js
//创建pinia共享数据
import {defineStore} from 'pinia'
/* 
    id: 当前对象的唯一标识
    state: 设置共享数据
    getters: 取值(支持运算)
    actions: 操作
*/
//第一种写法
/* let defineUser666=defineStore({
    id:'user101',
    state:()=>{
        return {
            id:1,
            username:'admin',
            password:'root',
            age:'20',
            hobby:['java','唱','跳']
        }
    },
    getters:{
        getHobbyCount(){
            return this.hobby.length
        },
        getAge(){
            return this.age
        }
    },
    actions:{
        doubleAge(){
            this.age*=2
        },
    }
}) */
//第二种写法
let defineUser666=defineStore('user102',{
    state:()=>{
        return {
            id:1,
            username:'admin',
            password:'root',
            age:'20',
            hobby:['java','唱','跳']
        }
    },
    getters:{
        getHobbyCount(){
            return this.hobby.length
        },
        getAge(){
            return this.age
        },
        getCount:(state)=>{
            return state.hobby.length
        }
    },
    actions:{
        doubleAge(){
            this.age*=2
        },
    }
})

export {defineUser666}
```



## 3.2 让pinia在项目里可用

### 3.2.1 base.js

```js
import {createPinia} from 'pinia'
let pinia=createPinia()

export {pinia}
```



### 3.2.2 main.js

```js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from './routers/router.js'

import {pinia} from './stores/baseStore.js'

let app=createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')

```

## 3.3 组件中使用pinia

### 3.3.1 List.vue

```html
<script setup>
import {defineUser666} from '../stores/userStore.js'
import {reactive} from 'vue'

let user=defineUser666()


</script>

<template>
  <div>
      <h2>List</h2>
      <h3>{{ user }}</h3>
      <h3>{{ user.$id }}</h3>
      <h3>{{ user.id }}</h3>
      <h3>{{ user.username }}</h3>
      <h3>{{ user.password }}</h3>
      <h3>{{ user.age }}</h3>
      <h3>{{ user.hobby }}</h3>
      <h3>{{ user.getHobbyCount }}</h3>
      <h3>{{ user.getAge }}</h3>
  </div>
  
</template>

<style scoped>

</style>

```

### 3.3.2 Update.vue

```html
<script setup>

import {defineUser666} from '../stores/userStore.js'
let user=defineUser666()

let fun01=()=>{
  user.doubleAge()
}

let fun02=()=>{
  user.$reset()
}
let fun03=()=>{
  user.$patch({username:'admin666',password:'root666',hobby:['java','跳']})
}
//数据修改监听器
user.$subscribe(()=>{
  console.log('数据修改');
})

</script>

<template>
  <div>
      <h2>Update</h2>
      <h3>{{ user }}</h3>
      username:<input type="text" v-model="user.username"> <br>
      password:<input type="text" v-model="user.password"> <br>
      age:<input type="text" v-model="user.age"> <br>
      hobby: 
        <input type="checkbox" v-model="user.hobby" value="java"> java
        <input type="checkbox" v-model="user.hobby" value="唱"> 唱
        <input type="checkbox" v-model="user.hobby" value="跳"> 跳
        <input type="checkbox" v-model="user.hobby" value="rap"> rap <br>
        <h3>调用actions的函数</h3>
        <input type="button" value="button01" @click="fun01()">
        <h3>自带的函数</h3>
        <input type="button" value="button02" @click="fun02()">
        <input type="button" value="button03" @click="fun03()">
  </div>
  
</template>

<style scoped>

</style>

```

# 4.日程管理第七期

## 4.1 保持登录状态

- 代码见项目

## 4.2 展示我的日程信息

- 在showSchedule页面挂载完成时，发送异步请求到服务器
  - 携带当前登录人的uid

- 服务器就接收请求，获取uid,调用service,service调dao,查到当前用户的日程信息(List\<SysSchedule\>)
- servlet将list集合放到Result的data属性上，将Result对象写回前端
- 前段拿到数据，赋值给数组或pinia，数组或pinia和页面上的表格进行的列表渲染













