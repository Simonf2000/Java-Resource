# 1.回顾

```html
1. js
	js对象
	json数据
	数组
	事件绑定
	BOM编程
	DOM编程
	正则表达式
```

# 2.作业

# 3.xml

- 可扩展标记语言
- 用途
  - 配置文件

## 3.1 xml解析

- 导入jar包

- 创建xml配置文件

  - ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <employees>
        <manager id="101" abc="cba">
            <name>李老板</name>
            <age>20</age>
            <salary>一个小目标</salary>
        </manager>
        <employee id="102">
            <name>光头强</name>
            <age>30</age>
            <salary>-10000</salary>
        </employee>
        <employee id="103">
            <name>大马猴</name>
            <age>3</age>
            <salary>10000</salary>
        </employee>
    </employees>
    ```

- 编写java代码解析

  - ```java
    package com.atguigu;
    
    import org.dom4j.Attribute;
    import org.dom4j.Document;
    import org.dom4j.DocumentException;
    import org.dom4j.Element;
    import org.dom4j.io.SAXReader;
    
    import java.util.List;
    
    public class xmlDemo {
        public static void main(String[] args) throws DocumentException {
            //1. 创建解析器对象
            SAXReader reader=new SAXReader();
            //2. 加载xml文件得到Document对象
            Document document = reader.read(xmlDemo.class.getClassLoader().getResourceAsStream("emp.xml"));
            //3. 从文档对象中拿到根节点
            Element rootElement = document.getRootElement();
            System.out.println("rootElement = " + rootElement);
    
            //4. 可以获取根节点内的所有数据
            //4.1 获取经理的名字
            Element manager = rootElement.element("manager");
            Element name = manager.element("name");
            String text = name.getText();
            System.out.println("text = " + text);
    
            //4.2 获取第一个普通员工的名字
            Element emp01 = rootElement.element("employee");
            Element empName = emp01.element("name");
            String empText = empName.getText();
            System.out.println("text = " + empText);
    
            //4.3 获取所有普通员工的名字
            List<Element> employees = rootElement.elements("employee");
            for (Element employee : employees) {
                System.out.println(employee.element("name").getText());
            }
            System.out.println("---------------");
            //4.4 获取所有员工的名字
            List<Element> elements = rootElement.elements();
            for (Element element : elements) {
                System.out.println(element.element("name").getText());
            }
    
            //4.5 获取经理的abc属性值
            Element manager1 = rootElement.element("manager");
            Attribute abc = manager1.attribute("abc");
            String value = abc.getValue();
            System.out.println("value = " + value);
        }
    }
    ```

# 4.Tomcat

- 服务器
  - 硬件：计算机(操作系统-->Linux)
  - 软件: tomcat(运行后端程序的)

## 4.1 tomcat的安装

- 条件
  - 必须正确配置JAVA_HOME

- 解压即可
  - 解压到一个无中文无空格的路径下

## 4.2 使用

- 启动tomcat
  - bin-->startup.bat

- 通过客户端(浏览器)去访问服务器

  - ```tex
    http://localhost:8080/
    ```

- 关闭服务器
  - bin --> shutdown.bat
  - 点击x    (不推荐)

## 4.3 tomcat的目录结构

- bin  ★
  - 命令文件

- conf  ★
  - 配置文件

- lib
  - 存放jar包

- logs
  - 存放日志记录

- temp
  - 临时目录

- webapps ★
  - 部署项目的目录

- work
  - tomcat的工作目录

## 4.4 部署自己的项目

- 将项目拷贝到webapps目录内

- 启动服务器

- 客户端访问即可

  - ```tex
    http://localhost:8080/day05_homework/login.html
    ```

## 4.5 修改一些配置

- 解决日志信息的中文乱码问题
  - 将conf-->logging.properties中的UTF-8改为GBK

- 修改服务器的端口号
  - 默认是8080
  - conf-->server.xml



# 5.在IDEA内使用Tomcat 

## 5.1 将tomcat的路径配置到idea内 

- 图解见课件

## 5.2 创建web项目

- 创建java项目
- 添加web application组件
- 将tomcat的jar包提供给当前项目
  - 图解见课件

## 5.3 编写代码(前后端未分离的模式)

- 前端
- java代码
- 配置文件
- 第三方jar包

## 5.4 将web项目部署到服务器上

- 创建一个本地tomcat的镜像服务器
- 将web项目部署到服务器上并设置上下文路径(服务器上的项目名)
  - 图解见课件

- 启动服务器
- 客户端就访问web项目

## 5.5 idea服务器原理

- tomcat创建的镜像服务器在哪里？
  - C:\Users\15201\AppData\Local\JetBrains\IntelliJIdea2022.2\tomcat\镜像服务器

- 镜像服务器部署项目的方式！
  - 创建配置文件，将项目路径引进来

## 5.6 web项目编译后是什么样的？

### 5.6.1 本地项目的目录结构

- day05_web  项目名
  - resources   配置文件
  - src              java代码
  - web          
    -  静态资源(html/css/js/图片...)
    - WEB-INF
      - web.xml    web项目的核心配置文件
      - lib              第三方工具包

### 5.6.2 编译后的项目目录结构

- 目录名
  - web下的所有内容
  - 静态资源(html/css/js/图片...)
  - WEB-INF
    - classes      resources和src下的内容
    - web.xml     web项目的核心配置文件
    - lib               第三方工具包

# 6.HTTP协议

- 超文本传输协议
  - 规定的就是浏览器和服务器之间数据传输的格式

- 报文
  - 请求报文
  - 响应报文

## 6.1 请求报文

请求头部

​	请求首行

​	请求头内容

空行

请求体

### 6.1.1 get请求

```properties
请求首行
请求方式  请求资源             协议/版本
GET /day05/pages/index.html HTTP/1.1
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9
Connection: keep-alive
Host: localhost:8888
Referer: http://localhost:8888/day05/pages/list.html    请求来源（防盗链）
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: same-origin
Sec-Fetch-User: ?1
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36    客户端的产品信息
sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
```

- get请求没有请求体
  - 用户输入的数据是拼接在网址栏的，对数据量有限制



### 6.1.2 post请求

```properties
请求方式
POST /day05/pages/index.html HTTP/1.1
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6
Cache-Control: no-cache
Connection: keep-alive
Content-Length: 0
Content-Type: application/x-www-form-urlencoded
Host: localhost:8888
Origin: http://localhost:8888
Pragma: no-cache
Referer: http://localhost:8888/day05/pages/list.html
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: same-origin
Sec-Fetch-User: ?1
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0
sec-ch-ua: "Microsoft Edge";v="119", "Chromium";v="119", "Not?A_Brand";v="24"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
```

- post是有请求体的
  - 存储用户输入的数据的，对于数据量没有限制

## 6.2 响应报文

响应头

​	响应首行

​	响应头信息

空行

响应体

​	响应数据

```properties
协议/版本  响应状态码
HTTP/1.1 200

Accept-Ranges: bytes
ETag: W/"151-1701833166708"
Last-Modified: Wed, 06 Dec 2023 03:26:06 GMT
Content-Type: text/html    响应数据的类型
Content-Length: 151
Date: Wed, 06 Dec 2023 07:38:44 GMT
Keep-Alive: timeout=20
Connection: keep-alive
```

### 6.2.1 响应状态码

- 200   成功
- 302  重定向
- 304 从缓存中获取
- 400 请求失败
- 404   资源找不到
- 405  方法被禁用
- 406 请求失败
- 500   服务器错误

## 6.3 HTTP协议1.0和1.1的区别

- 1.0
  - 短连接

- 1.1 
  - 长连接

# 7.Servlet

- server applet（服务器端的小程序）

## 7.1 静态资源和动态资源

- 静态资源
  - html/css/js/图片...

- 动态资源
  - Servlet、jsp、Thymeleaf...

## 7.2 Servlet

- 比喻
  - 将服务器比作是一间餐厅的话，Servlet就是服务员的身份
    - 工作内容：和客户端进行数据交互

## 7.3 HelloWorld

- 创建一个web模块
- 创建一个网页(login.html)
  - 点击登录有请求发送

- 创建Servlet(处理登录请求)
  - 创建一个普通的java类
  - 继承HttpServlet
  - 重写service方法
  - 为Servlet设置一个映射路径(虚拟路径、访问路径)



```java
//必须以/开头
@WebServlet("/login666")
public class LoginServlet extends HttpServlet {

    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("LoginServlet的service方法执行了...");

        //1. 如何获取用户在表单中输入的数据
        String username = request.getParameter("username");
        System.out.println("username = " + username);

        String password = request.getParameter("password");
        System.out.println("password = " + password);


        //2. 如何响应页面
        response.sendRedirect("login_success.html");

    }
}
```

## 7.4 暂时需要满足的条件

- 所有的html页面都直接在web下
- Servlet的映射路径必须以/开头
- 页面上的Servlet路径不能以/开头



