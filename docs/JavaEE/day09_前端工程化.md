# 1.回顾

```tex
1. 会话  
	Cookie技术
		如何设置Cookie数据
		如何获取Cookie数据
		一些设置
	Session技术
		如何创建Session对象
		如何共享数据
		操作
2. 过滤器
	创建过滤器
	xml和注解配置过滤路径
	过滤器的生命周期
	过滤器链
3. 日程管理第三期
4. 监听器
```

# 2.AJAX

-  Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）
    - 异步(AJAX渲染)和同步(服务器渲染)

## 2.1 index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script>
        function sendRequest(){
            console.log("准备发送请求了！请服务器接受！！！");
            var username=document.getElementById("username").value;
            var usernameMsg=document.getElementById("usernameMsg")
            //1. 创建XMLHttpRequest 对象
            var request=new XMLHttpRequest();
            //2. 设置回调函数(服务器给响应后调用的函数)
            request.onreadystatechange=function (){
                if(request.readyState==4 && request.status==200){
                    //处理服务器给的响应数据进行dom操作
                    console.log("服务器给200的响应了...")
                    //拿到服务器响应的数据
                    var result=request.responseText
                    console.log("响应数据："+result)
                    if(result=="yes"){
                        usernameMsg.innerText="√"
                    }else{
                        usernameMsg.innerText="用户名重复请更换！"
                    }
                }
            }
            //3. 设置请求的信息
            request.open("get","ajaxTestServlet?username="+username)
            //4. 发送
            request.send();

            console.log("异步请求函数最末尾的代码")
        }
    </script>
</head>
<body>
    <h1>首页</h1>
    username:<input type="text" id="username" value="admin"><span id="usernameMsg"></span> <br>
    <input type="button" value="按钮" onclick="sendRequest()">
</body>
</html>
```

## 2.2 AjaxTestServlet

```java
package com.atguigu.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/ajaxTestServlet")
public class AjaxTestServlet extends HttpServlet {
    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("username");
        System.out.println("username = " + username);

        PrintWriter writer = response.getWriter();
        //如何给js响应呢？
        if(username.equals("admin")){
            writer.write("no");
        }else{
            writer.write("yes");
        }

    }
}

```

# 3.日程管理第四期

代码加项目

# 4.es6

## 4.1 es的变量

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- es6的变量
        let
            1、let 不能重复声明；
            2、let有块级作用域，非函数的花括号遇见let会有块级作用域，也就是只能在花括号里面访问；
            3、let不会预解析进行变量提升；
            4、let 定义的全局变量不会作为window的属性；
            5、let在es6中推荐优先使用；
        es6的常量
        const
            一旦被赋值就可以改变(如果是引用数据类型就不能改变地址)
    -->
    <script>
        let a=10;
        let b="java"
        console.log(a);

        /* function aa(){
            var c=30;
        } */

        {
            var c=40;
            let d=50;
        }
        console.log(c);
        // console.log(d);


        // console.log(e);
        let e=60;

        let f=70;
        console.log(window.f);
        console.log(f);

        const g=80;
        console.log(g);
        // g=100;
        // console.log(g);

        const arr=[1,2,3]
        console.log(arr);
        arr.push(4)
        console.log(arr);
        arr=[3,4,5]
    </script>
</body>
</html>
```

## 4.2 es6的模板字符串

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 1. 模板字符串
           好处:
            换行不用拼接
            插入变量的值直接使用取值表达式${变量名}
    -->
    <script>
        function addCity(){
            let name=document.getElementById('name').value
            let citys=document.getElementById('citys')
            // citys.innerHTML="<li>"+name+"</li>"+
            // "<li>北京铜火锅66</li>"+
            // "<li>重庆辣火锅66</li>"

            //使用模板字符串
            citys.innerHTML=`<li>${name}</li>
            <li>北京铜火锅66</li>
            <li>重庆辣火锅66</li>`
        }
    </script>
    name:<input type="text" id="name"> <br>
    <ul id="citys">
        
    </ul>
    <input type="button" value="添加" onclick="addCity()">
</body>
</html>
```

## 4.3 es6的解构表达式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 
        1. 解构表达式
            快速帮助我们从数组或者对象中取值


     -->
     <script>
        //1.从对象中解构
        // let obj={
        //     id:101,
        //     name:'张三',
        //     age:20,
        //     salary:50000
        // }

        // let id=obj.id;
        // let {id,name,age,salary:salary6}=obj;
        // console.log(id);
        // console.log(name);
        // console.log(age);
        // console.log(salary6);

        //2. 从数组中解构
        let arr=[1,3,6,"java"]
        
        // let [a,b,c,d]=arr;
        // console.log(a);
        // console.log(b);
        // console.log(c);
        // console.log(d);

        //3. 函数解构
        function fun01([a,b,c,d]){
            console.log(a);
            console.log(b);
            console.log(c);
            console.log(d);
        }
        fun01(arr)

     </script>
</body>
</html>
```

## 4.4 es6的箭头函数

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            width: 100px;
            height: 100px;
            background-color: aquamarine;
        }
    </style>
</head>
<body>
    <!-- 1. 箭头函数
            功能:简写函数
            语法: ()=>{}
            简化:
                形参只有一个的时候,小括号可以省略
                如果代码块中只有一行代码,大括号可以省略
                    如果这行代码是return语句,return也必须省略
        2. 箭头函数中的this关键字
                当前对象的父级对象
    -->
    <script>
        // function fun01(a){
        //     console.log(a);
        // }

        // var fun02=(a)=>a
        // // console.log(a);


        // fun01(1,2,3)
        // let rs=fun02(2,3,4)
        // console.log(rs);

        
        let obj={
            id:101,
            name:'李四',
            sleep:function(){
                console.log(this.name+"在睡觉");
            },
            eat:()=>{
                //当前对象的所属对象(父对象)
                console.log(this);
                console.log(this.name+"在吃饭");
            }
        }

        obj.sleep()
        obj.eat()





    </script>
    <!-- 点击div,3秒之后背景颜色变为红色 -->
    <div id="div01"></div>


    <script>
        let div01=document.getElementById('div01')
        /* div01.onclick=function(){
            console.log(this);//div01这个元素
            let thisCopy=this;

            setTimeout(function(){
                console.log(this);
                thisCopy.style.backgroundColor="red"
            },3000)
        } */
        div01.onclick=function(){
            console.log(this);//div01这个元素
            setTimeout(()=>{
                console.log(this);
                this.style.backgroundColor="red"
            },3000)
        }
    </script>
</body>
</html>
```

