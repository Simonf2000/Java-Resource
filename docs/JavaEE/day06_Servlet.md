# 1.回顾

```tex
1.xml解析
	如何编写xml代码
	java程序如何解析xml文件内容
2. tomcat
	javaweb服务器
	tomcat的安装和使用
	idea中如何使用tomcat
3. Http协议
	请求报文
	响应报文
4. Servlet
	HelloWorld
```

# 2.作业

## 2.1 准备工作

- 准备数据库和表格
- 创建web模块，创建tomcat镜像服务器
- 准备页面
- 准备配置文件、工具类和第三方jar包
- 创建实体类

## 2.2 实现登录注册功能

代码见idea

# 3.Servlet

## 3.1 Servlet的写法

- 注解

  - ```
    @WebServlet("/hello")
    ```

- 配置文件

  - 位置：web.xml

  - ```xml
    <!--为HelloServlet设置映射路径-->
    <servlet>
        <!--为当前Servlet起个名字-->
        <servlet-name>HelloServletAbc</servlet-name>
        <!--HelloServlet的全类名-->
        <servlet-class>com.atguigu.servlet.HelloServlet</servlet-class>
    </servlet>
    
    <servlet-mapping>
        <!--和上面的servlet-name保持一致-->
        <servlet-name>HelloServletAbc</servlet-name>
        <!--设置映射路径-->
        <url-pattern>/hello</url-pattern>
    </servlet-mapping>
    ```

## 3.2 映射路径的写法

```xml
<servlet-mapping>
    <!--和上面的servlet-name保持一致-->
    <servlet-name>HelloServletAbc</servlet-name>
    <!--设置映射路径-->
    <!--1. /hello就是精确匹配   ★  -->
    <!--<url-pattern>/hello</url-pattern>
    <url-pattern>/hello2</url-pattern>
    <url-pattern>/hello3</url-pattern>
    <url-pattern>/hello/four</url-pattern>-->
    <!--2. 目录(前缀)匹配-->
    <!--<url-pattern>/hello/*</url-pattern>
    <url-pattern>/*</url-pattern>-->
    <!--3. 后缀匹配-->
    <url-pattern>*.html</url-pattern>
</servlet-mapping>
```

## 3.3Servelt的继承结构

### 3.3.1 实现Servlet接口

- 创建一个类

- 实现Servlet接口

- 实现所有的抽象方法

- 设置映射路径

- 缺点

  - 实现的方法有点多

  - ServletRequest和ServletResponse功能少

  - ```java
    public class HelloServlet implements Servlet {
    
        @Override
        public void init(ServletConfig servletConfig) throws ServletException {
    
        }
    
        @Override
        public ServletConfig getServletConfig() {
            return null;
        }
    
        //service是重点关注的
        @Override
        public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
            System.out.println("HelloServlet...");
            
        }
    
        @Override
        public String getServletInfo() {
            return null;
        }
    
        @Override
        public void destroy() {
    
        }
    }
    ```

### 3.3.2 继承GenericServlet

- 创建一个类
- 继承GenericServlet
- 实现所有的抽象方法
- 设置映射路径
- 优点
  - 将service外的其余方法做了实现，开发者不用必须实现，可以采用重写

- 缺点
  - ServletRequest和ServletResponse功能少

```java
public class HelloServlet extends GenericServlet {

    @Override
    public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {

    }
}
```

### 3.3.3 继承HttpServlet

- 创建一个类
- 继承HttpServlet
- 重写service或doGet和doPost方法
- 设置映射路径
- 优点
  - 对request和response功能进行了增强

```java
public class HelloServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("doGet...");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("doPost...");
    }
}
```

## 3.4 Servlet生命周期

- 默认情况下，是第一次请求到该Servlet，Servlet对象被创建，创建完后立刻进行初始化，然后调用service方法

  - 设置web项目加载的时候就创建Servlet对象，并初始化

    - ```
      <!--设置对象自启动-->
      <load-on-startup>100</load-on-startup>
      ```

- 在后续的每次请求中都直接调用service方法

- web项目被卸载的时候Servlet对象销毁

## 3.5 ServletConfig

- 当前Servlet的配置对象，一个Servlet对应唯一的一个ServletConfig对象

- 封装的是当前Servlet的配置信息

- ServletConfig对象如何获取？

  - ```
    getServletConfig
    ```

```java
@WebServlet(
        name = "ServletConfigDemoCba",
        value = {"/servletConfigDemo","/aaa","/bbb"},
        loadOnStartup = 1,
        initParams = {@WebInitParam(name = "key01",value = "value100"),@WebInitParam(name = "key02",value = "value200")})
public class ServletConfigDemo extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("ServletConfigDemo....");
        //ServletConfig
        //1. 如何获取？
        ServletConfig servletConfig = this.getServletConfig();
        //2. 常用方法
        String servletName = servletConfig.getServletName();
        System.out.println("servletName = " + servletName);

        ServletContext servletContext = servletConfig.getServletContext();
        System.out.println("servletContext = " + servletContext);

        String key01 = servletConfig.getInitParameter("key01");
        System.out.println("key01 = " + key01);

        String key02 = servletConfig.getInitParameter("key02");
        System.out.println("key02 = " + key02);

        Enumeration<String> initParameterNames = servletConfig.getInitParameterNames();
        while (initParameterNames.hasMoreElements()){
            String s = initParameterNames.nextElement();
            System.out.println("s = " + s);
        }



    }
}
```

## 3.6 ServletContext

- ServletContext是web项目的上下文对象
- 整个web项目只有一个(全局)
- 如何获取ServletContext对象?

```java
package com.atguigu.servlet;

import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.Enumeration;

public class ServletContextDemo extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //ServletContext
        //1. 如何获取？
        ServletContext servletContext1 = getServletConfig().getServletContext();
        System.out.println("servletContext1 = " + servletContext1);

        ServletContext servletContext2 = this.getServletContext();
        System.out.println("servletContext2 = " + servletContext2);

        ServletContext servletContext3 = req.getServletContext();
        System.out.println("servletContext3 = " + servletContext3);

        //2. 常见方法
        //2.1 获取上下文路径
        String contextPath = servletContext1.getContextPath();
        System.out.println("contextPath = " + contextPath);
        //2.2 获取全局初始化参数
        String contextKey01 = servletContext1.getInitParameter("contextKey01");
        System.out.println("contextKey01 = " + contextKey01);
        Enumeration<String> initParameterNames = servletContext1.getInitParameterNames();
        while (initParameterNames.hasMoreElements()){
            System.out.println(initParameterNames.nextElement());
        }

        //2.3 根据虚拟路径获得本地真实路径（绝对路径）
        String realPath = servletContext1.getRealPath("/upload");
        System.out.println("realPath = " + realPath);

        //2.4 作为域对象共享数据
        //ServletContext作用域对象是什么范围？整个web项目
        servletContext1.setAttribute("servletContextkey","servletContextValue");

        Object servletContextkey = servletContext1.getAttribute("servletContextkey");
        System.out.println("servletContextkey = " + servletContextkey);

        servletContext1.removeAttribute("servletContextkey");

    }
}
```

## 3.7 HttpServletRequest

```java
package com.atguigu.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.Arrays;
import java.util.Enumeration;
import java.util.Map;
import java.util.Set;

@WebServlet("/requestDemo")
public class RequestDemo extends HttpServlet {
    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //1. 获取请求行信息相关
        StringBuffer requestURL = request.getRequestURL();//从网络环境中找一个资源
        System.out.println("requestURL = " + requestURL);

        String requestURI = request.getRequestURI();//从当前项目下找一个资源
        System.out.println("requestURI = " + requestURI);

        int serverPort = request.getServerPort();
        System.out.println("serverPort = " + serverPort);

        String protocol = request.getProtocol();
        System.out.println("protocol = " + protocol);

        String method = request.getMethod();
        System.out.println("method = " + method);

        //2. 获取请求头数据
        String referer = request.getHeader("Referer");
        System.out.println("referer = " + referer);

        String header = request.getHeader("User-Agent");
        System.out.println("header = " + header);

        Enumeration<String> headerNames = request.getHeaderNames();
        while (headerNames.hasMoreElements()){
            System.out.println(headerNames.nextElement());
        }

        //3. 获取请求参数   1v1   1vn
        String username = request.getParameter("username");
        System.out.println("username = " + username);

        String[] hobbies = request.getParameterValues("hobby");
        System.out.println(Arrays.toString(hobbies));

        Enumeration<String> parameterNames = request.getParameterNames();
        while (parameterNames.hasMoreElements()){
            System.out.println(parameterNames.nextElement());
        }

        Map<String, String[]> parameterMap = request.getParameterMap();
        Set<Map.Entry<String, String[]>> entries = parameterMap.entrySet();
        for (Map.Entry<String, String[]> entry : entries) {
            System.out.println(entry.getKey()+"="+Arrays.toString(entry.getValue()));
        }




    }
}
```

## 3.8 HttpServletResponse

```java
package com.atguigu.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/responseDemo")
public class ResponseDemo extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse response) throws ServletException, IOException {
        //1. 设置响应状态码
        response.setStatus(260);

        //2. 设置响应头信息
        response.setHeader("Content-Type","text/html");
        response.setContentType("text/html");

        //3. 设置响应体
        PrintWriter writer = response.getWriter();//谁请求我，我就写给谁
        writer.write("hello1");
        writer.write("<h1>hello2</h1>");
        writer.write("hello3");
    }
}
```

















