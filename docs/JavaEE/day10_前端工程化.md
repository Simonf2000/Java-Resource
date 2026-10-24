# 1.回顾

```tex
1. AJAX
	原生js发送异步请求
	日程管理第四期
		用户名的重复校验
2. 前端工程化
	es6是js的版本(2015)
		变量和常量
		模版字符串
		解构表达式
		箭头函数
			this对象
```

# 2.es6

## 2.1 可变参数

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
        //1. 可变参数
        //1.1 形参列表(rest参数)
        function fun01(...arr){
            console.log(arr);
        }

        fun01(1,2,3,"java",5)

        //1.2 实参(spread参数)
        function fun02(a,b,c){
            console.log(a+b+c);
        }

        let arr2=[2,3,"mysql"]
        fun02(...arr2)

        let arr3=[5,7,"aaa"]

        let arr4=[...arr2,...arr3]
        console.log(arr4);



    </script>
</body>
</html>
```

## 2.2 对象的创建

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
        1. es6新增的关键字  （class extends constructor）
     -->
     <script>
        class Person{
            id;
            name;
            #age; //私有属性

            //get set方法
            set a(a){
                console.log('正在给age赋值，值是'+a);
                this.#age=a
            }

            get a(){
                console.log('正在获取a的值');
                return this.#age
            }


            //实例方法
            eat=function(){
                console.log(this.name+"在吃饭"+this.#age);
            }

            //静态方法
            static sleep=function(){
                console.log(this.id+"在睡觉");
            }

            constructor(i,n,a){
                console.log('构造方法');
                this.id=i;
                this.name=n;
                this.#age=a
            }

            
        }


        let per01=new Person(102,'jack',18)
        // per01.id=101
        // per01.name='tom'

        // per01.a=20

        console.log(per01.id);
        console.log(per01.name);
        console.log(per01.a);

        per01.eat()
        Person.sleep()


        class Emp extends Person{
            salary;

            work(){
                console.log(this.name+"在工作，工作完成拿到工资是："+this.salary);
            }

            constructor(i,n,a,s){
                super(i,n,a)
                this.salary=s
            }
        }

        let emp01=new Emp(103,'rose',19,3000)
        emp01.work()
    




     </script>
</body>
</html>
```

## 2.3 对象拷贝

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!--  -->
    <script>
        let obj={
            id:101,
            name:'jack'
        }
        //地址传递(浅拷贝)
        // let objCopy01=obj

        //深拷贝
        let objCopy02=JSON.parse(JSON.stringify(obj))

        obj.name='tom'

        console.log(obj);
        console.log(objCopy02);

    </script>
</body>
</html>
```

## 2.4 模块化

### 2.4.1 index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- ★★★  默认的情况下，是不支持模块化的，需要开启 -->
    <script src="index.js" type="module"></script>
</head>
<body>
    <!-- html文件内无法使用fun01函数 -->
    <!-- vue文件内是可以用的 -->
    <!-- 组件：vue文件是：html+css+js的组合版 -->
    <input type="button" value="按钮">
</body>
</html>
```

### 2.4.2 index.js

```js
//导入全部
// import * as b1 from './base.js'

//导入部分
// import {a,arr,Student} from './base.js'

//导入默认的
import arrs from './base.js'


function fun01(){
    /* console.log('fun01函数');
    console.log(b1.a);
    console.log(b1.arr);
    let stu01=new b1.Student()
    stu01.info() */

    console.log('fun01函数');
    // console.log(a);
    console.log(arrs);
    let stu01=new Student()
    stu01.info()
}

fun01()

```

### 2.4.3 base.js

```js
//分别导出
export let a=10;

let arr=[1,2,3]

class Student{
    id;
    name;

    info(){
        console.log("这是："+this.name);
    }
}
//统一导出
export {arr,Student}

//默认导出(只能导出一个)
export default arr
```

# 3.Nodejs

## 3.1 安装Nodejs

- 双击安装即可

## 3.2 npm

- 配置下载地址
  - npm config set registry https://registry.npmmirror.com  或  https://mirrors.tencent.com/npm/
  - npm config get registry

- 配置本地库地址
  - npm config set prefix "D:\GlobalNodeModules"
  - npm config get prefix

- 升级npm
  - npm install -g npm@9.6.6



## 3.3 npm常用命令

- npm init   初始化
  - -y   对所有提问回答yes

- npm install 产品名字@版本
  - 不指定版本下载最新的
  - -g 下载到本地库
  - npm install     安装已经在package.json中记录的第三方工具
- npm uninstall 产品名字
- npm update 产品名字    
  - 更新产品

- npm ls  
  - 查看本项目的依赖

- npm list -g
  - 查看本地库的依赖

- npm run 运行内容的名字
  - 后期使用dev的脚本，启动前端服务器

# 4.Vue3

- 声明式渲染 ★
  - 声明式
  - 渲染
    - 将数据展示在网页上
- 响应性

## 4.1 Vue3的非工程化方式体验

- 创建一个html
- 导入vue3的代码(js文件)
- 编写Vue3代码
  - 在Vue3中创建一些变量
  - 将这些变量的值显示在页面上
    - 文本
    - 属性值





# 5. Vite

- npm create vite
  - 创建Vite+vue3的项目

- cd 项目内
- npm install 
  - 安装依赖

- npm run dev
  - 自动化构建+部署
  - ctrl+c结束服务

## 5.1 Vite项目的目录结构

- day10_vite  项目名

  - node_modules   依赖所在的目录

  - src   源代码

    - assets
      - 静态资源
    - components
      - 组件(vue文件)
    - pages 
      - 组件(vue文件)
    - routers
      - 路由文件(js文件)

    - stores
      - 共享数据的
    - App.vue  （核心组件）
    - main.js    (核心js文件)
    - style.css  

  - index.html    首页

  - package.json   项目信息文件

  - vite.config.js  vite项目的配置文件

    - 端口号
    - 代理主机
    - ...

## 5.2 vite项目运行原理

- 只有一个页面(index.html)
  - index.html网页内引入main.js
  - main.js进行Vue挂载，引入App.vue
- 将App.vue的内容挂载在index.html网页上

## 5.3 组件

- 组件文件是后缀为.vue的文件
  - html+css+js

- xxx.vue
  - script标签(编写js代码)
  - template标签(编写html代码)
  - style标签(编写css代码)









