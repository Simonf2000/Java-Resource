# 1.回顾

```tex
1. HTML
	head中的标签
	body中的标签
2. CSS
	引入方式
	常见的css
3. JS
	特点
	JS的引入方式
	数据类型
	变量
	运算符
	流程控制结构
	函数
```

# 2.JS

## 2.1 js的对象

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        //1. 对象如何创建
        //1.1 通过new关键字
        var emp01=new Object()

        //1.2 通过{}
        var emp02={
            id:102,
            name:'js开发者',
            age:18,
            salary:30000,
            abc:'cba',

            work:function(){
                console.log(this.name+'在开发');
            },
        }

        //2. 如何操作对象的属性值
        emp01.id=101;
        emp01.name='java开发者';
        emp01.age=20;
        emp01.salary=50000;

        console.log(emp01.id);
        console.log(emp01.name);
        console.log(emp01.age);
        console.log(emp01.salary);

        console.log(emp02.id);
        console.log(emp02.name);
        console.log(emp02.age);
        console.log(emp02.salary);
        console.log(emp02.abc);

        //3. 如何操作对象的函数

        emp01.work=function(){
            console.log(this.name+'在认真工作');
        }

        emp01.sleep=function(){
            console.log(this.name+"在睡觉，面临就业的风险");
        }

        emp01.work()
        emp01.sleep()

        emp02.work()


        //2. this关键字
        //2.1 this用在函数内，和java的含义一样,就是当前对象
        //2.2 this用在函数外，是window对象(当前浏览器窗口对象)

        console.log(window);
        console.log(this);


    </script>
</body>
</html>
```

## 2.2 json数据

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 1. json数据
            json数据是一种特殊格式的字符串(数据类型是string)
            json数据可以和js对象进行格式转换
            json格式是什么样子的？
                只有两个符号：  {}   []
    -->
    <!-- 1.1 js对象如何转成json数据 -->
    <script>
        var student01={
            id:101,
            name:'喜羊羊',
            age:2,
            computer:{
                brand:'外星人',
                price:20000,
                color:'绿色'
            },
            cars:['马自达','老头乐','摇摇车','劳斯莱斯']
        }

        var json01=JSON.stringify(student01)
        console.log(student01);
        console.log(typeof student01);
        console.log(json01);
        console.log(typeof json01);
        console.log(json01.id);//取不到值
    </script>

    <!-- 1.2 json数据转成js对象 -->
    <script>
        var json02='{"id":101,"name":"喜羊羊","age":2,"computer":{"brand":"外星人","price":20000,"color":"绿色"},"cars":["马自达","老头乐","摇摇车","劳斯莱斯"]}'
        var student02=JSON.parse(json02)
        console.log(student02);
        console.log(typeof student02);
        console.log(student02.id);
        console.log(student02.name);
        console.log(student02.age);
        console.log(student02.computer.brand);
        console.log(student02.computer.price);
        console.log(student02.computer.color);
        console.log(student02.cars[0]);
        console.log(student02.cars[1]);
        console.log(student02.cars[2]);
    </script>
</body>
</html>
```

## 2.3 数组

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        //1. 数组如何创建
        //1.1 通过new关键字
        var arr01=new Array()

        //1.2 通过[]
        var arr02=[1,3,"jj",true]

        //2. 操作数组
        arr01[0]=10
        arr01[1]="10"
        arr01[2]=true
        arr01[4]=false

        

        //3. 常用方法
        arr01.push('java')

        arr01.splice(3,1)

        for(var i=0;i<arr01.length;i++){
            console.log(arr01[i]);
        }
    </script>
</body>
</html>
```

## 2.4 事件绑定

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .div01{
            width: 100px;
            height: 100px;
            background-color: blue;
        }
    </style>
    <script>
        function fun01(){
            console.log('fun01函数执行了');
            return true
        }
    </script>
</head>
<body>
    <!-- 1.事件如何绑定 -->
    <!-- 1.1 通过事件属性绑定 -->
    <input type="button" value="按钮" onclick="fun01()">
    <!-- 1.2 通过dom编程绑定 -->
    <script>
        //当前窗口加载完触发
        window.onload=function(){
            var obj=document.getElementById('btn02')
            obj.onclick=function(){
                console.log('点击了二号按钮');
            }
        }
    </script>
    <input type="button" value="二号按钮" id="btn02">


    <!-- 2. 有哪些事件 
        onclick  单击事件
        ondblclick   双击事件
        onmouseover   鼠标移动到某个元素上
        onmouseout    鼠标移出某个元素
        onmousemove   鼠标某个元素内移动
        onkeydown     键盘按下
        onkeyup       键盘抬起
        onfocus       获取焦点
        onblur        失去焦点
        onchange      值改变
        onsubmit      表单提交
        onload        加载完毕
    -->
    <input type="button" value="双击测试" ondblclick="fun01()">
    <div class="div01" onmousemove="fun01()"></div>
    <input type="text" onkeyup="fun01()">
    <form action="./01_js的对象.html" onsubmit="return fun01()">
        <input type="text" onchange="fun01()">
        <input type="submit" >
    </form>

</body>
</html>
```

## 2.5 BOM编程

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
        1. window对象
            常见属性
                document  当前文档对象（DOM编程）
                history   历史
                location   类似于超链接
                sessionStorage  会话级别的本地存储
                localStorage   本地存储
            常见方法
                alert()   提示框
                confirm()
                prompt()
                setTimeout()
                setInterval()

     -->
     <input type="button" value="返回" onclick="back()">
     <input type="button" value="点击跳转至百度" onclick="go()">
     <input type="button" value="保存数据到本地" onclick="addData()">
     <input type="button" value="弹框" onclick="test()">

     <script>
        function back(){
            //返回历史上一级
            window.history.back()
        }

        function go(){
            //跳转至百度
            window.location.href="http://baidu.com"
        }

        function addData(){
            //保存数据到本地
            window.localStorage.setItem('username','admin')
            window.sessionStorage.setItem('password','root')
            
        }

        function test(){
            // alert('内容')
            /* var flag=confirm('确定要这样吗？')
            if(flag){
                alert('OK，拜拜');
            }else{
                alert('OK，再给你一次机会！')
            } */

           /* var rs= prompt('请输入你的银行卡密码：')

           alert('密码是：'+rs+',10秒后，银行卡余额：0') */

           setTimeout(function(){
            console.log('aaaa');
           },2000);

           setInterval(function(){
            console.log('bbbb');
           },2000);
        }
     </script>
</body>
</html>
```

## 2.6 DOM编程

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 1. dom编程之查询
        document   文档
        element    元素
        attribute  属性
        text       文本
    -->
    <!-- 1.1 从整个文档内搜索 -->
    <script>
        function test01(){
            var p=document.getElementById('p01')
            console.log(p);
           var c01= document.getElementsByClassName('c01')
           for (var i in c01) {
            console.log(c01[i]);
           }

           document.getElementsByName('')
           document.getElementsByTagName('input')
        }
    </script>

    <!-- 1.2 从父级中查找子级 -->
    <script>
        function test02(){
            var div01=document.getElementById('div01');
            var childs=div01.children;
            for (var i in childs) {
             console.log(childs[i]);
            } 

            var first=div01.firstElementChild
            console.log(first);

            var last=div01.lastElementChild
            console.log(last);

        }
    </script>

    <!-- 1.3 根据子级寻找父级 -->
    <script>
        function test03(){
            var aa=document.getElementById('li01')
            var parent=aa.parentElement.parentElement
            console.log(parent);
        }
    </script>

    <!-- 1.4 找兄弟 -->
    <script>
        function test04(){
            var aa=document.getElementById('li01')
            var parent=aa.parentElement
           var prev= parent.previousElementSibling
           console.log(prev);

           var next=parent.nextElementSibling
           console.log(next);

        }
    </script>

    <!-- 2. 操作属性和文本  -->
    <script>
        function test05(){
            var aa=document.getElementById('li01')

            //获取li内的文本值
            var text=aa.innerText
            console.log(text);

            var html=aa.innerHTML
            console.log(html);

            //修改li内的文本值
            aa.innerText='<b>沸羊羊</b>'
            // aa.innerHTML='<b>沸羊羊</b>'

           var username= document.getElementById('username')

           //获取属性值
            console.log(username.type);
            console.log(username.id);
            console.log(username.value);

            //设置属性值
            // username.type='password'
            username.id='username666'
            username.value='root'

        }
    </script>

    <!-- 3. dom之增删 -->
    <script>
        function test06(){
            //创建一个元素对象
            var li=document.createElement('li')  //<li></li>

            // li.innerText='懒羊羊'

            var text=document.createTextNode('懒羊羊')
            li.appendChild(text)   //<li>懒羊羊</li>


            //将li追加到ul内
            var ul01=document.getElementById('ul01');
            // ul01.appendChild(li)

            //将懒羊羊添加到bb前面
            var bb=document.getElementById('li02');
            // ul01.insertBefore(li,bb)

            //将懒羊羊替换掉bb
            ul01.replaceChild(li,bb)


            //删除
            ul01.remove()

        }
    </script>


    <div id="div01">
        <p id="p01" class="c01">段落</p>
        <h1 class="c01">标题</h1>
        <input type="text" id="username" value="admin">
        <ul id="ul01">
            <li id="li01"><b>aa</b></li>
            <li id="li02">bb</li>
        </ul>
        <input type="text" id="password">
        <img src="" alt="">
    </div>
    

    <input type="button" value="测试全文查找" onclick="test01()">
    <input type="button" value="测试父级找子级" onclick="test02()">
    <input type="button" value="测试子级找父级" onclick="test03()">
    <input type="button" value="测试找兄弟" onclick="test04()">
    <input type="button" value="操作属性和文本" onclick="test05()">
    <input type="button" value="dom之增删" onclick="test06()">
</body>
</html>
```

## 2.7 正则

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 1. 正则表达式
        功能：校验数据的格式是否符合要求
    -->
    <!-- 1.1 如何编写正则表达式 -->
    <script>
        function checkUsername(){
            //字母+数字组成，5-10位
            var username=document.getElementById('username').value
            //1. 编写正则表达式
            var reg=/^[a-zA-Z0-9]{5,10}$/
            if(reg.test(username)){
                console.log('满足');
            }else{
                console.log('不满足');
            }
        }
        function checkPassword(){
            var password=document.getElementById('password').value
            var passwordErrorMsg=document.getElementById('passwordErrorMsg')

            var reg=/^[0-9]{6}$/

            if(reg.test(password)){
                passwordErrorMsg.innerText='√'
            }else{
                passwordErrorMsg.innerText='×'
            }
        }

    </script>
    <input type="text" id="username" onblur="checkUsername()"><br>
    <input type="text" id="password" onblur="checkPassword()"><span id="passwordErrorMsg"></span><br>
    
</body>
</html>
```

