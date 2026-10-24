# 1.回顾

```tex
1. 路由
	功能：组件切换
	router
		安装vue-router
		router.js
		编程式路由
			useRouter
		路由传参
			键值对
			路径参数
		路由守卫
	登录状态的检测
2. 日程管理第五期
	路由
	登录页面校验
	注册页面校验
```

# 2.异步请求

## 2.1 普通函数和回调函数

```html
<script setup>
// 1. 普通函数  
/* let fun01=()=>{
  console.log('fun01函数');
  throw new Error()
}

fun01()

console.log('后续代码'); */


//2. 回调函数
// setTimeout(()=>{
//   console.log('回调函数');
//   throw new Error()
// },2000)

// console.log('后续代码');

</script>

<template>
  
</template>

<style scoped>

</style>

```

## 2.2 Promise对象

```html
<script setup>
// 1. Promise
let promise=new Promise((resolve666,reject666)=>{
  console.log('promise函数...,实现一些功能：往服务器发送异步请求');
  //需要返回一个状态(promise对象)
  //a. 进行中  b. 成功   c. 失败
  resolve666('未知成功')
  // reject666('未知错误')
})

console.log('中间的代码');
//then是成功的回调函数
promise.then((value)=>{console.log('success'+value);})
//catch是失败的回调函数
promise.catch((value)=>{console.log(`error88${value}`);})

console.log('后续的代码');


//2. 可以链式调用
new Promise(()=>{}).then(()=>{}).catch(()=>{})





</script>

<template>
  
</template>

<style scoped>

</style>

```

## 2.3 async和await

```html
<script setup>
//1.  async和await
//1.1  async
    //a. 让函数的返回值变为Promise对象
    //b. 该函数默认返回成功状态的Promise对象，如果函数有返回值，则返回的数据是Promise对象的参数
    //   如果函数有异常抛出，则返回失败状态的Promise对象



// let fun01=async ()=>{
//   console.log('fun01函数');
//   //我们自己返回的数据是Promise对象的参数
//   // return '任意返回值'
//   // throw new Error()
//   //如果自己返回Promise对象，则该函数以你返回的状态为准
//   return new Promise((reslove,reject)=>{reject()})
// }

// // let fun02=function async(){}

// let promise=fun01()

// promise.then((value)=>{
//   console.log('fun01我等你...'+value);
// })

// promise.catch(()=>{
//   console.log('fun01我等你出错...');
// })

//1.2 await
    //a. 可以快速提取出Promise对象中的返回数据
    //b. await代码后的代码会等他运行完再执行
  //条件
    //await使用在函数内的话，该函数必须是async函数

let fun03=async()=>{
  console.log('fun03函数');
  return 'fun03返回的任意数据'
}


let fun04=async()=>{
  let result=await fun03()
  console.log(result);
}

fun04()

</script>

<template>
  
</template>

<style scoped>

</style>

```

## 2.4 axios的HelloWorld

```html
<script setup>
import {ref} from 'vue'
let msg=ref('')
  //1. axios(异步请求)
  //1.1 需要导入一个函数
  import axios from 'axios'
  //1.2 触发一个js函数
  let getMsg=()=>{
    //1.3 发送异步请求
    let promise=axios({
      method:'get',
      url:'http://forum.atguigu.cn/api/rand.qinghua?format=json',
      params:{
        username:'admin',
        password:'root'
      },
      headers:{}
    })

    //1.4 设置回调函数(拿到服务器的响应结果)
    promise.then((response)=>{
        console.log(response.data);
        msg.value=response.data.content
    })
  }

  //1.5 请求中都可以携带哪些参数
  /* 
    method: 请求方式
    url: 请求路径
    headers: 请求头信息
    params:  拼接在网址栏的请求参数
    data：  请求体数据(get请求没有)
*/
  //1.6 响应中都有哪些数据
  /* 
    data : 响应数据
    status:  响应状态码
  */



</script>

<template>
  <div>
    <h3>{{ msg }}</h3>
    <input type="button" value="点我" @click="getMsg()">
  </div>
</template>

<style scoped>

</style>

```

## 2.5 axios的一些设置

```html
<script setup>
import {request} from './request/request.js'
import {ref} from 'vue'
let msg=ref('')
let msg2=ref('')

//约定大于配置
let getMsg=async()=>{
  //异步请求发送方式
  // let {data}=await request({method:'get',url:'/api/rand.qinghua?format=json',params:{},data:{},headers:{}})
  //简写方式
  // let {data}=await request.get('/api/rand.qinghua?format=json',{params:{},headers:{}})
  let {data}=await request.post('/api/rand.qinghua?format=json',{},{params:{},headers:{}})


  msg.value=data.content
}



let getMsg2=async()=>{
  let {data}=await request({method:'get',url:'/api/rand.qinghua?format=json'})
  msg2.value=data.content
}
</script>

<template>
  <div>
    <h3>{{ msg }}</h3>
    <h3>{{ msg2 }}</h3>
    <input type="button" value="点我" @click="getMsg()">
    <input type="button" value="点我2" @click="getMsg2()">
  </div>
</template>

<style scoped>

</style>

```

## 2.6 跨域问题

- 在java端添加过滤器

  - ```java
    package com.atguigu.filter;
    
    import jakarta.servlet.*;
    import jakarta.servlet.annotation.WebFilter;
    import jakarta.servlet.http.HttpServletRequest;
    import jakarta.servlet.http.HttpServletResponse;
    
    import java.io.IOException;
    
    @WebFilter("/*")
    public class CrosFilter implements Filter {
        @Override
        public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
            HttpServletRequest request = (HttpServletRequest) servletRequest;
            System.out.println(request.getMethod());
            HttpServletResponse response = (HttpServletResponse) servletResponse;
            response.setHeader("Access-Control-Allow-Origin", "*");
            response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT,OPTIONS, DELETE, HEAD");
            response.setHeader("Access-Control-Max-Age", "3600");
            response.setHeader("Access-Control-Allow-Headers", "access-control-allow-origin, authority, content-type, version-info, X-Requested-With");
            // 如果是跨域预检请求,则直接在此响应200业务码
            if(request.getMethod().equalsIgnoreCase("OPTIONS")){
                servletResponse.getWriter().write("success");
            }else{
                // 非预检请求,放行即可
                filterChain.doFilter(servletRequest, servletResponse);
            }
        }
    }
    ```





















# 3.日程管理第六期

## 3.1 注册

- 用户名重复校验
  - 当用户输入完用户名市区焦点的时候，验证用户名的格式是否正确
  - 如果格式正确的话，发送异步请求到服务器校验用户是否重复
    - 响应数据(Result)

- 注册功能
  - 点击注册按钮，发送异步请求到服务器，携带请求参数，服务器保存到数据库即可
  - 服务器改动：将重定向改为响应数据(Result)
  - 前段就根据响应数据的结果进行处理(要么弹框要么去登录页面)

## 3.2 登录

- 点击登录按钮，发送异步请求到服务器，携带请求参数
- 服务器判断用户名和密码是否正确
- 服务器改动：将重定向改为响应数据(Result)
- 前段就根据响应数据的结果进行处理(要么弹框要么去首页)







