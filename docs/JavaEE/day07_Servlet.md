# 1.回顾

```tex
1. 登录和注册功能
2. Servlet
	注解版和配置文件版
	映射路径的写法
	Servlet的继承结构
	Servlet的生命周期
	ServletConfig
	ServletContext
	HttpServletRequest
	HttpServletResponse
```

# 2.转发和重定向

- 主要应用在前后端不分离的项目内

- 功能

  - 实现资源跳转

  - ```java
    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("FirstServlet...");
        String key = request.getParameter("key");
        System.out.println("key = " + key);
    
    
        //1. 资源跳转
        //1.1 跳转到target.html(静态资源)
        //1.1.1 转发
        /*RequestDispatcher requestDispatcher = request.getRequestDispatcher("target.html");
        requestDispatcher.forward(request,response);*/
        //1.1.2 重定向
        //response.sendRedirect("target.html");
    
        //1.2 跳转到SecondServlet(动态资源)
        //1.2.1 转发
        /*RequestDispatcher requestDispatcher = request.getRequestDispatcher("second");
        requestDispatcher.forward(request,response);*/
        //1.2.2 重定向
        response.sendRedirect("second");
    }
    ```

## 2.1 区别

|                      | 转发         | 重定向         |
| -------------------- | ------------ | -------------- |
| 浏览器感知           | 感知不到     | 能感知到       |
| 浏览器的网址是否变化 | 不会         | 会             |
| 请求次数             | 一次         | 两次或多次     |
| 请求参数             | 可以携带     | 不会携带       |
| 请求域共享数据       | 可以的       | 不可以的       |
| WEB-INF下的资源访问  | 可以访问到的 | 不可以访问到的 |
| 其他服务器资源       | 不能         | 能             |

- WEB-INF下的资源受服务器保护(客户端无法访问，服务器可以访问)

# 3.乱码问题

## 3.1 网页乱码

```
<meta charset="UTF-8">
```

## 3.2 请求乱码

### 3.2.1 tomcat7

- get请求存在乱码问题

  - 修改tomcat的核心配置文件(server.xml)

  - ```xml
    <Connector port="8888" protocol="HTTP/1.1"
                   connectionTimeout="20000"
                   redirectPort="8443" URIEncoding="utf-8"/>
    ```

- post请求也存在乱码问题

  - 在获取请求参数前设置编码格式

  - ```
    req.setCharacterEncoding("utf-8");
    ```

### 3.2.2 tomcat8

- get请求没有乱码问题
- post请求有乱码问题
  - 处理方式和tomcat7一致

### 3.2.3 tomcat10

- get、post都没有乱码问题

## 3.3 响应乱码

- 转发或者重定向到网页

- 通过输出流设置响应体数据

  - 有可能乱码

  - ```java
    //获取io流之前，设置编码格式
            //通过给Content-Type响应头设置值的时候设置编码格式
    //        resp.setHeader("Content-Type","text/html;charset=utf-8");
            resp.setContentType("text/html;charset=utf-8");
    ```

# 4.web项目路径问题

## 4.1 路径的种类

- 相对路径

  - ./ 或者  ../开头的路径

- 绝对路径

  - 从网络环境中定位一个资源(URL)

    - ```tex
      http://localhost:8888/day07/index.html
      http://localhost:8888/day07/charsetTestServlet
      ```

      

## 4.2 路径的使用

- 相对路径
  - ./(可以省略) 或者  ../开头的路径

- 绝对路径
  - /开头

## 4.3 /的含义

- 服务器解析

  - 当前上下文路径下

  - ```tex
    http://localhost:8888/day07/
    ```

- 浏览器解析

  - 当前服务器下(端口下)

  - ```tex
    http://localhost:8888/
    ```

## 4.4 哪些地方用到路径了？

- 为Servlet设置映射路径（注解或web.xml）
  - 服务器解析
- 网页上的路径
  - 浏览器解析
- 转发
  - 服务器
- 重定向
  - 浏览器

## 4.5 实验

- 注解或web.xml

  - 要求必须使用绝对路径，不能使用相对路径

  - ```java
    @WebServlet("/pathTestServlet")
    /pathTestServlet的含义：
    	http://localhost:8888/day07/pathTestServlet
    ```

- 网页上的路径

  - 相对绝对都可以使用

  - ```java
    相对路径的用法：
    <a href="./pathTestServlet">PathTestServlet</a>
       index.html的url是：http://localhost:8888/day07/index.html
       ./pathTestServlet的含义是：  http://localhost:8888/day07/pathTestServlet
    绝对路径的用法：
    <a href="/pathTestServlet">PathTestServlet</a>
    	/pathTestServlet的含义是： http://localhost:8888/pathTestServlet  404找不到
    需要将路径设置为：  /day07/pathTestServlet    http://localhost:8888/day07/pathTestServlet
    ```

  - 绝对路径好，所以推荐使用绝对路径

- 转发和重定向中的路径

  - 相对绝对都可以使用

  - ```tex
    /pathTestServlet
    	http://localhost:8888/day07/pathTestServlet
    	./target.html的含义： http://localhost:8888/day07/target.html
    	/target.html的含义：http://localhost:8888/day07/target.html
    ```

  - 绝对路径好，所以推荐使用绝对路径

## 4.6 结论

- 建议使用绝对路径
- 路径前加/
- /是什么含义
  - 服务器解析是上下文路径下
    - web.xml或注解  和  转发
  - 浏览器解析是端口下
    - 网页 和 重定向













