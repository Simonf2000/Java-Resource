# 三、Spring MVC控制层框架

## 目录

-   [一、SpringMVC简介和体验](#一SpringMVC简介和体验)
    -   [1. 介绍](#1-介绍)
    -   [2. 主要作用](#2-主要作用)
    -   [3. 核心组件和调用流程理解](#3-核心组件和调用流程理解)
    -   [4. 快速体验](#4-快速体验)
-   [二、SpringMVC接收数据](#二SpringMVC接收数据)
    -   [1. 访问路径设置](#1-访问路径设置)
    -   [2. 接收参数（重点）](#2-接收参数重点)
        -   [2.1 param 和 json参数比较](#21-param-和-json参数比较)
        -   [2.2 param参数接收](#22-param参数接收)
        -   [2.3 路径 参数接收](#23-路径-参数接收)
        -   [2.4 json参数接收](#24-json参数接收)
    -   [3. 接收Cookie数据](#3-接收Cookie数据)
    -   [4. 接收请求头数据](#4-接收请求头数据)
    -   [5. 原生Api对象操作](#5-原生Api对象操作)
    -   [6. 共享域对象操作](#6-共享域对象操作)
        -   [6.1 属性（共享）域作用回顾](#61-属性共享域作用回顾)
        -   [6.2 Request级别属性（共享）域](#62-Request级别属性共享域)
        -   [6.3 Session级别属性（共享）域](#63-Session级别属性共享域)
        -   [6.4 Application级别属性（共享）域](#64-Application级别属性共享域)
-   [三、SpringMVC响应数据](#三SpringMVC响应数据)
    -   [1. handler方法分析](#1-handler方法分析)
    -   [2. 页面跳转控制](#2-页面跳转控制)
        -   [2.1 快速返回jsp视图](#21-快速返回jsp视图)
        -   [2.2 转发和重定向](#22-转发和重定向)
    -   [3. 返回JSON数据（重点）](#3-返回JSON数据重点)
        -   [3.1 前置准备](#31-前置准备)
        -   [3.2 @ResponseBody](#32-ResponseBody)
        -   [3.3 @RestController](#33-RestController)
    -   [4. 返回静态资源处理](#4-返回静态资源处理)
-   [四、RESTFul风格设计](#四RESTFul风格设计)
    -   [1. RESTFul风格概述](#1-RESTFul风格概述)
        -   [1.1 RESTFul风格简介](#11-RESTFul风格简介)
        -   [1.2 RESTFul风格特点](#12-RESTFul风格特点)
        -   [1.3 RESTFul风格设计规范](#13-RESTFul风格设计规范)
        -   [1.4 RESTFul风格好处](#14-RESTFul风格好处)
    -   [2. RESTFul风格实战](#2-RESTFul风格实战)
        -   [2.1 需求分析](#21-需求分析)
        -   [2.2 RESTFul风格接口设计](#22-RESTFul风格接口设计)
        -   [2.3 后台接口实现](#23-后台接口实现)
-   [五、基于RESTFul风格增删改查练习](#五基于RESTFul风格增删改查练习)
    -   [1. 案例功能和接口分析](#1-案例功能和接口分析)
        -   [1.1 功能预览](#11-功能预览)
        -   [1.2 接口分析](#12-接口分析)
    -   [2. 工程项目准备](#2-工程项目准备)
        -   [2.1 前端项目搭建](#21-前端项目搭建)
        -   [2.2 后端项目搭建](#22-后端项目搭建)
    -   [3. 增删改查实现](#3-增删改查实现)
        -   [4.1 项目根路径设计](#41-项目根路径设计)
        -   [4.2 SpringMVC解决跨域问题](#42-SpringMVC解决跨域问题)
        -   [4.3 业务实现](#43-业务实现)
-   [六、SpringMVC其他扩展](#六SpringMVC其他扩展)
    -   [1. 异常处理机制](#1-异常处理机制)
        -   [1.1 异常处理概念](#11-异常处理概念)
        -   [1.2 声明式异常好处](#12-声明式异常好处)
        -   [1.3 基于注解异常声明异常处理](#13-基于注解异常声明异常处理)
    -   [2. 拦截器使用](#2-拦截器使用)
        -   [2.1 拦截器概念](#21-拦截器概念)
        -   [2.2 拦截器使用](#22-拦截器使用)
        -   [2.3 拦截器作用位置图解](#23-拦截器作用位置图解)
        -   [2.4 拦截器案例](#24-拦截器案例)
    -   [3. 参数校验](#3-参数校验)
    -   [4.文件上传和下载 ](#4文件上传和下载-)
        -   [4.1 文件上传](#41-文件上传)
        -   [4.2 文件下载](#42-文件下载)
-   [七、SpringMVC底层原理](#七SpringMVC底层原理)
    -   [1. 启动配置流程](#1-启动配置流程)
        -   [1.1 Servlet 生命周期回顾](#11-Servlet-生命周期回顾)
        -   [1.2 初始化操作调用路线图](#12-初始化操作调用路线图)
        -   [1.3 SpringMVC IoC 容器创建](#13-SpringMVC-IoC-容器创建)
        -   [1.4 将 SpringMVC IoC容器对象存入应用域](#14-将-SpringMVC-IoC容器对象存入应用域)
        -   [1.5 请求映射初始化](#15-请求映射初始化)
        -   [1.6 小结](#16-小结)
    -   [2. 请求处理流程原理](#2-请求处理流程原理)
        -   [2.1 总体阶段](#21-总体阶段)
        -   [2.2 调用前阶段](#22-调用前阶段)
        -   [2.3调用后阶段](#23调用后阶段)
        -   [2.4 所有断点总结](#24-所有断点总结)
    -   [3. ContextLoaderListener](#3-ContextLoaderListener)
        -   [3.1 配置分离相关问题](#31-配置分离相关问题)
        -   [3.2 配置ContextLoaderListener](#32-配置ContextLoaderListener)
        -   [3.3 探讨两个IoC容器之间关系](#33-探讨两个IoC容器之间关系)
        -   [3.4 两个IoC容器之间Bean访问](#34-两个IoC容器之间Bean访问)
        -   [3.5 有可能重复对象](#35-有可能重复对象)
        -   [3.5 小结](#35-小结)

## 一、SpringMVC简介和体验

### 1. 介绍

<https://docs.spring.io/spring-framework/reference/web/webmvc.html>

Spring Web MVC是基于Servlet API构建的原始Web框架，从一开始就包含在Spring Framework中。正式名称“Spring Web MVC”来自其源模块的名称（ `spring-webmvc` ），但它通常被称为“Spring MVC”。

在控制层框架历经Strust、WebWork、Strust2等诸多产品的历代更迭之后，目前业界普遍选择了SpringMVC作为Java EE项目表述层开发的**首选方案**。之所以能做到这一点，是因为SpringMVC具备如下显著优势：

-   **Spring 家族原生产品**，与IOC容器等基础设施无缝对接
-   表述层各细分领域需要解决的问题**全方位覆盖**，提供**全面解决方案**
-   **代码清新简洁**，大幅度提升开发效率
-   内部组件化程度高，可插拔式组件**即插即用**，想要什么功能配置相应组件即可
-   **性能卓著**，尤其适合现代大型、超大型互联网项目要求

原生Servlet API开发代码片段

```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) 
                                                        throws ServletException, IOException {  
    String userName = request.getParameter("userName");
    
    System.out.println("userName="+userName);
}
```

基于SpringMVC开发代码片段

```java
@RequestMapping("/user/login")
public String login(@RequestParam("userName") String userName,Sting password){
    
    log.debug("userName="+userName);
    //调用业务即可
    
    return "result";
}
```

### 2. 主要作用

![](image/image_s06VlXFk72.png)

SSM框架构建起单体项目的技术栈需求！其中的SpringMVC负责表述层（控制层）实现简化！

SpringMVC的作用主要覆盖的是表述层，例如：

-   请求映射
-   数据输入
-   视图界面
-   请求分发
-   表单回显
-   会话控制
-   过滤拦截
-   异步交互
-   文件上传
-   文件下载
-   数据校验
-   类型转换
-   等等等

**最终总结：**

1.  简化前端参数接收( 形参列表 )
2.  简化后端数据响应( 返回值 )
3.  以及其他......

### 3. 核心组件和调用流程理解

Spring MVC与许多其他Web框架一样，是围绕前端控制器模式设计的，其中中央 `Servlet`  `DispatcherServlet` 做整体请求处理调度！

除了`DispatcherServlet`SpringMVC还会提供其他特殊的组件协作完成请求处理和响应呈现。

**SpringMVC处理请求流程：**

![](image/image_IOG0UTDH--.png)

**SpringMVC涉及组件理解：**

1.  DispatcherServlet :  SpringMVC提供，我们需要使用web.xml配置使其生效，它是整个流程处理的核心，所有请求都经过它的处理和分发！
2.  HandlerMapping :  SpringMVC提供，我们需要进行IoC配置使其加入IoC容器方可生效，它内部缓存handler(controller方法)和handler访问路径数据，被DispatcherServlet调用，用于查找路径对应的handler！
3.  HandlerAdapter : SpringMVC提供，我们需要进行IoC配置使其加入IoC容器方可生效，它可以处理请求参数和处理响应数据数据，每次DispatcherServlet都是通过handlerAdapter间接调用handler，他是handler和DispatcherServlet之间的适配器！
4.  Handler : handler又称处理器，他是Controller类内部的方法简称，是由我们自己定义，用来接收参数，向后调用业务，最终返回响应结果！
5.  ViewResovler : SpringMVC提供，我们需要进行IoC配置使其加入IoC容器方可生效！视图解析器主要作用简化模版视图页面查找的，但是需要注意，前后端分离项目，后端只返回JSON数据，不返回页面，那就不需要视图解析器！所以，视图解析器，相对其他的组件不是必须的！

### 4. 快速体验

1.  体验场景需求

    ![](image/image_r6DxapBw-8.png)
2.  配置分析
    1.  DispatcherServlet，在web.xml配置！设置处理所有请求！
    2.  HandlerMapping,HandlerAdapter,Handler需要加入到IoC容器，供DS调用！
    3.  Handler自己声明（Controller）需要配置到HandlerMapping中供DS查找！
3.  准备项目
    1.  创建项目

        springmvc-base-quick

        注意：需要转成maven/web程序！！
    2.  导入依赖
        ```xml
        <properties>
            <spring.version>6.0.6</spring.version>
            <maven.compiler.source>17</maven.compiler.source>
            <maven.compiler.target>17</maven.compiler.target>
            <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        </properties>
        
        <dependencies>
            <!-- springioc相关依赖  -->
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-context</artifactId>
                <version>${spring.version}</version>
            </dependency>
        
            <!-- web相关依赖  -->
            <!-- 在 pom.xml 中引入 Jakarta EE Web API 的依赖 -->
            <!--
                在 Spring Web MVC 6 中，Servlet API 迁移到了 Jakarta EE API，因此在配置 DispatcherServlet 时需要使用
                 Jakarta EE 提供的相应类库和命名空间。错误信息 “‘org.springframework.web.servlet.DispatcherServlet’
                 is not assignable to ‘javax.servlet.Servlet,jakarta.servlet.Servlet’” 表明你使用了旧版本的
                 Servlet API，没有更新到 Jakarta EE 规范。
            -->
            <dependency>
                <groupId>jakarta.platform</groupId>
                <artifactId>jakarta.jakartaee-web-api</artifactId>
                <version>9.1.0</version>
                <scope>provided</scope>
            </dependency>
        
            <!-- springwebmvc相关依赖  -->
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-webmvc</artifactId>
                <version>${spring.version}</version>
            </dependency>
        
        </dependencies>
        ```
4.  Controller声明
    ```java
    @Controller
    public class HelloController {
    
        //handlers
    
        /**
         * handler就是controller内部的具体方法
         * @RequestMapping("/springmvc/hello") 就是用来向handlerMapping中注册的方法注解!
         * @ResponseBody 代表向浏览器直接返回数据!
         */
        @RequestMapping("/springmvc/hello")
        @ResponseBody
        public String hello(){
            System.out.println("HelloController.hello");
            return "hello springmvc!!";
        }
    }
    
    ```
5.  SpringIoC配置
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <beans xmlns="http://www.springframework.org/schema/beans"
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xmlns:context="http://www.springframework.org/schema/context"
           xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">
          <!-- 扫描controller对应的包,将handler加入到ioc-->
        <context:component-scan base-package="com.atguigu.controller" />
    
        <!-- 方案1: 手动配置handlerMapping 和 handlerAdapter -->
        <!-- handlerMapping
             RequestMappingHandlerMapping 就是springmvc提供的组件
             支持@RequestMapping方式注册的handler
        -->
        <bean class="org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping" />
        <!-- handlerAdapter
             RequestMappingHandlerAdapter 就是springmvc提供的组件
             支持@RequestMapping方式注册的handler
        -->
        <bean class="org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter" />
        <!-- 方案2: 不配置
             解释: springmvc会在启动的时候,如果发现我们没有配置handlerMapping,handlerAdapter,viewResolver
             就会加载spring-webmvc包下的配置DispatcherServlet.properties下的组件!
             DispatcherServlet.properties:
               org.springframework.web.servlet.HandlerMapping=org.springframework.web.servlet.handler.BeanNameUrlHandlerMapping,\
                    org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping,\
                    org.springframework.web.servlet.function.support.RouterFunctionMapping
    
                org.springframework.web.servlet.HandlerAdapter=org.springframework.web.servlet.mvc.HttpRequestHandlerAdapter,\
                    org.springframework.web.servlet.mvc.SimpleControllerHandlerAdapter,\
                    org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter,\
                    org.springframework.web.servlet.function.support.HandlerFunctionAdapter
                ........
    
             所以,我们可以不同写,也会默认加载! 注意: 一旦你配置了,就不会加载对应的默认组件切记!!!
        -->
    
         <!-- viewResolver 不需要配置,因为我们不需要查找逻辑视图!!! -->
    
    </beans>  
    ```

6.  web.xml配置
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
      version="4.0">
        <!-- 配置SpringMVC中负责处理请求的核心Servlet，也被称为SpringMVC的前端控制器 -->
      <servlet>
        <servlet-name>DispatcherServlet</servlet-name>
        <!-- DispatcherServlet的全类名 -->
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <!-- 通过初始化参数指定SpringMVC配置文件位置 -->
        <init-param>
          <!-- 如果不记得contextConfigLocation配置项的名称，可以到DispatcherServlet的父类FrameworkServlet中查找 -->
          <param-name>contextConfigLocation</param-name>
          <!-- 使用classpath:说明这个路径从类路径的根目录开始才查找 -->
          <param-value>classpath:spring-mvc.xml</param-value>
        </init-param>
        <!-- 作为框架的核心组件，在启动过程中有大量的初始化操作要做，这些操作放在第一次请求时才执行非常不恰当 -->
        <!-- 我们应该将DispatcherServlet设置为随Web应用一起启动 -->
        <load-on-startup>100</load-on-startup>
    
      </servlet>
    
      <servlet-mapping>
        <servlet-name>DispatcherServlet</servlet-name>
        <!-- 对DispatcherServlet来说，url-pattern有两种方式配置 -->
        <!-- 配置“/”，表示匹配整个Web应用范围内所有请求。这里有一个硬性规定：不能写成“/*”。
          只有这一个地方有这个特殊要求，以后我们再配置Filter还是可以正常写“/*”。 -->
        <url-pattern>/</url-pattern>
      </servlet-mapping>
    
    </web-app>
    ```

7.  启动测试

    注意： tomcat应该是10+版本！方可支持 Jakarta EE API!

    ![](image/image_RmY8VOdQnq.png)

## 二、SpringMVC接收数据

### 1. 访问路径设置

@RequestMapping注解的作用就是将请求的 URL 地址和处理请求的方式（handler方法）关联起来，建立映射关系。

SpringMVC 接收到指定的请求，就会来找到在映射关系中对应的方法来处理这个请求。

1.  **精准路径匹配**

    在@RequestMapping注解指定 URL 地址时，不使用任何通配符，按照请求地址进行精确匹配。
    ```java
    @Controller
    public class UserController {
    
        /**
         * 精准设置访问地址 /user/login
         */
        @RequestMapping(value = {"/user/login"})
        @ResponseBody
        public String login(){
            System.out.println("UserController.login");
            return "login success!!";
        }
    
        /**
         * 精准设置访问地址 /user/register
         */
        @RequestMapping(value = {"/user/register"})
        @ResponseBody
        public String register(){
            System.out.println("UserController.register");
            return "register success!!";
        }
        
    }
    
    ```
2.  **模糊路径匹配**

    在@RequestMapping注解指定 URL 地址时，通过使用通配符，匹配多个类似的地址。
    ```java
    @Controller
    public class ProductController {
    
        /**
         *  路径设置为 /product/*  
         *    /* 为单层任意字符串  /product/a  /product/aaa 可以访问此handler  
         *    /product/a/a 不可以
         *  路径设置为 /product/** 
         *   /** 为任意层任意字符串  /product/a  /product/aaa 可以访问此handler  
         *   /product/a/a 也可以访问
         */
        @RequestMapping("/product/*")
        @ResponseBody
        public String show(){
            System.out.println("ProductController.show");
            return "product show!";
        }
    }
    
    ```
    ```text
    单层匹配和多层匹配：
      /*：只能匹配URL地址中的一层，如果想准确匹配两层，那么就写“/*/*”以此类推。
      /**：可以匹配URL地址中的多层。
    其中所谓的一层或多层是指一个URL地址字符串被“/”划分出来的各个层次
    这个知识点虽然对于@RequestMapping注解来说实用性不大，但是将来配置拦截器的时候也遵循这个规则。
    ```
3.  **类和方法级别区别**

    `@RequestMapping` 注解可以用于类级别和方法级别，它们之间的区别如下：
    1.  设置到类级别：`@RequestMapping` 注解可以设置在控制器类上，用于映射整个控制器的通用请求路径。这样，如果控制器中的多个方法都需要映射同一请求路径，就不需要在每个方法上都添加映射路径。
    2.  设置到方法级别：`@RequestMapping` 注解也可以单独设置在控制器方法上，用于更细粒度地映射请求路径和处理方法。当多个方法处理同一个路径的不同操作时，可以使用方法级别的 `@RequestMapping` 注解进行更精细的映射。
    ```java
    //1.标记到handler方法
    @RequestMapping("/user/login")
    @RequestMapping("/user/register")
    @RequestMapping("/user/logout")
    
    //2.优化标记类+handler方法
    //类上
    @RequestMapping("/user")
    //handler方法上
    @RequestMapping("/login")
    @RequestMapping("/register")
    @RequestMapping("/logout")
    
    ```
4.  **附带请求方式限制**

    HTTP 协议定义了八种请求方式，在 SpringMVC 中封装到了下面这个枚举类：
    ```java
    public enum RequestMethod {
      GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS, TRACE
    }
    ```
    默认情况下：@RequestMapping("/logout") 任何请求方式都可以访问！

    如果需要特定指定：
    ```java
    @Controller
    public class UserController {
    
        /**
         * 精准设置访问地址 /user/login
         * method = RequestMethod.POST 可以指定单个或者多个请求方式!
         * 注意:违背请求方式会出现405异常!
         */
        @RequestMapping(value = {"/user/login"} , method = RequestMethod.POST)
        @ResponseBody
        public String login(){
            System.out.println("UserController.login");
            return "login success!!";
        }
    
        /**
         * 精准设置访问地址 /user/register
         */
        @RequestMapping(value = {"/user/register"},method = {RequestMethod.POST,RequestMethod.GET})
        @ResponseBody
        public String register(){
            System.out.println("UserController.register");
            return "register success!!";
        }
    
    }
    ```
    注意：违背请求方式，会出现405异常！！！
5.  **进阶注解**

    还有 `@RequestMapping` 的 HTTP 方法特定快捷方式变体：
    -   `@GetMapping`
    -   `@PostMapping`
    -   `@PutMapping`
    -   `@DeleteMapping`
    -   `@PatchMapping`
    ```java
    @RequestMapping(value="/login",method=RequestMethod.GET)
    ||
    @GetMapping(value="/login")
    ```
    注意：进阶注解只能添加到handler方法上，无法添加到类上！
6.  **常见配置问题**

    出现原因：多个 handler 方法映射了同一个地址，导致 SpringMVC 在接收到这个地址的请求时该找哪个 handler 方法处理。
    
    There is already 'demo03MappingMethodHandler' bean method com.atguigu.mvc.handler.Demo03MappingMethodHandler#empGet() **mapped**.

### 2. 接收参数（重点）

#### 2.1 param 和 json参数比较

在 HTTP 请求中，我们可以选择不同的参数类型，如 param 类型和 JSON 类型。下面对这两种参数类型进行区别和对比：

1.  参数编码： &#x20;

    param 类型的参数会被编码为 ASCII 码。例如，假设 `name=john doe`，则会被编码为 `name=john%20doe`。而 JSON 类型的参数会被编码为 UTF-8。
2.  参数顺序： &#x20;

    param 类型的参数没有顺序限制。但是，JSON 类型的参数是有序的。JSON 采用键值对的形式进行传递，其中键值对是有序排列的。
3.  数据类型： &#x20;

    param 类型的参数仅支持字符串类型、数值类型和布尔类型等简单数据类型。而 JSON 类型的参数则支持更复杂的数据类型，如数组、对象等。
4.  嵌套性： &#x20;

    param 类型的参数不支持嵌套。但是，JSON 类型的参数支持嵌套，可以传递更为复杂的数据结构。
5.  可读性： &#x20;

    param 类型的参数格式比 JSON 类型的参数更加简单、易读。但是，JSON 格式在传递嵌套数据结构时更加清晰易懂。

总的来说，param 类型的参数适用于单一的数据传递，而 JSON 类型的参数则更适用于更复杂的数据结构传递。根据具体的业务需求，需要选择合适的参数类型。在实际开发中，常见的做法是：在 GET 请求中采用 param 类型的参数，而在 POST 请求中采用 JSON 类型的参数传递。

#### 2.2 param参数接收

1.  **直接接值**

    客户端请求

    ![](image/image_plXEAfszjM.png)

    handler接收参数

    只要形参数名和类型与传递参数相同，即可自动接收!
    ```java
    @Controller
    @RequestMapping("param")
    public class ParamController {
    
        /**
         * 前端请求: http://localhost:8080/param/value?name=xx&age=18
         *
         * 可以利用形参列表,直接接收前端传递的param参数!
         *    要求: 参数名 = 形参名
         *          类型相同
         * 出现乱码正常，json接收具体解决！！
         * @return 返回前端数据
         */
        @GetMapping(value="/value")
        @ResponseBody
        public String setupForm(String name,int age){
            System.out.println("name = " + name + ", age = " + age);
            return name + age;
        }
    }
    ```
2.  **@RequestParam注解**

    可以使用 `@RequestParam` 注释将 Servlet 请求参数（即查询参数或表单数据）绑定到控制器中的方法参数。

    `@RequestParam`使用场景：
    -   指定绑定的请求参数名
    -   要求请求参数必须传递
    -   为请求参数提供默认值
        基本用法：
    ```java
     /**
     * 前端请求: http://localhost:8080/param/data?name=xx&stuAge=18
     * 
     *  使用@RequestParam注解标记handler方法的形参
     *  指定形参对应的请求参数@RequestParam(请求参数名称)
     */
    @GetMapping(value="/data")
    @ResponseBody
    public Object paramForm(@RequestParam("name") String name, 
                            @RequestParam("stuAge") int age){
        System.out.println("name = " + name + ", age = " + age);
        return name+age;
    }
    ```
    默认情况下，使用此批注的方法参数是必需的，但您可以通过将 `@RequestParam` 批注的 `required` 标志设置为 `false`！

    如果没有没有设置非必须，也没有传递参数会出现：

    ![](image/image_ckLWLe8fG6.png)

    将参数设置非必须，并且设置默认值：
    ```java
    @GetMapping(value="/data")
    @ResponseBody
    public Object paramForm(@RequestParam("name") String name, 
                            @RequestParam(value = "stuAge",required = false,defaultValue = "18") int age){
        System.out.println("name = " + name + ", age = " + age);
        return name+age;
    }
    
    ```
3.  **特殊场景接值**
    1.  一名多值

        多选框，提交的数据的时候一个key对应多个值，我们可以使用集合进行接收！
        ```java
          /**
           * 前端请求: http://localhost:8080/param/mul?hbs=吃&hbs=喝
           *
           *  一名多值,可以使用集合接收即可!但是需要使用@RequestParam注解指定
           */
          @GetMapping(value="/mul")
          @ResponseBody
          public Object mulForm(@RequestParam List<String> hbs){
              System.out.println("hbs = " + hbs);
              return hbs;
          }
        ```
    2.  实体接收

        Spring MVC 是 Spring 框架提供的 Web 框架，它允许开发者使用实体对象来接收 HTTP 请求中的参数。通过这种方式，可以在方法内部直接使用对象的属性来访问请求参数，而不需要每个参数都写一遍。下面是一个使用实体对象接收参数的示例：

        定义一个用于接收参数的实体类：
        ```java
        public class User {
        
          private String name;
        
          private int age = 18;
        
          // getter 和 setter 略
        }
        ```
        在控制器中，使用实体对象接收，示例代码如下：
        ```java
        @Controller
        @RequestMapping("param")
        public class ParamController {
        
            @RequestMapping(value = "/user", method = RequestMethod.POST)
            @ResponseBody
            public String addUser(User user) {
                // 在这里可以使用 user 对象的属性来接收请求参数
                System.out.println("user = " + user);
                return "success";
            }
        }
        ```
        在上述代码中，将请求参数name和age映射到实体类属性上！要求属性名必须等于参数名！否则无法映射！

        使用postman传递参数测试：

        ![](image/image_LvGYFzl7Ij.png)

#### 2.3 路径 参数接收

路径传递参数是一种在 URL 路径中传递参数的方式。在 RESTful 的 Web 应用程序中，经常使用路径传递参数来表示资源的唯一标识符或更复杂的表示方式。而 Spring MVC 框架提供了 `@PathVariable` 注解来处理路径传递参数。

`@PathVariable` 注解允许将 URL 中的占位符映射到控制器方法中的参数。

例如，如果我们想将 `/user/{id}` 路径下的 `{id}` 映射到控制器方法的一个参数中，则可以使用 `@PathVariable` 注解来实现。

下面是一个使用 `@PathVariable` 注解处理路径传递参数的示例：

```java
 /**
 * 动态路径设计: /user/{动态部分}/{动态部分}   动态部分使用{}包含即可! {}内部动态标识!
 * 形参列表取值: @PathVariable Long id  如果形参名 = {动态标识} 自动赋值!
 *              @PathVariable("动态标识") Long id  如果形参名 != {动态标识} 可以通过指定动态标识赋值!
 *
 * 访问测试:  /param/user/1/root  -> id = 1  uname = root
 */
@GetMapping("/user/{id}/{name}")
@ResponseBody
public String getUser(@PathVariable Long id, 
                      @PathVariable("name") String uname) {
    System.out.println("id = " + id + ", uname = " + uname);
    return "user_detail";
}
```

#### 2.4 json参数接收

前端传递 JSON 数据时，Spring MVC 框架可以使用 `@RequestBody` 注解来将 JSON 数据转换为 Java 对象。`@RequestBody` 注解表示当前方法参数的值应该从请求体中获取，并且需要指定 value 属性来指示请求体应该映射到哪个参数上。其使用方式和示例代码如下：

1.  前端发送 JSON 数据的示例：（使用postman测试）
    ```json
    {
      "name": "张三",
      "age": 18,
      "gender": "男"
    }
    ```
    
2.  定义一个用于接收 JSON 数据的 Java 类，例如：
    ```java
    public class Person {
      private String name;
      private int age;
      private String gender;
      // getter 和 setter 略
    }
    ```
    
3.  在控制器中，使用 `@RequestBody` 注解来接收 JSON 数据，并将其转换为 Java 对象，例如：
    ```java
    @PostMapping("/person")
    @ResponseBody
    public String addPerson(@RequestBody Person person) {
    
      // 在这里可以使用 person 对象来操作 JSON 数据中包含的属性
      return "success";
    }
    ```
    在上述代码中，`@RequestBody` 注解将请求体中的 JSON 数据映射到 `Person` 类型的 `person` 参数上，并将其作为一个对象来传递给 `addPerson()` 方法进行处理。
    
4.  完善配置

    测试：

    ![](image/image_XLO-MAnues.png)

    问题：

    org.springframework.web.HttpMediaTypeNotSupportedException: Content-Type 'application/json;charset=UTF-8' is not supported]

    ![](image/image_T1gLO4uFgn.png)

    原因：
    -   不支持json数据类型处理
    -   没有json类型处理的工具（jackson）
        解决：
        spring-mvc.xml 配置json转化器
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <beans xmlns="http://www.springframework.org/schema/beans"
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xmlns:context="http://www.springframework.org/schema/context"
           xmlns:mvc="http://www.springframework.org/schema/mvc"
           xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd http://www.springframework.org/schema/mvc https://www.springframework.org/schema/mvc/spring-mvc.xsd">
            <!-- 扫描controller对应的包,将handler加入到ioc-->
        <context:component-scan base-package="com.atguigu.controller" />
        
        <!-- 
           注意: 导入mvc命名空间!
           mvc:annotation-driven 是一个整合标签
                                 他会导入handlerMapping和handlerAdapter
                                 他会导入json数据格式转化器等等!
        -->
        <mvc:annotation-driven />
    
         <!-- viewResolver 不需要配置,因为我们不需要查找逻辑视图!!! -->
    
    </beans>
    ```
    
    pom.xml 加入jackson依赖
    ```xml
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-databind</artifactId>
        <version>2.15.0</version>
    </dependency>
    ```
    
5. mvc:annotation说明

   \<mvc:annotation是一个整合配置标签，一个标签将springmvc必备组件都加入到ioc容器中！其中包含handlerMapping和handlerAdapter以及json转化器等等！

   让我们来查看下\<mvc:annotation具体的动作！
   -   先查看\<mvc:annotation标签最终对应解析的Java类

       ![](image/image_eU-869Kx3r.png)
   -   查看解析类中具体的动作即可

       打开源码：org.springframework.web.servlet.config.MvcNamespaceHandler

       ![](image/image_zxx3CTng-X.png)

       打开源码：org.springframework.web.servlet.config.AnnotationDrivenBeanDefinitionParser
       ```java
       class AnnotationDrivenBeanDefinitionParser implements BeanDefinitionParser {
       
         public static final String HANDLER_MAPPING_BEAN_NAME = RequestMappingHandlerMapping.class.getName();
       
         public static final String HANDLER_ADAPTER_BEAN_NAME = RequestMappingHandlerAdapter.class.getName();
       
         static {
           ClassLoader classLoader = AnnotationDrivenBeanDefinitionParser.class.getClassLoader();
           javaxValidationPresent = ClassUtils.isPresent("jakarta.validation.Validator", classLoader);
           romePresent = ClassUtils.isPresent("com.rometools.rome.feed.WireFeed", classLoader);
           jaxb2Present = ClassUtils.isPresent("jakarta.xml.bind.Binder", classLoader);
           jackson2Present = ClassUtils.isPresent("com.fasterxml.jackson.databind.ObjectMapper", classLoader) &&
                   ClassUtils.isPresent("com.fasterxml.jackson.core.JsonGenerator", classLoader);
           jackson2XmlPresent = ClassUtils.isPresent("com.fasterxml.jackson.dataformat.xml.XmlMapper", classLoader);
           jackson2SmilePresent = ClassUtils.isPresent("com.fasterxml.jackson.dataformat.smile.SmileFactory", classLoader);
           jackson2CborPresent = ClassUtils.isPresent("com.fasterxml.jackson.dataformat.cbor.CBORFactory", classLoader);
           gsonPresent = ClassUtils.isPresent("com.google.gson.Gson", classLoader);
         }
           @Override
           @Nullable
           public BeanDefinition parse(Element element, ParserContext context) {
               //handlerMapping加入到ioc容器
               readerContext.getRegistry().registerBeanDefinition(HANDLER_MAPPING_BEAN_NAME, handlerMappingDef);
       
               //添加jackson转化器
               addRequestBodyAdvice(handlerAdapterDef);
               addResponseBodyAdvice(handlerAdapterDef);
       
               //handlerAdapter加入到ioc容器
               readerContext.getRegistry().registerBeanDefinition(HANDLER_ADAPTER_BEAN_NAME, handlerAdapterDef);
               return null;
           }
       
           //具体添加jackson转化对象方法
           protected void addRequestBodyAdvice(RootBeanDefinition beanDef) {
               if (jackson2Present) {
                   beanDef.getPropertyValues().add("requestBodyAdvice",
                                                   new RootBeanDefinition(JsonViewRequestBodyAdvice.class));
               }
           }
       
           protected void addResponseBodyAdvice(RootBeanDefinition beanDef) {
               if (jackson2Present) {
                   beanDef.getPropertyValues().add("responseBodyAdvice",
                                                   new RootBeanDefinition(JsonViewResponseBodyAdvice.class));
               }
           }
       ```

### 3. 接收Cookie数据

可以使用 `@CookieValue` 注释将 HTTP Cookie 的值绑定到控制器中的方法参数。

考虑使用以下 cookie 的请求：

```java
JSESSIONID=415A4AC178C59DACE0B2C9CA727CDD84
```

下面的示例演示如何获取 cookie 值：

```java
@GetMapping("/demo")
public void handle(@CookieValue("JSESSIONID") String cookie) { 
  //...
}
```

### 4. 接收请求头数据

可以使用 `@RequestHeader` 批注将请求标头绑定到控制器中的方法参数。

请考虑以下带有标头的请求：

```java
Host                    localhost:8080
Accept                  text/html,application/xhtml+xml,application/xml;q=0.9
Accept-Language         fr,en-gb;q=0.7,en;q=0.3
Accept-Encoding         gzip,deflate
Accept-Charset          ISO-8859-1,utf-8;q=0.7,*;q=0.7
Keep-Alive              300
```

下面的示例获取 `Accept-Encoding` 和 `Keep-Alive` 标头的值：

```java
@GetMapping("/demo")
public void handle(
    @RequestHeader("Accept-Encoding") String encoding, 
    @RequestHeader("Keep-Alive") long keepAlive) { 
  //...
}
```

### 5. 原生Api对象操作

<https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/arguments.html>

下表描述了支持的控制器方法参数

| Controller method argument 控制器方法参数                                                 | Description                                                    |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| `jakarta.servlet.ServletRequest`, `jakarta.servlet.ServletResponse`                | 请求/响应对象                                                        |
| `jakarta.servlet.http.HttpSession`                                                 | 强制存在会话。因此，这样的参数永远不会为 `null` 。                                  |
| `java.io.InputStream`, `java.io.Reader`                                            | 用于访问由 Servlet API 公开的原始请求正文。                                   |
| `java.io.OutputStream`, `java.io.Writer`                                           | 用于访问由 Servlet API 公开的原始响应正文。                                   |
| `@PathVariable`                                                                    | 接收路径参数注解                                                       |
| `@RequestParam`                                                                    | 用于访问 Servlet 请求参数，包括多部分文件。参数值将转换为声明的方法参数类型。                    |
| `@RequestHeader`                                                                   | 用于访问请求标头。标头值将转换为声明的方法参数类型。                                     |
| `@CookieValue`                                                                     | 用于访问Cookie。Cookie 值将转换为声明的方法参数类型。                              |
| `@RequestBody`                                                                     | 用于访问 HTTP 请求正文。正文内容通过使用 `HttpMessageConverter` 实现转换为声明的方法参数类型。 |
| `java.util.Map`, `org.springframework.ui.Model`, `org.springframework.ui.ModelMap` | 共享域对象，并在视图呈现过程中向模板公开。                                          |
| `Errors`, `BindingResult`                                                          | 验证和数据绑定中的错误信息获取对象！                                             |

获取原生对象示例：

```java
/**
 * 如果想要获取请求或者响应对象,或者会话等,可以直接在形参列表传入,并且不分先后顺序!
 * 注意: 接收原生对象,并不影响参数接收!
 */
@GetMapping("api")
@ResponseBody
public String api(HttpSession session , HttpServletRequest request,
                  HttpServletResponse response){
    String method = request.getMethod();
    System.out.println("method = " + method);
    return "api";
}
```

### 6. 共享域对象操作

#### 6.1 属性（共享）域作用回顾

在 JavaWeb 中，共享域指的是在 Servlet 中存储数据，以便在同一 Web 应用程序的多个组件中进行共享和访问。常见的共享域有四种：`ServletContext`、`HttpSession`、`HttpServletRequest`、`PageContext`。

1.  `ServletContext` 共享域：`ServletContext` 对象可以在整个 Web 应用程序中共享数据，是最大的共享域。一般可以用于保存整个 Web 应用程序的全局配置信息，以及所有用户都共享的数据。在 `ServletContext` 中保存的数据是线程安全的。
2.  `HttpSession` 共享域：`HttpSession` 对象可以在同一用户发出的多个请求之间共享数据，但只能在同一个会话中使用。比如，可以将用户登录状态保存在 `HttpSession` 中，让用户在多个页面间保持登录状态。
3.  `HttpServletRequest` 共享域：`HttpServletRequest` 对象可以在同一个请求的多个处理器方法之间共享数据。比如，可以将请求的参数和属性存储在 `HttpServletRequest` 中，让处理器方法之间可以访问这些数据。
4.  `PageContext` 共享域：`PageContext` 对象是在 JSP 页面Servlet 创建时自动创建的。它可以在 JSP 的各个作用域中共享数据，包括`pageScope`、`requestScope`、`sessionScope`、`applicationScope` 等作用域。

共享域的作用是提供了方便实用的方式在同一 Web 应用程序的多个组件之间传递数据，并且可以将数据保存在不同的共享域中，根据需要进行选择和使用。

![](image/img010_ORhRMPYJ9v.png)

#### 6.2 Request级别属性（共享）域

1.  使用 Model 类型的形参
    ```java
    @RequestMapping("/attr/request/model")
    @ResponseBody
    public String testAttrRequestModel(
        
            // 在形参位置声明Model类型变量，用于存储模型数据
            Model model) {
        
        // 我们将数据存入模型，SpringMVC 会帮我们把模型数据存入请求域
        // 存入请求域这个动作也被称为暴露到请求域
        model.addAttribute("requestScopeMessageModel","i am very happy[model]");
        
        return "target";
    }
    ```
2.  使用 ModelMap 类型的形参
    ```java
    @RequestMapping("/attr/request/model/map")
    @ResponseBody
    public String testAttrRequestModelMap(
        
            // 在形参位置声明ModelMap类型变量，用于存储模型数据
            ModelMap modelMap) {
        
        // 我们将数据存入模型，SpringMVC 会帮我们把模型数据存入请求域
        // 存入请求域这个动作也被称为暴露到请求域
        modelMap.addAttribute("requestScopeMessageModelMap","i am very happy[model map]");
        
        return "target";
    }
    ```
3.  使用 Map 类型的形参
    ```java
    @RequestMapping("/attr/request/map")
    @ResponseBody
    public String testAttrRequestMap(
        
            // 在形参位置声明Map类型变量，用于存储模型数据
            Map<String, Object> map) {
        
        // 我们将数据存入模型，SpringMVC 会帮我们把模型数据存入请求域
        // 存入请求域这个动作也被称为暴露到请求域
        map.put("requestScopeMessageMap", "i am very happy[map]");
        
        return "target";
    }
    ```
4.  使用原生 request 对象
    ```java
    @RequestMapping("/attr/request/original")
    @ResponseBody
    public String testAttrOriginalRequest(
        
            // 拿到原生对象，就可以调用原生方法执行各种操作
            HttpServletRequest request) {
        
        request.setAttribute("requestScopeMessageOriginal", "i am very happy[original]");
        
        return "target";
    }
    ```
5.  使用 ModelAndView 对象
    ```java
    @RequestMapping("/attr/request/mav")
    public ModelAndView testAttrByModelAndView() {
        
        // 1.创建ModelAndView对象
        ModelAndView modelAndView = new ModelAndView();
        // 2.存入模型数据
        modelAndView.addObject("requestScopeMessageMAV", "i am very happy[mav]");
        // 3.设置视图名称
        modelAndView.setViewName("target");
        
        return modelAndView;
    }
    ```

#### 6.3 Session级别属性（共享）域

```java
@RequestMapping("/attr/session")
@ResponseBody
public String testAttrSession(HttpSession session) {
    //直接对session对象操作,即对会话范围操作!
    return "target";
}
```

#### 6.4 Application级别属性（共享）域

解释：springmvc会在初始化容器的时候，讲servletContext对象存储到ioc容器中！

```java
@Autowired
private ServletContext servletContext;

@RequestMapping("/attr/application")
@ResponseBody
public String attrApplication() {
    
    servletContext.setAttribute("appScopeMsg", "i am hungry...");
    
    return "target";
}
```

## 三、SpringMVC响应数据

### 1. handler方法分析

理解handler方法的作用和组成：

```java
/**
 * TODO: 一个controller的方法是控制层的一个处理器,我们称为handler
 * TODO: handler需要使用@RequestMapping/@GetMapping系列,声明路径,在HandlerMapping中注册,供DS查找!
 * TODO: handler作用总结:
 *       1.接收请求参数(param,json,pathVariable,共享域等) 
 *       2.调用业务逻辑 
 *       3.响应前端数据(页面（不讲解模版页面跳转）,json,转发和重定向等)
 * TODO: handler如何处理呢
 *       1.接收参数: handler(形参列表: 主要的作用就是用来接收参数)
 *       2.调用业务: { 方法体  可以向后调用业务方法 service.xx() }
 *       3.响应数据: return 返回结果,可以快速响应前端数据
 */
@GetMapping
public Object handler(简化请求参数接收){
    调用业务方法
    return 简化响应前端数据;
}
```

总结： 请求数据接收，我们都是通过handler的形参列表

&#x20;            前端数据响应，我们都是通过handler的return关键字快速处理！

&#x20;springmvc简化了参数接收和响应！

### 2. 页面跳转控制

#### 2.1 快速返回jsp视图

1.  开发模式回顾

    在 Web 开发中，有两种主要的开发模式：前后端分离和混合开发。

    前后端分离模式：

    指将前端的界面和后端的业务逻辑通过接口分离开发的一种方式。开发人员使用不同的技术栈和框架，前端开发人员主要负责页面的呈现和用户交互，后端开发人员主要负责业务逻辑和数据存储。前后端通信通过 API 接口完成，数据格式一般使用 JSON 或 XML。前后端分离模式可以提高开发效率，同时也有助于代码重用和维护。

    混合开发模式：

    指将前端和后端的代码集成在同一个项目中，共享相同的技术栈和框架。这种模式在小型项目中比较常见，可以减少学习成本和部署难度。但是，在大型项目中，这种模式会导致代码耦合性很高，维护和升级难度较大。

    对于混合开发，我们就需要使用动态页面技术，动态展示Java的共享域数据！！
2.  jsp技术了解

    JSP（JavaServer Pages）是一种动态网页开发技术，它是由 Sun 公司提出的一种基于 Java 技术的 Web 页面制作技术，可以在 HTML 文件中嵌入 Java 代码，使得生成动态内容的编写更加简单。

    JSP 最主要的作用是生成动态页面。它允许将 Java 代码嵌入到 HTML 页面中，以便使用 Java 进行数据库查询、处理表单数据和生成 HTML 等动态内容。另外，JSP 还可以与 Servlet 结合使用，实现更加复杂的 Web 应用程序开发。

    JSP 的主要特点包括：
    1.  简单：JSP 通过将 Java 代码嵌入到 HTML 页面中，使得生成动态内容的编写更加简单。
    2.  高效：JSP 首次运行时会被转换为 Servlet，然后编译为字节码，从而可以启用 Just-in-Time（JIT）编译器，实现更高效的运行。
    3.  多样化：JSP 支持多种标准标签库，包括 JSTL（JavaServer Pages 标准标签库）、EL（表达式语言）等，可以帮助开发人员更加方便的处理常见的 Web 开发需求。
        总之，JSP 是一种简单高效、多样化的动态网页开发技术，它可以方便地生成动态页面和与 Servlet 结合使用，是 Java Web 开发中常用的技术之一。
3.  准备jsp页面和依赖

    pom.xml依赖
    ```xml
    <!-- jsp需要依赖! jstl-->
    <dependency>
        <groupId>jakarta.servlet.jsp.jstl</groupId>
        <artifactId>jakarta.servlet.jsp.jstl-api</artifactId>
        <version>3.0.0</version>
    </dependency>
    ```
    jsp页面创建

    建议位置：/WEB-INF/下，避免外部直接访问！

    位置：/WEB-INF/views/home.jsp
    ```java
    <%@ page contentType="text/html;charset=UTF-8" language="java" %>
    <html>
      <head>
        <title>Title</title>
      </head>
      <body>
            <!-- 可以获取共享域的数据,动态展示! jsp== 后台vue -->
            ${msg}
      </body>
    </html>
    
    ```
4.  快速响应模版页面
    1.  配置jsp视图解析器

        springmvc.xml
        ```xml
        <!-- 配置动态页面语言jsp的视图解析器,快速查找jsp-->
        <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
            <property name="viewClass" value="org.springframework.web.servlet.view.JstlView"/>
            <property name="prefix" value="/WEB-INF/views/"/>
            <property name="suffix" value=".jsp"/>
        </bean>
        ```
    2.  handler返回视图
        ```java
        /**
         *  跳转到提交文件页面  /save/jump
         *  
         *  如果要返回jsp页面!
         *     1.方法返回值改成字符串类型
         *     2.返回逻辑视图名即可    
         *         <property name="prefix" value="/WEB-INF/views/"/>
         *            + 逻辑视图名 +
         *         <property name="suffix" value=".jsp"/>
         */
        @GetMapping("jump")
        public String jumpJsp(Model model){
            System.out.println("FileController.jumpJsp");
            model.addAttribute("msg","request data!!");
            return "home";
        }
        ```

#### 2.2 转发和重定向

在 Spring MVC 中，Handler 方法返回值来实现快速转发，可以使用 `redirect` 或者 `forward` 关键字来实现重定向。

```java
@RequestMapping("/redirect-demo")
public String redirectDemo() {
    // 重定向到 /demo 路径 
    return "redirect:/demo";
}

@RequestMapping("/forward-demo")
public String forwardDemo() {
    // 转发到 /demo 路径
    return "forward:/demo";
}

//注意： 转发和重定向到项目下资源路径都是相同，都不需要添加项目根路径！填写项目下路径即可！
```

总结：

-   将方法的返回值，设置String类型
-   转发使用forward关键字，重定向使用redirect关键字
-   关键字: /路径
-   注意：如果是项目下的资源，转发和重定向都一样都是项目下路径！都不需要添加项目根路径！

### 3. 返回JSON数据（重点）

#### 3.1 前置准备

导入jackson依赖

```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.15.0</version>
</dependency>
```

添加json数据转化器

```xml
 <!-- 
   注意: 导入mvc命名空间!
   mvc:annotation-driven 是一个整合标签
                         他会导入handlerMapping和handlerAdapter
                         他会导入json数据格式转化器等等!
-->
<mvc:annotation-driven />
```

#### 3.2 @ResponseBody

1.  方法上使用@ResponseBody

    可以在方法上使用 `@ResponseBody`注解，用于将方法返回的对象序列化为 JSON 或 XML 格式的数据，并发送给客户端。在前后端分离的项目中使用！

    测试方法：
    ```java
    @GetMapping("/accounts/{id}")
    @ResponseBody
    public Object handle() {
      // ...
      return obj;
    }
    ```
    具体来说，`@ResponseBody` 注解可以用来标识方法或者方法返回值，表示方法的返回值是要直接返回给客户端的数据，而不是由视图解析器来解析并渲染生成响应体（viewResolver没用）。

    测试方法：
    ```java
     @RequestMapping(value = "/user/detail", method = RequestMethod.POST)
    @ResponseBody
    public User getUser(@RequestBody User userParam) {
        System.out.println("userParam = " + userParam);
        User user = new User();
        user.setAge(18);
        user.setName("John");
        //返回的对象,会使用jackson的序列化工具,转成json返回给前端!
        return user;
    }
    ```
    返回结果：

    ![](image/image_hPJueYv109.png)
2.  类上使用@ResponseBody

    如果类中每个方法上都标记了 @ResponseBody 注解，那么这些注解就可以提取到类上。
    ```java
    @ResponseBody  //responseBody可以添加到类上,代表默认类中的所有方法都生效!
    @Controller
    @RequestMapping("param")
    public class ParamController {
    ```

#### 3.3 @RestController

类上的 @ResponseBody 注解可以和 @Controller 注解合并为 @RestController 注解。所以使用了 @RestController 注解就相当于给类中的每个方法都加了 @ResponseBody 注解。

RestController源码:

```java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Controller
@ResponseBody
public @interface RestController {
 
  /**
   * The value may indicate a suggestion for a logical component name,
   * to be turned into a Spring bean in case of an autodetected component.
   * @return the suggested component name, if any (or empty String otherwise)
   * @since 4.0.1
   */
  @AliasFor(annotation = Controller.class)
  String value() default "";
 
}
```

### 4. 返回静态资源处理

1.  **静态资源概念**

    资源本身已经是可以直接拿到浏览器上使用的程度了，**不需要在服务器端做任何运算、处理**。典型的静态资源包括：
    -   纯HTML文件
    -   图片
    -   CSS文件
    -   JavaScript文件
    -   ……
2.  **静态资源访问和问题解决**
    -   web应用加入静态资源

        ![](image/image_4C0oYuW6p5.png)
        
-   手动构建确保编译
    
    ![](image/image_rlTcHF-Uge.png)
    
    ![](image/image_nJdal6tcLm.png)
    
        ![](image/image_wsWSmj8Yfr.png)
    
    -   访问静态资源
    
        ![](image/image_j2NW4C8FO9.png)
        
    -   问题分析
        -   DispatcherServlet 的 url-pattern 配置的是“/”
        -   url-pattern 配置“/”表示整个 Web 应用范围内所有请求都由 SpringMVC 来处理
    -   对 SpringMVC 来说，必须有对应的 @RequestMapping 才能找到处理请求的方法
        -   现在 images/mi.jpg 请求没有对应的 @RequestMapping 所以返回 404
        
    -   问题解决
    
        在 SpringMVC 配置文件中增加配置：
        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <beans xmlns="http://www.springframework.org/schema/beans"
               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
               xmlns:context="http://www.springframework.org/schema/context"
               xmlns:mvc="http://www.springframework.org/schema/mvc"
               xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd http://www.springframework.org/schema/mvc https://www.springframework.org/schema/mvc/spring-mvc.xsd">
            <!-- 扫描controller对应的包,将handler加入到ioc-->
            <context:component-scan base-package="com.atguigu.controller" />
            <!-- 加入这个配置，SpringMVC 就会在遇到没有 @RequestMapping 的请求时放它过去 -->
            <!-- 所谓放它过去就是让这个请求去找它原本要访问的资源 -->
            <mvc:default-servlet-handler/>
        </beans>
        ```
        
        再次测试访问图片：
        
        ![](image/image_Hi-upkttjY.png)
        
        新的问题：其他原本正常的handler请求访问不了了
        
        handler无法访问
        
        解决方案：
        ```xml
        <!-- 开启 SpringMVC 的注解驱动功能。这个配置也被称为 SpringMVC 的标配。 -->
        <!-- 标配：因为 SpringMVC 环境下非常多的功能都要求必须打开注解驱动才能正常工作。 -->
        <mvc:annotation-driven/>
        ```

## 四、RESTFul风格设计

### 1. RESTFul风格概述

#### 1.1 RESTFul风格简介

![](image/image_e-dNiN_-8D.png)

RESTful（Representational State Transfer）是一种软件架构风格，用于设计网络应用程序和服务之间的通信。它是一种基于标准 HTTP 方法的简单和轻量级的通信协议，广泛应用于现代的Web服务开发。

通过遵循 RESTful 架构的设计原则，可以构建出易于理解、可扩展、松耦合和可重用的 Web 服务。RESTful API 的特点是简单、清晰，并且易于使用和理解，它们使用标准的 HTTP 方法和状态码进行通信，不需要额外的协议和中间件。

RESTful 架构通常用于构建 Web API，提供数据的传输和操作。它可以用于各种应用场景，包括客户端-服务器应用、单页应用（SPA）、移动应用程序和微服务架构等。

总而言之，RESTful 是一种基于 HTTP 和标准化的设计原则的软件架构风格，用于设计和实现可靠、可扩展和易于集成的 Web 服务和应用程序！

![](image/image_xHIbi73wr9.png)

学习RESTful设计原则可以帮助我们更好去设计HTTP协议的API接口！！

#### 1.2 RESTFul风格特点

1.  每一个URI代表1种资源（URI 是名词）；
2.  客户端使用GET、POST、PUT、DELETE 4个表示操作方式的动词对服务端资源进行操作：GET用来获取资源，POST用来新建资源（也可以用于更新资源），PUT用来更新资源，DELETE用来删除资源；
3.  资源的表现形式是XML或者**JSON**；
4.  客户端与服务端之间的交互在请求之间是无状态的，从客户端到服务端的每个请求都必须包含理解请求所必需的信息。

#### 1.3 **RESTFul风格设计规范**

1.  **HTTP协议请求方式要求**

    REST 风格主张在项目设计、开发过程中，具体的操作符合**HTTP协议定义的请求方式的语义**。
    | 操作   | 请求方式   |
    | ---- | ------ |
    | 查询操作 | GET    |
    | 保存操作 | POST   |
    | 删除操作 | DELETE |
    | 更新操作 | PUT    |
2.  **URL路径风格要求**

    REST风格下每个资源都应该有一个唯一的标识符，例如一个 URI（统一资源标识符）或者一个 URL（统一资源定位符）。资源的标识符应该能明确地说明该资源的信息，同时也应该是可被理解和解释的！

    使用URL+请求方式确定具体的动作，他也是一种标准的HTTP协议请求！
    | 操作 | 传统风格                    | REST 风格                            |
    | -- | ----------------------- | ---------------------------------- |
    | 保存 | /CRUD/saveEmp           | URL 地址：/CRUD/emp&#xA;请求方式：POST     |
    | 删除 | /CRUD/removeEmp?empId=2 | URL 地址：/CRUD/emp/2&#xA;请求方式：DELETE |
    | 更新 | /CRUD/updateEmp         | URL 地址：/CRUD/emp&#xA;请求方式：PUT      |
    | 查询 | /CRUD/editEmp?empId=2   | URL 地址：/CRUD/emp/2&#xA;请求方式：GET    |

-   总结

    根据接口的具体动作，选择具体的HTTP协议请求方式

    路径设计从原来携带动标识，改成名词，对应资源的唯一标识即可！

#### 1.4 RESTFul风格好处

1.  含蓄，安全

    使用问号键值对的方式给服务器传递数据太明显，容易被人利用来对系统进行破坏。使用 REST 风格携带数据不再需要明显的暴露数据的名称。
2.  风格统一

    URL 地址整体格式统一，从前到后始终都使用斜杠划分各个单词，用简单一致的格式表达语义。
3.  无状态

    在调用一个接口（访问、操作资源）的时候，可以不用考虑上下文，不用考虑当前状态，极大的降低了系统设计的复杂度。
4.  严谨，规范

    严格按照 HTTP1.1 协议中定义的请求方式本身的语义进行操作。
5.  简洁，优雅

    过去做增删改查操作需要设计4个不同的URL，现在一个就够了。
    | 操作 | 传统风格                    | REST 风格                            |
    | -- | ----------------------- | ---------------------------------- |
    | 保存 | /CRUD/saveEmp           | URL 地址：/CRUD/emp&#xA;请求方式：POST     |
    | 删除 | /CRUD/removeEmp?empId=2 | URL 地址：/CRUD/emp/2&#xA;请求方式：DELETE |
    | 更新 | /CRUD/updateEmp         | URL 地址：/CRUD/emp&#xA;请求方式：PUT      |
    | 查询 | /CRUD/editEmp?empId=2   | URL 地址：/CRUD/emp/2&#xA;请求方式：GET    |
6.  丰富的语义

    通过 URL 地址就可以知道资源之间的关系。它能够把一句话中的很多单词用斜杠连起来，反过来说就是可以在 URL 地址中用一句话来充分表达语义。
    
    [http://localhost:8080/shop](http://localhost:8080/shop "http://localhost:8080/shop") [http://localhost:8080/shop/product](http://localhost:8080/shop/product "http://localhost:8080/shop/product") [http://localhost:8080/shop/product/cellPhone](http://localhost:8080/shop/product/cellPhone "http://localhost:8080/shop/product/cellPhone") [http://localhost:8080/shop/product/cellPhone/iPhone](http://localhost:8080/shop/product/cellPhone/iPhone "http://localhost:8080/shop/product/cellPhone/iPhone")

### 2. RESTFul风格实战

#### 2.1 需求分析

-   数据结构： User {id 唯一标识,name 用户名，age 用户年龄}
-   功能分析
    -   用户数据分页展示功能（条件：page 页数 默认1，size 每页数量 默认 10）
    -   保存用户功能
    -   根据用户id查询用户详情功能
    -   根据用户id更新用户数据功能
    -   根据用户id删除用户数据功能
    -   多条件模糊查询用户功能（条件：keyword 模糊关键字，page 页数 默认1，size 每页数量 默认 10）

#### 2.2 RESTFul风格接口设计

1.  **接口设计**
    | 功能   | 接口和请求方式          | 请求参数                         | 返回值      |
    | ---- | ---------------- | ---------------------------- | -------- |
    | 分页查询 | GET  /user       | page=1\&size=10 param        | { 响应数据 } |
    | 用户添加 | POST /user       | { user 数据 }                  | {响应数据}   |
    | 用户详情 | GET /user/1      | 路径参数                         | {响应数据}   |
    | 用户更新 | PUT /user        | { user 更新数据}                 | {响应数据}   |
    | 用户删除 | DELETE /user/1   | 路径参数                         | {响应数据}   |
    | 条件模糊 | GET /user/search | page=1\&size=10\&keywork=关键字 | {响应数据}   |
2.  **问题讨论**

    为什么查询用户详情，就使用路径传递参数，多条件模糊查询，就使用请求参数传递？

    误区：restful风格下，不是所有请求参数都是路径传递！可以使用其他方式传递！

    在 RESTful API 的设计中，路径和请求参数和请求体都是用来向服务器传递信息的方式。
    -   对于查询用户详情，使用路径传递参数是因为这是一个单一资源的查询，即查询一条用户记录。使用路径参数可以明确指定所请求的资源，便于服务器定位并返回对应的资源，也符合 RESTful 风格的要求。
    -   而对于多条件模糊查询，使用请求参数传递参数是因为这是一个资源集合的查询，即查询多条用户记录。使用请求参数可以通过组合不同参数来限制查询结果，路径参数的组合和排列可能会很多，不如使用请求参数更加灵活和简洁。
        此外，还有一些通用的原则可以遵循：
    -   路径参数应该用于指定资源的唯一标识或者 ID，而请求参数应该用于指定查询条件或者操作参数。
    -   请求参数应该限制在 10 个以内，过多的请求参数可能导致接口难以维护和使用。
    -   对于敏感信息，最好使用 POST 和请求体来传递参数。

#### 2.3 后台接口实现

准备用户实体类：

```java
package com.atguigu.pojo;

/**
 * projectName: com.atguigu.pojo
 * 用户实体类
 */
public class User {

    private Integer id;
    private String name;

    private Integer age;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}

```

准备用户Controller:

```java
/**
 * projectName: com.atguigu.controller
 *
 * description: 用户模块的控制器
 */
@RequestMapping("user")
@RestController
public class UserController {

    /**
     * 模拟分页查询业务接口
     */
    @GetMapping
    public Object queryPage(@RequestParam(name = "page",required = false,defaultValue = "1")int page,
                            @RequestParam(name = "size",required = false,defaultValue = "10")int size){
        System.out.println("page = " + page + ", size = " + size);
        System.out.println("分页查询业务!");
        return "{'status':'ok'}";
    }


    /**
     * 模拟用户保存业务接口
     */
    @PostMapping
    public Object saveUser(@RequestBody User user){
        System.out.println("user = " + user);
        System.out.println("用户保存业务!");
        return "{'status':'ok'}";
    }

    /**
     * 模拟用户详情业务接口
     */
    @PostMapping("/{id}")
    public Object detailUser(@PathVariable Integer id){
        System.out.println("id = " + id);
        System.out.println("用户详情业务!");
        return "{'status':'ok'}";
    }


    /**
     * 模拟用户更新业务接口
     */
    @PutMapping
    public Object updateUser(@RequestBody User user){
        System.out.println("user = " + user);
        System.out.println("用户更新业务!");
        return "{'status':'ok'}";
    }


    /**
     * 模拟条件分页查询业务接口
     */
    @GetMapping("search")
    public Object queryPage(@RequestParam(name = "page",required = false,defaultValue = "1")int page,
                            @RequestParam(name = "size",required = false,defaultValue = "10")int size,
                            @RequestParam(name = "keyword",required= false)String keyword){
        System.out.println("page = " + page + ", size = " + size + ", keyword = " + keyword);
        System.out.println("条件分页查询业务!");
        return "{'status':'ok'}";
    }
}
```

## 五、基于RESTFul风格增删改查练习

### 1. 案例功能和接口分析

#### 1.1 功能预览

![](image/image_CloFbJri5w.png)

#### 1.2 接口分析

1.  学习计划查询
    ```java
    /* 
    需求说明
        查询全部数据页数据
    请求uri
        schedule
    请求方式 
        get   
    响应的json
        {
            "code":200,
            "flag":true,
            "data":[
                {id:1,title:'学习java',completed:true},
                {id:2,title:'学习html',completed:true},
                {id:3,title:'学习css',completed:true},
                {id:4,title:'学习js',completed:true},
                {id:5,title:'学习vue',completed:true}
            ]
        }
    */
    ```
2.  学习计划删除
    ```java
    /* 
    需求说明
        根据id删除日程
    请求uri
        schedule/{id}
    请求方式 
        delete
    响应的json
        {
            "code":200,
            "flag":true,
            "data":null
        }
    */
    ```
3.  学习计划保存
    ```java
    /* 
    需求说明
        增加日程
    请求uri
        schedule
    请求方式 
        post
    请求体中的JSON
        {
            title: '',
            completed: false
        }
    响应的json
        {
            "code":200,
            "flag":true,
            "data":null
        }
    */
    ```
4.  学习计划修改
    ```java
    /* 
    需求说明
        根据id修改数据
    请求uri
        schedule
    请求方式 
        put
    请求体中的JSON
        {
            id: 1,
            title: '',
            completed: false
        }
    响应的json
        {
            "code":200,
            "flag":true,
            "data":null
        }
    */
    ```

### 2. 工程项目准备

#### 2.1 前端项目搭建

1.  导入前端工程
2.  安装npm依赖

    进入前端工程项目文件夹下！
    ```bash
    npm i
    ```
3.  启动前端程序
    ```bash
    npm run dev
    ```

#### 2.2 后端项目搭建

数据库怎么办？使用HashMap模拟，所以不涉及和MyBatis、Spring的整合!

1.  搭建后台项目

    pom.xml
    ```xml
    <properties>
        <spring.version>6.0.6</spring.version>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
    
    <dependencies>
        <!-- springioc相关依赖  -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-context</artifactId>
            <version>${spring.version}</version>
        </dependency>
    
        <!-- web相关依赖  -->
        <!-- 在 pom.xml 中引入 Jakarta EE Web API 的依赖 -->
        <!--
            在 Spring Web MVC 6 中，Servlet API 迁移到了 Jakarta EE API，因此在配置 DispatcherServlet 时需要使用
             Jakarta EE 提供的相应类库和命名空间。错误信息 “‘org.springframework.web.servlet.DispatcherServlet’
             is not assignable to ‘javax.servlet.Servlet,jakarta.servlet.Servlet’” 表明你使用了旧版本的
             Servlet API，没有更新到 Jakarta EE 规范。
        -->
        <dependency>
            <groupId>jakarta.platform</groupId>
            <artifactId>jakarta.jakartaee-web-api</artifactId>
            <version>9.1.0</version>
            <scope>provided</scope>
        </dependency>
    
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>2.15.0</version>
        </dependency>
        <!-- springwebmvc相关依赖  -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webmvc</artifactId>
            <version>${spring.version}</version>
        </dependency>
    
    </dependencies>
    ```

2.  准备实体类

    包：com.atguigu.pojo
    ```java
    /**
     * projectName: com.atguigu.pojo
     *
     * description: 任务实体类
     */
    public class Schedule {
    
        private Integer id;
        private String title;
    
        private Boolean completed;
    
        public Schedule() {
        }
    
        public Schedule(Integer id, String title, Boolean completed) {
            this.id = id;
            this.title = title;
            this.completed = completed;
        }
    
        public Integer getId() {
            return id;
        }
    
        public void setId(Integer id) {
            this.id = id;
        }
    
        public String getTitle() {
            return title;
        }
    
        public void setTitle(String title) {
            this.title = title;
        }
    
        public Boolean getCompleted() {
            return completed;
        }
    
        public void setCompleted(Boolean completed) {
            this.completed = completed;
        }
    
        @Override
        public String toString() {
            return "Schedule{" +
                    "id=" + id +
                    ", title='" + title + '\'' +
                    ", completed=" + completed +
                    '}';
        }
    }
    ```
3.  准备R结果包装类

    包：com.atguigu.utils
    ```java
    /**
     * projectName: com.atguigu.utils
     *
     * description: 返回结果类
     */
    public class R {

        private int code = 200; //200成功状态码

        private boolean flag = true; //返回状态

        private Object data;  //返回具体数据
        
         public  static R ok(Object data){
            R r = new R();
            r.data = data;
            return r;
        }
    
        public static R  fail(Object data){
            R r = new R();
            r.code = 500; //错误码
            r.flag = false; //错误状态
            r.data = data;
            return r;
        }
         public int getCode() {
            return code;
        }
    
        public void setCode(int code) {
            this.code = code;
        }
    
        public boolean isFlag() {
            return flag;
        }
    
        public void setFlag(boolean flag) {
            this.flag = flag;
        }
    
        public Object getData() {
            return data;
        }
    
        public void setData(Object data) {
            this.data = data;
        }
    }
    ```

4.  准备业务类

    包：com.atguigu.service
    1.  业务接口
        ```java
        /**
         * projectName: com.atguigu.service
         *
         * description: schedule业务接口
         */
        
        public interface ScheduleService {
        
            /**
             * 返回全部学习计划
             * @return
             */
            List<Schedule> getAll();
        
            /**
             * 保存学习计划
             * @param schedule
             */
            void saveSchedule(Schedule schedule);
        
            /**
             * 更新学习计划
             * @param schedule
             */
            void updateSchedule(Schedule schedule);
        
            /**
             * 移除学习计划
             * @param
             */
            void removeById(Integer id);
        
        }
        ```
    2.  业务实现
        ```java
        /**
         * projectName: com.atguigu.service.impl
         *
         * description:
         */
        @Service
        public class ScheduleServiceImpl  implements ScheduleService {
            //准备假数据
                private static Map<Integer,Schedule> scheduleMap;
        
                private static  int maxId = 5;
        
                static {
        
                    scheduleMap = new HashMap<>();
        
                    Schedule schedule = null;
        
                    schedule = new Schedule(1, "学习Java", false);
                    scheduleMap.put(1, schedule);
        
                    schedule = new Schedule(2, "学习H5", true);
                    scheduleMap.put(2, schedule);
        
                    schedule = new Schedule(3, "学习Css", false);
                    scheduleMap.put(3, schedule);
                    schedule = new Schedule(4, "学习JavaScript", false);
                    scheduleMap.put(4, schedule);
        
                    schedule = new Schedule(5, "学习Spring", true);
                    scheduleMap.put(5, schedule);
        
                }    
            /**
                 * 返回全部学习计划
                 *
                 * @return
                 */
                @Override
                public List<Schedule> getAll() {
                    return new ArrayList<>(scheduleMap.values());
                }
        
                /**
                 * 保存学习计划
                 *
                 * @param schedule
                 */
                @Override
                public void saveSchedule(Schedule schedule) {
                    maxId++;
                    schedule.setId(maxId);
                    scheduleMap.put(maxId,schedule);
                }
        
                /**
                 * 更新学习计划
                 *
                 * @param schedule
                 */
                @Override
                public void updateSchedule(Schedule schedule) {
                    scheduleMap.put(schedule.getId(),schedule);
                }
        
                /**
                 * 移除学习计划
                 *
                 * @param id
                 */
                @Override
                public void removeById(Integer id) {
                    scheduleMap.remove(id);
                }
            }
        ```

5.  准备spring-mvc.配置文件

    位置：resources/spring-mvc.xml
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <beans xmlns="http://www.springframework.org/schema/beans"
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xmlns:context="http://www.springframework.org/schema/context"
           xmlns:mvc="http://www.springframework.org/schema/mvc"
           xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd http://www.springframework.org/schema/mvc https://www.springframework.org/schema/mvc/spring-mvc.xsd">
         <!-- 扫描controller对应的包,将handler加入到ioc-->
        <context:component-scan base-package="com.atguigu.controller,com.atguigu.service" />
    
        <!--
           注意: 导入mvc命名空间!
           mvc:annotation-driven 是一个整合标签
                                 他会导入handlerMapping和handlerAdapter
                                 他会导入json数据格式转化器等等!
        -->
        <mvc:annotation-driven />
         <!-- viewResolver 不需要配置,因为我们不需要查找逻辑视图!!! -->
    
        <!-- 加入这个配置，SpringMVC 就会在遇到没有 @RequestMapping 的请求时放它过去 -->
        <!-- 所谓放它过去就是让这个请求去找它原本要访问的资源 -->
        <mvc:default-servlet-handler/>
    </beans>
    ```

6.  准备 web.xml配置文件
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
      version="4.0">
         <!-- 配置SpringMVC中负责处理请求的核心Servlet，也被称为SpringMVC的前端控制器 -->
      <servlet>
        <servlet-name>DispatcherServlet</servlet-name>
        <!-- DispatcherServlet的全类名 -->
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <!-- 通过初始化参数指定SpringMVC配置文件位置 -->
        <init-param>
          <!-- 如果不记得contextConfigLocation配置项的名称，可以到DispatcherServlet的父类FrameworkServlet中查找 -->
          <param-name>contextConfigLocation</param-name>
          <!-- 使用classpath:说明这个路径从类路径的根目录开始才查找 -->
          <param-value>classpath:spring-mvc.xml</param-value>
        </init-param>
        <!-- 作为框架的核心组件，在启动过程中有大量的初始化操作要做，这些操作放在第一次请求时才执行非常不恰当 -->
        <!-- 我们应该将DispatcherServlet设置为随Web应用一起启动 -->
        <load-on-startup>1</load-on-startup>
    
      </servlet>
    
      <servlet-mapping>
        <servlet-name>DispatcherServlet</servlet-name>
        <!-- 对DispatcherServlet来说，url-pattern有两种方式配置 -->
        <!-- 方式一：配置“/”，表示匹配整个Web应用范围内所有请求。这里有一个硬性规定：不能写成“/*”。
          只有这一个地方有这个特殊要求，以后我们再配置Filter还是可以正常写“/*”。 -->
        <!-- 方式二：配置“*.扩展名”，表示匹配整个Web应用范围内部分请求 -->
        <url-pattern>/</url-pattern>
      </servlet-mapping>
    
    </web-app>
    ```

### 3. 增删改查实现

#### 4.1 项目根路径设计

因为前端项目设置了后台访问的项目根路径为 /rest&#x20;

我们后台项目也对应的设置：

![](image/image_fwsj8IhXZJ.png)

#### 4.2 SpringMVC解决跨域问题

假设我们有一个网站 `http://example.com`，现在需要跨域请求另外一个网站 `http://api.example.com` 中的数据。浏览器就会因为安全问题，拒绝客户端访问请求！

跨域问题是指在浏览器中发起跨域请求被浏览器拦截的问题。在同一个源域（同一协议、主机、端口），浏览器允许 JavaScript 发起跨域请求；在不同的源域下，浏览器对发起的异域请求会做出不同的限制。

常见的跨域问题的场景有：

-   访问不同的子域名；
-   访问不同的端口号；
-   访问不同的协议（http、https）；
-   访问不同的域名；

基于CORS方式，解决跨域思路：

CORS（Cross-Origin Resource Sharing）是 W3C 制定的一种跨域解决方案，它给出了跨域请求和响应的标准。服务器端代码需要在响应头中设置 Access-Control-Allow-Origin，并指定访问来源域名名或 \* 通配符，表示允许的跨域请求。浏览器可以根据响应头信息，判断是否允许该请求。

SpringMVC基于CORS思路解决跨域方案：

-   @CrossOrigin注解

    `@CrossOrigin` 注释在带注释的【控制器方法】 / 【控制器类】上启用跨源请求
    ```java
    @RestController
    @RequestMapping("/account")
    public class AccountController {
    
      @CrossOrigin
      @GetMapping("/{id}")
      public Account retrieve(@PathVariable Long id) {
        // ...
      }
    
      @DeleteMapping("/{id}")
      public void remove(@PathVariable Long id) {
        // ...
      }
    }
    
    ```
    默认情况下， `@CrossOrigin` 允许：
    -   All origins.
    -   All headers.
    -   All HTTP methods to which the controller method is mapped. &#x20;
        注解核心设置属性讲解：
    ```java
    @Target({ElementType.TYPE, ElementType.METHOD})
    @Retention(RetentionPolicy.RUNTIME)
    @Documented
    public @interface CrossOrigin {
    
      /**
       * 设置哪些客户端地址可以跨域访问! 格式为: 协议://主机地址:端口号
       * @return
       */
      @AliasFor("origins")
      String[] value() default {};
      @AliasFor("value")
      String[] origins() default {};
    
      /**
       * 设置哪些客户端的[自定义请求头]可以跨域访问!
       */
      String[] allowedHeaders() default {};
    
      /**
       * 设置哪些服务端的自定义响应头,可以被客户端读取!
       */
      String[] exposedHeaders() default {};
    
      /**
       *设置哪些请求方法,可以跨域方式! 
       */
      RequestMethod[] methods() default {};
    
      /**
       * 值为 true 或者 false
       * 客户端是否可以携带cookie!
       */
      String allowCredentials() default "";
    }
    ```
-   xml全局跨域配置
    ```xml
    <mvc:cors>
      <mvc:mapping path="/**"
        allowed-origins="*"
        allowed-methods="GET, PUT"
        allowed-headers="header1, header2, header3"
        exposed-headers="header1, header2" 
        allow-credentials="true"
        />
    
      <mvc:mapping path="/**"
        allowed-origins="https://domain1.com" />
    
    </mvc:cors>
    ```

#### 4.3 业务实现

1.  查询业务
    ```java
    /**
     * projectName: com.atguigu.controller
     *
     * description: 学习计划controller
     */
    @CrossOrigin
    /*
        @CrossOrigin 注释在带注释的控制器方法上启用跨源请求
        
        默认情况下， 
        @CrossOrigin 允许：
                All origins  任何请求主机地址
                All headers  任何请求头
                All HTTP methods to which the controller method is mapped.  任何请求方式!
       
        可以设置:
             @CrossOrigin(origins = "https://domain2.com") 指定允许跨域请求的主机地址
     */
    @RequestMapping("schedule")
    @RestController
    public class ScheduleController
    {
    
        @Autowired
        private ScheduleService scheduleService;
    
        @GetMapping
        public R showList(){
            List<Schedule> list = scheduleService.getAll();
            return  R.ok(list);
        }
    }    
    ```
2.  修改业务
    ```java
    @PutMapping
    public R changeSchedule(@RequestBody Schedule schedule){
        scheduleService.updateSchedule(schedule);
        return R.ok(null);
    }
    ```
3.  删除业务
    ```java
    @DeleteMapping("/{id}")
    public R removeSchedule(@PathVariable Integer id){
        scheduleService.removeById(id);
        return R.ok(null);
    }
    ```
4.  保存业务
    ```java
    @PostMapping
    public R saveSchedule(@RequestBody Schedule schedule){
        scheduleService.saveSchedule(schedule);
        return R.ok(null);
    }
    ```

## 六、SpringMVC其他扩展

### 1. 异常处理机制

#### 1.1 异常处理概念

开发过程中是不可避免地会出现各种异常情况的，例如网络连接异常、数据格式异常、空指针异常等等。异常的出现可能导致程序的运行出现问题，甚至直接导致程序崩溃。因此，在开发过程中，合理处理异常、避免异常产生、以及对异常进行有效的调试是非常重要的。

对于异常的处理，一般分为两种方式：

-   编程式异常处理：是指在代码中显式地编写处理异常的逻辑。它通常涉及到对异常类型的检测及其处理，例如使用 try-catch 块来捕获异常，然后在 catch 块中编写特定的处理代码，或者在 finally 块中执行一些清理操作。在编程式异常处理中，开发人员需要显式地进行异常处理，异常处理代码混杂在业务代码中，导致代码可读性较差。
-   声明式异常处理：则是将异常处理的逻辑从具体的业务逻辑中分离出来，通过配置等方式进行统一的管理和处理。在声明式异常处理中，开发人员只需要为方法或类标注相应的注解（如 `@Throws` 或 `@ExceptionHandler`），就可以处理特定类型的异常。相较于编程式异常处理，声明式异常处理可以使代码更加简洁、易于维护和扩展。

站在宏观角度来看待声明式事务处理：

整个项目从架构这个层面设计的异常处理的统一机制和规范。

一个项目中会包含很多个模块，各个模块需要分工完成。如果张三负责的模块按照 A 方案处理异常，李四负责的模块按照 B 方案处理异常……各个模块处理异常的思路、代码、命名细节都不一样，那么就会让整个项目非常混乱。

使用声明式异常处理，可以统一项目处理异常思路，项目更加清晰明了！

#### 1.2 声明式异常好处

![](image/image_vIgpMpZh_2.png)

-   使用声明式代替编程式来实现异常管理
    -   让异常控制和核心业务解耦，二者各自维护，结构性更好
-   整个项目层面使用同一套规则来管理异常
    -   整个项目代码风格更加统一、简洁
    -   便于团队成员之间的彼此协作

#### 1.3 基于注解异常声明异常处理

1.  声明异常处理控制器类

    异常处理控制类，统一定义异常处理handler方法！
    ```java
    /**
     * projectName: com.atguigu.execptionhandler
     * 
     * description: 全局异常处理器,内部可以定义异常处理Handler!
     */
    
    /**
     * @RestControllerAdvice = @ControllerAdvice + @ResponseBody
     * @ControllerAdvice 代表当前类的异常处理controller! 
     */
    @RestControllerAdvice
    public class GlobalExceptionHandler {
    
      
    }
    ```
2.  声明异常处理hander方法

    异常处理handler方法和普通的handler方法参数接收和响应都一致！

    只不过异常处理handler方法要映射异常，发生对应的异常会调用！

    普通的handler方法要使用@RequestMapping注解映射路径，发生对应的路径调用！
    ```java
    /**
     * 异常处理handler 
     * @ExceptionHandler(HttpMessageNotReadableException.class) 
     * 该注解标记异常处理Handler,并且指定发生异常调用该方法!
     * 
     * 
     * @param e 获取异常对象!
     * @return 返回handler处理结果!
     */
    @ExceptionHandler(HttpMessageNotReadableException.class)
    public Object handlerJsonDateException(HttpMessageNotReadableException e){
        
        return null;
    }
    
    /**
     * 当发生空指针异常会触发此方法!
     * @param e
     * @return
     */
    @ExceptionHandler(NullPointerException.class)
    public Object handlerNullException(NullPointerException e){
    
        return null;
    }
    
    /**
     * 所有异常都会触发此方法!但是如果有具体的异常处理Handler! 
     * 具体异常处理Handler优先级更高!
     * 例如: 发生NullPointerException异常!
     *       会触发handlerNullException方法,不会触发handlerException方法!
     * @param e
     * @return
     */
    @ExceptionHandler(Exception.class)
    public Object handlerException(Exception e){
    
        return null;
    }
    ```
3.  配置文件扫描控制器类配置

    确保异常处理控制类被扫描
    ```xml
     <!-- 扫描controller对应的包,将handler加入到ioc-->
     <context:component-scan base-package="com.atguigu.controller,
        com.atguigu.exceptionhandler" />
    ```

### 2. 拦截器使用

#### 2.1 拦截器概念

拦截器和过滤器解决问题

-   生活中

    为了提高乘车效率，在乘客进入站台前统一检票

    ![](image/img008_Cu_s178zpF.png)
-   程序中

    在程序中，使用拦截器在请求到达具体 handler 方法前，统一执行检测

    ![](image/img009_ZoPtaL048I.png)

拦截器 VS 过滤器：

-   相似点
    -   拦截：必须先把请求拦住，才能执行后续操作
    -   过滤：拦截器或过滤器存在的意义就是对请求进行统一处理
    -   放行：对请求执行了必要操作后，放请求过去，让它访问原本想要访问的资源
-   不同点
    -   工作平台不同
        -   过滤器工作在 Servlet 容器中
        -   拦截器工作在 SpringMVC 的基础上
    -   拦截的范围
        -   过滤器：能够拦截到的最大范围是整个 Web 应用
        -   拦截器：能够拦截到的最大范围是整个 SpringMVC 负责的请求
    -   IOC 容器支持
        -   过滤器：想得到 IOC 容器需要调用专门的工具方法，是间接的
        -   拦截器：它自己就在 IOC 容器中，所以可以直接从 IOC 容器中装配组件，也就是可以直接得到 IOC 容器的支持

选择：

功能需要如果用 SpringMVC 的拦截器能够实现，就不使用过滤器。

![](image/image_h_FVVk92VB.png)

#### 2.2 拦截器使用

1.  创建拦截器类
    ```java
    public class Process01Interceptor implements HandlerInterceptor {
    
        // 在处理请求的目标 handler 方法前执行
        @Override
        public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
            System.out.println("request = " + request + ", response = " + response + ", handler = " + handler);
            System.out.println("Process01Interceptor.preHandle");
             
            // 返回true：放行
            // 返回false：不放行
            return true;
        }
     
        // 在目标 handler 方法之后，handler报错不执行!
        @Override
        public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
            System.out.println("request = " + request + ", response = " + response + ", handler = " + handler + ", modelAndView = " + modelAndView);
            System.out.println("Process01Interceptor.postHandle");
        }
     
        // 渲染视图之后执行(最后),一定执行!
        @Override
        public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
            System.out.println("request = " + request + ", response = " + response + ", handler = " + handler + ", ex = " + ex);
            System.out.println("Process01Interceptor.afterCompletion");
        }
    }
    ```
    单个拦截器执行顺序:
    -   preHandle() 方法
    -   目标 handler 方法
    -   postHandle() 方法
    -   渲染视图(返回json没有此步骤)
    -   afterCompletion() 方法
2.  拦截器配置

    springmvc.xml
    ```xml
    <!-- 配置拦截器-->
    <mvc:interceptors>
      <!-- 默认拦截器,拦截所有请求-->
      <bean class="com.atguigu.interceptor.Process01Interceptor" />
    </mvc:interceptors>
    
    ```
3.  配置详解
    1.  默认拦截全部
        ```xml
        <!-- 具体配置拦截器可以指定拦截的请求地址 -->
        <mvc:interceptor>
            <!-- 精确匹配 -->
            <mvc:mapping path="/common/request/one"/>
            <bean class="com.atguigu.mvc.interceptor.Process03Interceptor"/>
        </mvc:interceptor>
        ```
    2.  精准配置
        ```xml
        <!-- 具体配置拦截器可以指定拦截的请求地址 -->
        <mvc:interceptor>
            <!-- 精确匹配 -->
            <mvc:mapping path="/common/request/one"/>
            <bean class="com.atguigu.mvc.interceptor.Process03Interceptor"/>
        </mvc:interceptor>
        
        <mvc:interceptor>
            <!-- /*匹配路径中的一层 -->
            <mvc:mapping path="/common/request/*"/>
            <bean class="com.atguigu.mvc.interceptor.Process04Interceptor"/>
        </mvc:interceptor>
        
        <mvc:interceptor>
            <!-- /**匹配路径中的多层 -->
            <mvc:mapping path="/common/request/**"/>
            <bean class="com.atguigu.mvc.interceptor.Process05Interceptor"/>
        </mvc:interceptor>
        
        ```
    3.  排除配置
        ```xml
        <mvc:interceptor>
            <!-- /**匹配路径中的多层 -->
            <mvc:mapping path="/common/request/**"/>
        
            <!-- 使用 mvc:exclude-mapping 标签配置不拦截的地址 -->
            <mvc:exclude-mapping path="/common/request/two/bbb"/>
        
            <bean class="com.atguigu.mvc.interceptor.Process05Interceptor"/>
        </mvc:interceptor>
        ```
4.  多个拦截器执行顺序
    1.  preHandle() 方法：SpringMVC 会把所有拦截器收集到一起，然后按照配置顺序调用各个 preHandle() 方法。
    2.  postHandle() 方法：SpringMVC 会把所有拦截器收集到一起，然后按照配置相反的顺序调用各个 postHandle() 方法。
    3.  afterCompletion() 方法：SpringMVC 会把所有拦截器收集到一起，然后按照配置相反的顺序调用各个 afterCompletion() 方法。

#### 2.3 拦截器作用位置图解

![](image/image_ykneI-kQzc.png)

#### 2.4 拦截器案例

一个网站有 56个资源，其中一个为登陆资源，两个无须登录即可访问，另外三个需要登录后才能访问。如果不登录就访问那三个资源，需要拦截，并且提示登录后访问访问！

提示：登陆为模拟登陆，存储一个user可以到session即可！

访问资源的请求地址可参考：

-   登陆资源：/public/resource/login
-   公共资源1：/public/resource/one
-   公共资源2：/public/resouce/two
-   私密资源1：/private/resouce/one
-   私密资源2：/private/resouce/two
-   私密资源3：/private/resouce/three

案例实现：

1.  声明资源类
    1.  PublicController
        ```java
        /**
         * projectName: com.atguigu.controller
         * description: 公有资源控制类
         */
        @RestController
        @RequestMapping("public/resource")
        public class PublicController {
            /**
             * 模拟登录,将假用户数据存储到session中!
             */
            @GetMapping("login")
            public Object login(HttpSession session){
                session.setAttribute("user","root");
                return "login success!!";
            }
        
            @GetMapping("one")
            public Object one(){
                return "public one";
            }
        
            @GetMapping("two")
            public Object two(){
                return "public two";
            }
        }
        ```
    2.  PrivateController
        ```java
        @RestController
        @RequestMapping("private/resource")
        public class PrivateController {
            
            @GetMapping("one")
            public Object one(){
                return "private one";
            }
            
            @GetMapping("two")
            public Object two(){
                return "private two";
            }
        
            @GetMapping("three")
            public Object three(){
                return "private two";
            }
        
        }
        
        ```
2.  声明拦截器类
    ```java
    /**
     * projectName: com.atguigu.interceptor
     *
     * description: 登录保护拦截器
     */
    public class LoginProtectInterceptor implements HandlerInterceptor {
    
        /**
         * 登录保护方法
         * @param request current HTTP request
         * @param response current HTTP response
         * @param handler chosen handler to execute, for type and/or instance evaluation
         * @return
         * @throws Exception
         */
        @Override
        public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
    
            Object user = request.getSession().getAttribute("user");
    
            if (user == null){
                response.setContentType("text/html;charset=utf-8");
                //没有登录
                response.getWriter().print("请先登录,再访问! <a href='/public/resource/login'>点击此处登录</a>");
                //拦截,不到达目标地址
                return false;
            }
            return true;
        }
    }
    ```
3.  配置拦截器类
    ```xml
    <!-- 配置拦截器-->
    <mvc:interceptors>
       <mvc:interceptor>
           <mvc:mapping path="/private/**"/>
           <bean class="com.atguigu.interceptor.LoginProtectInterceptor" />
       </mvc:interceptor>
    </mvc:interceptors>
    ```

### 3. 参数校验

在 Web 应用三层架构体系中，表述层负责接收浏览器提交的数据，业务逻辑层负责数据的处理。为了能够让业务逻辑层基于正确的数据进行处理，我们需要在表述层对数据进行检查，将错误的数据隔绝在业务逻辑层之外。

1.  **校验概述**

    JSR 303 是 Java 为 Bean 数据合法性校验提供的标准框架，它已经包含在 JavaEE 6.0 标准中。JSR 303 通过在 Bean 属性上标注类似于 @NotNull、@Max 等标准的注解指定校验规则，并通过标准的验证接口对Bean进行验证。
    | 注解                                                                                           | 规则                        |
    | -------------------------------------------------------------------------------------------- | ------------------------- |
    | @Null                                                                                        | 标注值必须为 null               |
    | @NotNull                                                                                     | 标注值不可为 null               |
    | @AssertTrue                                                                                  | 标注值必须为 true               |
    | @AssertFalse                                                                                 | 标注值必须为 false              |
    | @Min(value)                                                                                  | 标注值必须大于或等于 value          |
    | @Max(value)                                                                                  | 标注值必须小于或等于 value          |
    | @DecimalMin(value)                                                                           | 标注值必须大于或等于 value          |
    | @DecimalMax(value)                                                                           | 标注值必须小于或等于 value          |
    | @Size(max,min)                                                                               | 标注值大小必须在 max 和 min 限定的范围内 |
    | @Digits(integer,fratction)                                                                   | 标注值值必须是一个数字，且必须在可接受的范围内   |
    | @Past                                                                                        | 标注值只能用于日期型，且必须是过去的日期      |
    | @Future                                                                                      | 标注值只能用于日期型，且必须是将来的日期      |
    | @Pattern(value)                                                                              | 标注值必须符合指定的正则表达式           |
    JSR 303 只是一套标准，需要提供其实现才可以使用。Hibernate Validator 是 JSR 303 的一个参考实现，除支持所有标准的校验注解外，它还支持以下的扩展注解：
    
    | 注解      | 规则                               |
    | --------- | ---------------------------------- |
    | @Email    | 标注值必须是格式正确的 Email 地址  |
    | @Length   | 标注值字符串大小必须在指定的范围内 |
    | @NotEmpty | 标注值字符串不能是空字符串         |
    | @Range    | 标注值必须在指定的范围内           |
    
    Spring 4.0 版本已经拥有自己独立的数据校验框架，同时支持 JSR 303 标准的校验框架。Spring 在进行数据绑定时，可同时调用校验框架完成数据校验工作。在SpringMVC 中，可直接通过注解驱动 mvc:annotation-driven 的方式进行数据校验。Spring 的 LocalValidatorFactoryBean 既实现了 Spring 的 Validator 接口，也实现了 JSR 303 的 Validator 接口。只要在Spring容器中定义了一个LocalValidatorFactoryBean，即可将其注入到需要数据校验的 Bean中。Spring本身并没有提供JSR 303的实现，所以必须将JSR 303的实现者的jar包放到类路径下。
    
    配置 **mvc:annotation-driven** 后，SpringMVC 会默认装配好一个 LocalValidatorFactoryBean，通过在处理方法的入参上标注 @Validated 注解即可让 SpringMVC 在完成数据绑定后执行数据校验的工作。
    
2.  **操作演示**
    -   导入依赖
        ```xml
        <!-- 校验注解 -->
        <dependency>
            <groupId>jakarta.platform</groupId>
            <artifactId>jakarta.jakartaee-web-api</artifactId>
            <version>9.1.0</version>
            <scope>provided</scope>
        </dependency>
                
        <!-- 校验注解实现-->        
        <!-- https://mvnrepository.com/artifact/org.hibernate.validator/hibernate-validator -->
        <dependency>
            <groupId>org.hibernate.validator</groupId>
            <artifactId>hibernate-validator</artifactId>
            <version>8.0.0.Final</version>
        </dependency>
        <!-- https://mvnrepository.com/artifact/org.hibernate.validator/hibernate-validator-annotation-processor -->
        <dependency>
            <groupId>org.hibernate.validator</groupId>
            <artifactId>hibernate-validator-annotation-processor</artifactId>
            <version>8.0.0.Final</version>
        </dependency>
        ```
    -   应用校验注解
        ```java
        import jakarta.validation.constraints.Email;
        import jakarta.validation.constraints.Min;
        import org.hibernate.validator.constraints.Length;
        
        /**
         * projectName: com.atguigu.pojo
         */
        public class User {
            //age   1 <=  age < = 150
            @Min(10)
            private int age;
        
            //name 3 <= name.length <= 6
            @Length(min = 3,max = 10)
            private String name;
        
            //email 邮箱格式
            @Email
            private String email;
        
            public int getAge() {
                return age;
            }
        
            public void setAge(int age) {
                this.age = age;
            }
        
            public String getName() {
                return name;
            }
        
            public void setName(String name) {
                this.name = name;
            }
        
            public String getEmail() {
                return email;
            }
        
            public void setEmail(String email) {
                this.email = email;
            }
        }
        
        ```
    -   handler标记和绑定错误收集
        ```java
        @RestController
        @RequestMapping("user")
        public class UserController {
        
            /**
             * @Validated 代表应用校验注解! 必须添加!
             */
            @PostMapping("save")
            public Object save(@Validated @RequestBody User user,
                               //在实体类参数和 BindingResult 之间不能有任何其他参数, BindingResult可以接受错误信息,避免信息抛出!
                               BindingResult result){
               //判断是否有信息绑定错误! 有可以自行处理!
                if (result.hasErrors()){
                    System.out.println("错误");
                    String errorMsg = result.getFieldError().toString();
                    return errorMsg;
                }
                //没有,正常处理业务即可
                System.out.println("正常");
                return user;
            }
        }
        ```
    -   测试效果

        ![](image/image_ciuI5tAmH6.png)
    
3.  **易混总结**

    @NotNull、@NotEmpty、@NotBlank 都是用于在数据校验中检查字段值是否为空的注解，但是它们的用法和校验规则有所不同。
    1.  @NotNull  (包装类型不为null)

        @NotNull 注解是 JSR 303 规范中定义的注解，当被标注的字段值为 null 时，会认为校验失败而抛出异常。该注解不能用于字符串类型的校验，若要对字符串进行校验，应该使用 @NotBlank 或 @NotEmpty 注解。
    2.  @NotEmpty (集合类型长度大于0)

        @NotEmpty 注解同样是 JSR 303 规范中定义的注解，对于 CharSequence、Collection、Map 或者数组对象类型的属性进行校验，校验时会检查该属性是否为 Null 或者 size()==0，如果是的话就会校验失败。但是对于其他类型的属性，该注解无效。需要注意的是只校验空格前后的字符串，如果该字符串中间只有空格，不会被认为是空字符串，校验不会失败。
    3.  @NotBlank （字符串，不为null，切不为"  "字符串）

        @NotBlank 注解是 Hibernate Validator 附加的注解，对于字符串类型的属性进行校验，校验时会检查该属性是否为 Null 或 “” 或者只包含空格，如果是的话就会校验失败。需要注意的是，@NotBlank 注解只能用于字符串类型的校验。
        总之，这三种注解都是用于校验字段值是否为空的注解，但是其校验规则和用法有所不同。在进行数据校验时，需要根据具体情况选择合适的注解进行校验。

### 4.文件上传和下载&#x20;

#### 4.1 文件上传

1.  **文件上传表单页面**

    位置：index.html
    -   第一点：请求方式必须是 POST
    -   第二点：请求体的编码方式必须是 multipart/form-data（通过 form 标签的 enctype 属性设置）
    -   第三点：使用 input 标签、type 属性设置为 file 来生成文件上传框
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
        <form action="/save/picture" method="post" enctype="multipart/form-data">
          昵称：<input type="text" name="nickName" value="龙猫" /><br/>
          头像：<input type="file" name="headPicture" /><br/>
          背景：<input type="file" name="backgroundPicture" /><br/>
          <button type="submit">保存</button>
        </form>
    </body>
    </html>
    
    ```
2.  **springmvc环境要求**

    pom.xml添加依赖
    ```xml
    <!-- https://mvnrepository.com/artifact/commons-fileupload/commons-fileupload -->
    <dependency>
        <groupId>commons-fileupload</groupId>
        <artifactId>commons-fileupload</artifactId>
        <version>1.3.1</version>
    </dependency>
    ```
    配置文件上传处理器(springmvc配置)
    ```xml
    <!-- 文件上传处理器,可处理 multipart/* 请求并将其转换为 MultipartFile 对象-->
    <bean id="multipartResolver"
          class="org.springframework.web.multipart.support.StandardServletMultipartResolver">
    </bean>
    ```
    CommonsMultipartResolver的bean的id，必须是：multipartResolver
    如果不是这个值，会在上传文件时报错
    在 `web.xml` 文件中添加 Multipart 配置
    
    ```xml
    <servlet>
        <servlet-name>yourAppServlet</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <multipart-config>
            <!-- 定义文件上传时所需的最大值，单位为字节 -->
            <max-file-size>10485760</max-file-size>
            <!-- 定义单个上传文件的最大值，单位为字节 -->
            <max-request-size>20971520</max-request-size>
            <!-- 定义内存中存储文件的最大值，超过此大小的文件会写入到硬盘中 -->
            <file-size-threshold>5242880</file-size-threshold>
        </multipart-config>
        <load-on-startup>1</load-on-startup>
    </servlet>
    ```
    低版本web.xml约束文件，会爆红，不管担心，继续启动即可！
    
    历史：Spring MVC 6之前，通常使用的是 `CommonsMultipartResolver` 来解析文件上传请求。但是在 Spring MVC 6中，此类已被移除，Spring 官方推荐使用 `StandardServletMultipartResolver` 或 `MockMultipartResolver` 来替代。
3.  **handler方法接收数据**
    ```java
    /**
     * 上传的文件使用 MultipartFile 类型接收其相关数据
     * @param nickName
     * @param picture
     * @param backgroundPicture
     * @return
     * @throws IOException
     */
    @PostMapping ("picture")
    public String upload(String nickName, @RequestParam("headPicture") MultipartFile picture, @RequestParam("backgroundPicture")MultipartFile backgroundPicture) throws IOException {
        System.out.println(nickName);
         String inputName = picture.getName();
        System.out.println("文件上传表单项的 name 属性值：" + inputName);
    
        // 获取这个数据通常都是为了获取文件本身的扩展名
        String originalFilename = picture.getOriginalFilename();
        System.out.println("文件在用户本地原始的文件名：" + originalFilename);
    
        String contentType = picture.getContentType();
        System.out.println("文件的内容类型：" + contentType);
    
        boolean empty = picture.isEmpty();
        System.out.println("文件是否为空：" + empty);
    
        long size = picture.getSize();
        System.out.println("文件大小：" + size);
    
        byte[] bytes = picture.getBytes();
        System.out.println("文件二进制数据的字节数组：" + Arrays.asList(bytes));
    
        InputStream inputStream = picture.getInputStream();
        System.out.println("读取文件数据的输入流对象：" + inputStream);
    
        Resource resource = picture.getResource();
        System.out.println("代表当前 MultiPartFile 对象的资源对象" + resource);
        return "home";
    }   
    ```

4.  **MultipartFile接口**

    ![](image/img014_ciD7FfevEJ.png)
5.  **文件转存**
    1.  底层机制

        ![](image/img015_U98i7AFmF-.png)
    2.  本地转存

        ![](image/img016_NDUl5QE_QR.png)

        转存代码演示：
        ```java
        ……
         
        // 1、准备好保存文件的目标目录
        // ①File 对象要求目标路径是一个物理路径（在硬盘空间里能够直接找到文件的路径）
        // ②项目在不同系统平台上运行，要求能够自动兼容、适配不同系统平台的路径格式
        //      例如：Window系统平台的路径是 D:/aaa/bbb 格式
        //      例如：Linux系统平台的路径是 /ttt/uuu/vvv 格式
        //      所以我们需要根据『不会变的虚拟路径』作为基准动态获取『跨平台的物理路径』
        // ③虚拟路径：浏览器通过 Tomcat 服务器访问 Web 应用中的资源时使用的路径
        String destFileFolderVirtualPath = "/head-picture";
         
        // ④调用 ServletContext 对象的方法将虚拟路径转换为真实物理路径
        String destFileFolderRealPath = servletContext.getRealPath(destFileFolderVirtualPath);
         
        // 2、生成保存文件的文件名
        // ①为了避免同名的文件覆盖已有文件，不使用 originalFilename，所以需要我们生成文件名
        // ②我们生成文件名包含两部分：文件名本身和扩展名
        // ③声明变量生成文件名本身
        String generatedFileName = UUID.randomUUID().toString().replace("-","");
         
        // ④根据 originalFilename 获取文件的扩展名
        String fileExtname = originalFilename.substring(originalFilename.lastIndexOf("."));
         
        // ⑤拼装起来就是我们生成的整体文件名
        String destFileName = generatedFileName + "" + fileExtname;
         
        // 3、拼接保存文件的路径，由两部分组成
        //      第一部分：文件所在目录
        //      第二部分：文件名
        String destFilePath = destFileFolderRealPath + "/" + destFileName;
         
        // 4、创建 File 对象，对应文件具体保存的位置
        File destFile = new File(destFilePath);
         
        // 5、执行转存
        picture.transferTo(destFile);
         
        ……
        ```
        缺陷
        -   Web 应用重新部署时通常都会清理旧的构建结果，此时用户以前上传的文件会被删除，导致数据丢失。
        -   项目运行很长时间后，会导致上传的文件积累非常多，体积非常大，从而拖慢 Tomcat 运行速度。
        -   当服务器以集群模式运行时，文件上传到集群中的某一个实例，其他实例中没有这个文件，就会造成数据不一致。
        -   不支持动态扩容，一旦系统增加了新的硬盘或新的服务器实例，那么上传、下载时使用的路径都需要跟着变化，导致 Java 代码需要重新编写、重新编译，进而导致整个项目重新部署。
            ![](image/img018_Fd9zEfZjJZ.png)
    3.  文件服务器转存（推荐）

        ![](image/img019_0pV4kR24fK.png)

        好处
        -   不受 Web 应用重新部署影响
        -   在应用服务器集群环境下不会导致数据不一致
        -   针对文件读写进行专门的优化，性能有保障
        -   能够实现动态扩容
            ![](image/img020_TUZbWX5oA6.png)
            **文件服务器类型**
        -   第三方平台：
            -   阿里的 OSS 对象存储服务
            -   七牛云
        -   自己搭建服务器：FastDFS 等
    4.  上传到其他模块

        这种情况肯定出现在分布式架构中，常规业务功能不会这么做，采用这个方案的一定是特殊情况，这种情况极其少见。

        ![](image/img021_GYdAmeWInU.png)

        在 MultipartFile 接口中有一个对应的方法：
        ```java
        /**
         * Return a Resource representation of this MultipartFile. This can be used
         * as input to the {@code RestTemplate} or the {@code WebClient} to expose
         * content length and the filename along with the InputStream.
         * @return this MultipartFile adapted to the Resource contract
         * @since 5.1
         */
        default Resource getResource() {
          return new MultipartFileResource(this);
        }
        ```
        注释中说：这个 Resource 对象代表当前 MultipartFile 对象，输入给 RestTemplate 或 WebClient。而 RestTemplate 或 WebClient 就是用来在 Java 程序中向服务器端发出请求的组件。

#### 4.2 文件下载

在 Spring MVC 中，`ResponseEntity` 是用于表示 HTTP 响应的一个类，它既能设置响应体的内容，也能设置响应头相关的信息。

`ResponseEntity` 可以封装一个 HTTP 响应，包括响应体、响应头和响应状态码等属性，并将其发送回客户端。它提供了一种灵活的方式来表示 HTTP 响应，可以用于处理 RESTful API、文件下载、异常处理等应用场景。

演示json数据返回：

```java
@GetMapping("/users/{age}")
public ResponseEntity<User> getUser(@PathVariable("age") int age) {
    User user = new User();
    user.setAge(age);
    user.setEmail("test");
    user.setName("二狗子");
    return ResponseEntity.ok(user);
}
```

演示文件下载代码：

```java
@Autowired
private ServletContext servletContext;

@RequestMapping("/download/file")
public ResponseEntity<byte[]> downloadFile() {

    // 1.获取要下载的文件的输入流对象
    // 这里指定的路径以 Web 应用根目录为基准
    InputStream inputStream = servletContext.getResourceAsStream("/images/mi.jpg");

    try {
        // 2.将要下载的文件读取到字节数组中
        // ①获取目标文件的长度
        int len = inputStream.available();

        // ②根据目标文件长度创建字节数组
        byte[] buffer = new byte[len];

        // ③将目标文件读取到字节数组中
        inputStream.read(buffer);

        // 3.封装响应消息头
        // ①创建MultiValueMap接口类型的对象，实现类是HttpHeaders
        MultiValueMap responseHeaderMap = new HttpHeaders();

        // ②存入下载文件所需要的响应消息头
        responseHeaderMap.add("Content-Disposition", "attachment; filename=mi.jpg");

        // ③创建ResponseEntity对象
        ResponseEntity<byte[]> responseEntity = new ResponseEntity<>(buffer, responseHeaderMap, HttpStatus.OK);

        // 4.返回responseEntity对象
        return responseEntity;
    } catch (IOException e) {
        e.printStackTrace();
    } finally {

        if (inputStream != null) {
            try {
                inputStream.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

    }

    return null;
}
```

## 七、SpringMVC底层原理

### 1. 启动配置流程

#### 1.1 Servlet 生命周期回顾

![](image/img002_4CPXs6G8ar.png)

| 生命周期环节 | 调用的方法                                                                   | 时机                       | 次数 |
| ------ | ----------------------------------------------------------------------- | ------------------------ | -- |
| 创建对象   | 无参构造器                                                                   | 默认：第一次请求&#xA;修改：Web应用启动时 | 一次 |
| 初始化    | init(ServletConfig servletConfig)                                       | 创建对象后                    | 一次 |
| 处理请求   | service(ServletRequest servletRequest, ServletResponse servletResponse) | 接收到请求后                   | 多次 |
| 清理操作   | destroy()                                                               | Web应用卸载之前                | 一次 |

#### 1.2 初始化操作调用路线图

类和接口之间的关系:

![](image/img116_feXAAVNpoZ.png)

调用线路图:

调用线路图所示是方法调用的顺序，但是实际运行的时候本质上都是调用 DispatcherServlet 对象的方法。包括这里涉及到的接口的方法，也不是去调用接口中的『抽象方法』。毕竟抽象方法是没法执行的。抽象方法一定是在某个实现类中有具体实现才能被调用。

而对于最终的实现类：DispatcherServlet 来说，所有父类的方法最后也都是在 DispatcherServlet 对象中被调用的。

![](image/img005_WfQZAJl_k4.png)

#### 1.3 SpringMVC IoC 容器创建

所在类：org.springframework.web.servlet.FrameworkServlet

```java
protected WebApplicationContext createWebApplicationContext(@Nullable ApplicationContext parent) {
  Class<?> contextClass = getContextClass();
  if (!ConfigurableWebApplicationContext.class.isAssignableFrom(contextClass)) {
    throw new ApplicationContextException(
        "Fatal initialization error in servlet with name '" + getServletName() +
        "': custom WebApplicationContext class [" + contextClass.getName() +
        "] is not of type ConfigurableWebApplicationContext");
  }
    
    // 通过反射创建 IOC 容器对象
  ConfigurableWebApplicationContext wac =
      (ConfigurableWebApplicationContext) BeanUtils.instantiateClass(contextClass);

  wac.setEnvironment(getEnvironment());
    
    // 设置父容器
  wac.setParent(parent);
  String configLocation = getContextConfigLocation();
  if (configLocation != null) {
    wac.setConfigLocation(configLocation);
  }
  
  // 配置并且刷新：在这个过程中就会去读XML配置文件并根据配置文件创建bean、加载各种组件
  configureAndRefreshWebApplicationContext(wac);

  return wac;
}
```

#### 1.4 将 SpringMVC IoC容器对象存入应用域

所在类：org.springframework.web.servlet.FrameworkServlet

```java
protected WebApplicationContext initWebApplicationContext() {
  WebApplicationContext rootContext =
      WebApplicationContextUtils.getWebApplicationContext(getServletContext());
  WebApplicationContext wac = null;

  if (this.webApplicationContext != null) {
    wac = this.webApplicationContext;
    if (wac instanceof ConfigurableWebApplicationContext) {
      ConfigurableWebApplicationContext cwac = (ConfigurableWebApplicationContext) wac;
      if (!cwac.isActive()) {
        if (cwac.getParent() == null) {
          //springmvc容器认另一个容器（spring）作为父容器
          cwac.setParent(rootContext);
        }
        configureAndRefreshWebApplicationContext(cwac);
      }
    }
  }
  if (wac == null) {
    wac = findWebApplicationContext();
  }
  if (wac == null) {
        // 创建 IOC 容器
    wac = createWebApplicationContext(rootContext);
  }

  if (!this.refreshEventReceived) {
    synchronized (this.onRefreshMonitor) {
      onRefresh(wac);
    }
  }

  if (this.publishContext) {
    // 获取存入应用域时专用的属性名
    String attrName = getServletContextAttributeName();
        // 存入
    getServletContext().setAttribute(attrName, wac);
  }
  return wac;
}
```

看到这一点的意义：SpringMVC 有一个工具方法，可以从应用域获取 IOC 容器对象的引用。

工具类：org.springframework.web.context.support.**WebApplicationContextUtils**

工具方法：**getWebApplicationContext**()

```java
@Nullable
public static WebApplicationContext getWebApplicationContext(ServletContext sc) {
  return getWebApplicationContext(sc, WebApplicationContext.ROOT_WEB_APPLICATION_CONTEXT_ATTRIBUTE);
}
```

作用：将来假如我们自己开发时，在IOC容器之外需要从IOC容器中获取bean，那么就可以通过这个工具方法获取IOC容器对象的引用。IOC容器之外的场景会有很多，比如在一个我们自己创建的Filter中。

#### 1.5 请求映射初始化

FrameworkServlet.createWebApplicationContext()→configureAndRefreshWebApplicationContext()→wac.refresh()→触发刷新事件→org.springframework.web.servlet.DispatcherServlet.initStrategies()→org.springframework.web.servlet.DispatcherServlet.initHandlerMappings()

![](image/img006_vnMiRnTzrm.png)

#### 1.6 小结

整个启动过程我们关心如下要点：

-   DispatcherServlet 本质上是一个 Servlet，所以天然的遵循 Servlet 的生命周期。所以宏观上是 Servlet 生命周期来进行调度。
-   DispatcherServlet 的父类是 FrameworkServlet。
    -   FrameworkServlet 负责框架本身相关的创建和初始化。
    -   DispatcherServlet 负责请求处理相关的初始化。
-   FrameworkServlet 创建 IOC 容器对象之后会存入应用域。
-   FrameworkServlet 完成初始化会调用 IOC 容器的刷新方法。
-   刷新方法完成触发刷新事件，在刷新事件的响应函数中，调用 DispatcherServlet 的初始化方法。
-   在 DispatcherServlet 的初始化方法中初始化了请求映射等。

### 2. 请求处理流程原理

#### 2.1 总体阶段

1.  流程描述
    -   目标 handler 方法执行**前**
        -   建立调用链，确定整个执行流程
        -   拦截器的 preHandle() 方法
        -   注入请求参数
        -   准备目标 handler 方法所需所有参数
    -   **调用**目标 handler 方法
    -   目标 handler 方法执行**后**
        -   拦截器的 postHandle() 方法
        -   渲染视图
        -   拦截器的 afterCompletion() 方法
2.  核心代码

    整个请求处理过程都是doDispatch()方法在宏观上协调和调度，把握了这个方法就理解了 SpringMVC 总体上是如何处理请求的。

    所在类：**DispatcherServlet**

    所在方法：doDispatch()

    核心方法中的核心代码：
    ```java
    // Actually invoke the handler.
    mv = ha.handle(processedRequest, response, mappedHandler.getHandler());
    ```

#### 2.2 调用前阶段

1.  建立调用链

    全类名：org.springframework.web.servlet.HandlerExecutionChain

    ![](image/img003_2YuoobIwMF.png)

    拦截器索引默认是 -1，说明开始的时候，它指向第一个拦截器前面的位置。每执行一个拦截器，就把索引向前移动一个位置。所以这个索引每次都是指向当前拦截器。所以它相当于拦截器的**指针**。
2.  对应操作

    所在类：org.springframework.web.servlet.handler.AbstractHandlerMapping

    所在方法：getHandlerExecutionChain()

    关键操作：
    -   把目标handler对象存入
    -   把当前请求要经过的拦截器存入

        ![](image/img004_ydSfnkOq6R.png)

        结论：调用链是由拦截器和目标 handler 对象组成的。
3.  调用拦截器preHandle()

    所在类：org.springframework.web.servlet.DispatcherServlet

    所在方法：doDispatch()

    ![](image/img007_A_9AZHyoTN.png)

    具体调用细节：正序调用

    所在类：org.springframework.web.servlet.HandlerExecutionChain

    所在方法：applyPreHandle

    ![](image/img008_htFE6CSadg.png)

    从这部分代码我们也能看到，为什么拦截器中的 preHandle() 方法通过返回布尔值能够控制是否放行。
    -   每一个拦截器的 preHandle() 方法都返回 true：applyPreHandle() 方法返回 true，被取反就不执行 if 分支，继续执行后续操作，这就是放行。
    -   任何一个拦截器的 preHandle() 方法返回 false：applyPreHandle() 方法返回 false，被取反执行 if 分支，return，导致 doDispatch() 方法结束，不执行后续操作，就是不放行。
4.  注入请求参数

    相关组件：

    接口：org.springframework.web.servlet.HandlerAdapter

    作用：字面含义是适配器的意思，具体功能有三个
    -   将请求参数绑定到实体类对象中
    -   给目标 handler 方法准备所需的其他参数，例如：
        -   Model、ModelMap、Map……
        -   原生 Servlet API：request、response、session……
        -   BindingResult
        -   @RequestParam 注解标记的零散请求参数
        -   @PathVariable 注解标记的路径变量
    -   调用目标 handler 方法
        所以 HandlerAdapter 这个适配器是将底层的 HTTP 报文、原生的 request 对象进行解析和封装，『适配』到我们定义的 handler 方法上。
        创建并获取这个组件

    所在类：org.springframework.web.servlet.DispatcherServlet

    所在方法：doDispatch()

    ![](image/img009_LAQfA_01-A.png)

    具体操作：调用目标 handler 方法

    所在类：org.springframework.web.servlet.DispatcherServlet

    所在方法：doDispatch()

    ![](image/img010_O3sCPwLR6_.png)

    具体操作：注入请求参数

    ![](image/img011_nwOb9QEP_8.png)

    通过反射给对应属性注入请求参数应该是下面的过程：
    -   获取请求参数名称
    -   将请求参数名称首字母设定为大写
    -   在首字母大写后的名称前附加 set，得到目标方法名
    -   通过反射调用 setXxx() 方法

#### 2.3调用后阶段

1.  调用拦截器的 postHandle() 方法

    所在类：org.springframework.web.servlet.DispatcherServlet

    所在方法：doDispatch()

    ![](image/img014_wAV36G4Yvi.png)

    调用细节：从拦截器集合长度 - 1 开始循环，循环到 0 为止。所以是**倒序**执行，从而让各个拦截器形成**嵌套执行**的效果，和AOP有异曲同工之妙。

    ![](image/img015_YPEZAdac0w.png)
2.  渲染视图

    所有后续操作的入口:

    所在类：org.springframework.web.servlet.DispatcherServlet

    所在方法：doDispatch()

    ![](image/img016_Ma3QoHPrlV.png)

    后续细节1：处理异常:

    所在类：org.springframework.web.servlet.DispatcherServlet

    所在方法：processDispatchResult()

    ![](image/img017_0mgDXuRD9X.png)

    后续细节2：渲染视图:

    所在类：org.springframework.web.servlet.DispatcherServlet

    所在方法：processDispatchResult()

    ![](image/img018_QKs8RvbiNR.png)

    补充细节：模型数据存入请求域的具体位置

    所在类：org.thymeleaf.context.WebEngineContext.RequestAttributesVariablesMap

    所在方法：setVariable()

    ![](image/img020_6YXuHbo-6o.png)
3.  调用拦截器的 afterCompletion() 方法

    所在类：org.springframework.web.servlet.DispatcherServlet

    所在方法：processDispatchResult()

    ![](image/img019_jnu2SgB4zG.png)

    调用细节：从拦截器索引开始循环，直到循环变量 i 被减到 0 为止。这样的效果是前面执行拦截器到哪里，就从哪里倒回去执行；前面没有执行的拦截器，现在也不执行。

    ![](image/img021_N1iTvQ8D3e.png)

#### 2.4 所有断点总结

断点位置基准：SpringMVC 版本采用 6.0.6 且源码已经下载，包含注释。

| 所在类               | 所在方法                    | 断点行数 | 作用                        |
| ----------------- | ----------------------- | ---- | ------------------------- |
| DispatcherServlet | doDispatch()            | 1057 | 创建调用链对象                   |
| DispatcherServlet | doDispatch()            | 1064 | 创建 HandlerAdapter 对象      |
| DispatcherServlet | doDispatch()            | 1076 | 调用拦截器 preHandle()方法       |
| DispatcherServlet | doDispatch()            | 1081 | 执行目标 handler 方法           |
| DispatcherServlet | doDispatch()            | 1088 | 调用拦截器 postHandle()方法      |
| DispatcherServlet | doDispatch()            | 1098 | 执行所有后续操作                  |
| DispatcherServlet | processDispatchResult() | 1145 | 处理异常                      |
| DispatcherServlet | processDispatchResult() | 1159 | 渲染视图                      |
| DispatcherServlet | processDispatchResult() | 1177 | 调用拦截器 afterCompletion()方法 |

### 3. ContextLoaderListener

#### 3.1 配置分离相关问题

目前情况：DispatcherServlet 加载 spring-mvc.xml，此时整个 Web 应用中只创建一个 IoC 容器。将来整合Mybatis、配置声明式事务，全部在 spring-mvc.xml 配置文件中配置也是可以的。可是这样会导致配置文件太长，不容易维护。

所以想到把配置文件分开：

-   SpringMVC相关：spring-mvc.xml 配置文件
-   Spring和Mybatis相关：spring-persist.xml 配置文件 (命名随意，分离思维)

配置文件分开之后，可以让 DispatcherServlet 加载多个配置文件。例如：

```xml
<servlet>
    <servlet-name>dispatcherServlet</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>classpath:spring-*.xml</param-value>
    </init-param>
    <load-on-startup>1</load-on-startup>
</servlet>
```

如果希望这两个配置文件使用不同的机制来加载：

-   DispatcherServlet 加载 spring-mvc.xml 配置文件：它们和处理浏览器请求相关
-   ContextLoaderListener 加载 spring-persist.xml 配置文件：不需要处理浏览器请求，需要配置持久化层相关功能

此时会带来一个新的问题：在一个 Web 应用中就会出现两个 IOC 容器

-   DispatcherServlet 创建一个 IOC 容器
-   ContextLoaderListener 创建一个 IOC 容器

注意：本节我们探讨的这个技术方案并不是『必须』这样做，而仅仅是『可以』这样做。

#### 3.2 配置ContextLoaderListener

1.  创建 spring-persist.xml

    ![](image/img022_lw63yzM-MW.png)
2.  配置 ContextLoaderListener
    ```xml
    <!-- 通过全局初始化参数指定 Spring 配置文件的位置 -->
    <context-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>classpath:spring-persist.xml</param-value>
    </context-param>
     
    <listener>
        <!-- 指定全类名，配置监听器 -->
        <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
    </listener>
    ```
3.  ContextLoaderListener

    ![](image/img023_gMZk-O9CJH.png)
    | 方法名                  | 执行时机        | 作用            |
    | -------------------- | ----------- | ------------- |
    | contextInitialized() | Web 应用启动时执行 | 创建并初始化 IOC 容器 |
    | contextDestroyed()   | Web 应用卸载时执行 | 关闭 IOC 容器     |
4.  ContextLoader

    ContextLoader 类是 ContextLoaderListener 类的父类。

    指定配置文件位置的参数名:
    ```java
    /**
     * Name of servlet context parameter (i.e., {@value}) that can specify the
     * config location for the root context, falling back to the implementation's
     * default otherwise.
     * @see org.springframework.web.context.support.XmlWebApplicationContext#DEFAULT_CONFIG_LOCATION
     */
    public static final String CONFIG_LOCATION_PARAM = "contextConfigLocation";
    ```
    初始化 IOC 容器

    方法名：initWebApplicationContext()

    创建 IOC 容器

    方法名：createWebApplicationContext()

#### 3.3 探讨两个IoC容器之间关系

![](image/image_m_4ZcyUS8E.png)

打印两个 IOC 容器对象的 toString() 方法：

```java
Object springIOC = servletContext.getAttribute("org.springframework.web.context.WebApplicationContext.ROOT");
log.debug(springIOC.toString());

Object springMVCIOC = servletContext.getAttribute("org.springframework.web.servlet.FrameworkServlet.CONTEXT.dispatcherServlet");
log.debug(springMVCIOC.toString());
```

打印效果是：

\*\*Root \*\*WebApplicationContext, started on Thu Jun 17 14:49:17 CST 2021
……
WebApplicationContext for namespace 'dispatcherServlet-servlet', started on Thu Jun 17 14:49:18 CST 2021, **parent**: Root WebApplicationContext

结论：两个组件分别创建的 IOC 容器是**父子**关系。

-   父容器：ContextLoaderListener 创建的 IOC 容器
-   子容器：DispatcherServlet 创建的 IOC 容器

父子关系是如何决定的？

-   Tomcat 在读取 web.xml 之后，加载组件的顺序就是监听器、过滤器、Servlet。
-   ContextLoaderListener 初始化时如果检查到有已经存在的根级别 IOC 容器，那么会抛出异常。
-   DispatcherServlet 创建的 IOC 容器会在初始化时先检查当前环境下是否存在已经创建好的 IOC 容器。
    -   如果有：则将已存在的这个 IOC 容器设置为自己的父容器
    -   如果没有：则将自己设置为 root 级别的 IOC 容器

DispatcherServlet 创建的 IOC 容器设置父容器的源码截图：

所在类：org.springframework.web.servlet.FrameworkServlet

所在方法：createWebApplicationContext()

![](image/img024__fEN2w3a99.png)

#### 3.4 两个IoC容器之间Bean访问

![](image/img113_B0qo4n9vts.png)

spring-mvc.xml配置方式：

```xml
<context:component-scan base-package="com.atguigu.spring.component.controller"/>
```

spring-persist.xml配置方式：

```xml
<context:component-scan base-package="com.atguigu.spring.component.service,com.atguigu.spring.component.dao"/>
```

所以bean所属IOC容器的关系：

-   父容器
    -   EmpService
    -   EmpDao
-   子容器
    -   EmpController

结论：子容器中的 EmpController 装配父容器中的 EmpService 能够正常工作。说明子容器可以访问父容器中的bean。

分析：“子可用父，父不能用子”的根本原因是子容器中有一个属性 \<span style="color:blue;font-weight:bold;"\>getParent()\</span\> 可以获取到父容器这个对象的引用。

源码依据：

-   在 AbstractApplicationContext 类中，有 parent 属性
-   在 AbstractApplicationContext 类中，有获取 parent 属性的 getParent() 方法
-   子容器可以通过 getParent() 方法获取到父容器对象的引用
-   进而调用父容器中类似 “getBean()” 这样的方法获取到需要的 bean 完成装配
-   而父容器中并没有类似 “getChildren()“ 这样的方法，所以没法拿到子容器对象的引用

![](image/img114_NCIr6ftjXa.png)

#### 3.5 有可能重复对象

![](image/img115_DlCdffhvJZ.png)

查看日志确认是否重复创建了对象

Root WebApplicationContext: initialization started
……

Creating shared instance of singleton bean 'helloDao'
Creating shared instance of singleton bean 'helloHandler'
Creating shared instance of singleton bean 'helloService'

……
Root WebApplicationContext initialized in 1150 ms
Refreshing WebApplicationContext for namespace 'dispatcherServlet-servlet'
……

Creating shared instance of singleton bean 'helloDao'
Creating shared instance of singleton bean 'helloHandler'
Creating shared instance of singleton bean 'helloService'

重复创建对象的问题

-   浪费内存空间
-   两个 IOC 容器能力是不同的
    -   spring-mvc.xml：仅配置和处理请求相关的功能。所以不能给 service 类附加声明式事务功能。

        结论：基于 spring-mvc.xml 配置文件创建的 EmpService 的 bean 不带有声明式事务的功能

        影响：DispatcherServlet 处理浏览器请求时会调用自己创建的 EmpController，然后再调用自己创建的EmpService，而这个 EmpService 是没有事务的，所以处理请求时\<span style="color:blue;font-weight:bold;"\>没有事务功能的支持\</span\>。
    -   spring-persist.xml：配置声明式事务。所以可以给 service 类附加声明式事务功能。

        结论：基于 spring-persist.xml 配置文件创建的 EmpService 有声明式事务的功能

        影响：由于 DispatcherServlet 的 IOC 容器会优先使用自己创建的 EmpController，进而装配自己创建的EmpService，所以基于 spring-persist.xml 配置文件创建的有声明式事务的 EmpService 用不上。

解决重复创建对象的问题

解决方案一\[建议使用]

让两个配置文件配置自动扫描的包时，各自扫描各自的组件。

-   SpringMVC 就扫描 XxxHandler、XXXController
-   Spring 扫描 XxxService 和 XxxDao

解决方案二

如果由于某种原因，必须扫描同一个包，确实存在重复创建对象的问题，可以采取下面的办法处理。

-   spring-mvc.xml 配置文件在整体扫描的基础上进一步配置：仅包含被 @Controller 注解标记的类。
-   spring-persist.xml 配置在整体扫描的基础上进一步配置：排除被 @Controller 注解标记的类。

具体spring-mvc.xml配置文件中的配置方式如下：

```xml
<!-- 两个Spring的配置文件扫描相同的包 -->
<!-- 为了解决重复创建对象的问题，需要进一步制定扫描组件时的规则 -->
<!-- 目标：『仅』包含@Controller注解标记的类 -->
<!-- use-default-filters="false"表示关闭默认规则，表示什么都不扫描，此时不会把任何组件加入IOC容器；
        再配合context:include-filter实现“『仅』包含”效果 -->
<context:component-scan base-package="com.atguigu.spring.component" use-default-filters="false">

    <!-- context:include-filter标签配置一个“扫描组件时要包含的类”的规则，追加到默认规则中 -->
    <!-- type属性：指定规则的类型，根据什么找到要包含的类，现在使用annotation表示基于注解来查找 -->
    <!-- expression属性：规则的表达式。如果type属性选择了annotation，那么expression属性配置注解的全类名 -->
    <context:include-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
</context:component-scan>
```

具体spring-persist.xml配置文件中的配置方式如下：

```xml
<!-- 两个Spring的配置文件扫描相同的包 -->
<!-- 在默认规则的基础上排除标记了@Controller注解的类 -->
<context:component-scan base-package="com.atguigu.spring.component">

    <!-- 配置具体排除规则：把标记了@Controller注解的类排除在扫描范围之外 -->
    <context:exclude-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
</context:component-scan>
```

#### 3.5 小结

-   DispatcherServlet 和 ContextLoaderListener 并存
    -   DispatcherServlet 负责加载 SpringMVC 的配置文件，例如：spring-mvc.xml
    -   ContextLoaderListener 负责加载 Spring 的配置文件，例如：spring-persist.xml
-   两个 IOC 容器的关系：
    -   ContextLoaderListener 创建的容器是父容器
    -   DispatcherServlet 创建的容器是子容器
-   bean 的装配
    -   子容器可以访问父容器中的 bean
    -   父容器不能访问子容器中的 bean
-   两个容器扫描同一个包会导致重复创建对象
    -   解决办法一：各自扫描各自的包
    -   解决办法二：
        -   DispatcherServlet 创建的容器仅扫描 handler
        -   ContextLoaderListener 创建的容器不扫描 handler

通过遵循 RESTful 架构的设计原则，可以构建出易于理解、可扩展、松耦合和可重用的 Web 服务。RESTful API 的特点是简单、清晰，并且易于使用和理解，它们使用标准的 HTTP 方法和状态码进行通信，不需要额外的协议和中间件。

RESTful 架构通常用于构建 Web API，提供数据的传输和操作。它可以用于各种应用场景，包括客户端-服务器应用、单页应用（SPA）、移动应用程序和微服务架构等。

总而言之，RESTful 是一种基于 HTTP 和标准化的设计原则的软件架构风格，用于设计和实现可靠、可扩展和易于集成的 Web 服务和应用程序
