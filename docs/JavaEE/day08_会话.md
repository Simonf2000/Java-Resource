# 1.回顾

```tex
1. 转发和重定向
	资源跳转(动态资源和静态资源)
	转发和重定向的区别 
2. 乱码处理
3. web项目路径
4. MVC模型
5. 日程管理第二期
	登录注册
	Servlet优化
```

# 2.会话

- 会话：进行一次一定时间内的交流
- 应用：让服务器知道客户端是谁？
- 会话技术
  - Cookie
  - Session

## 2.1 Cookie

- Cookie是服务器保存在浏览器的一小段信息(用户登录的信息或者视频的进度...)

### 2.1.1 服务器如何将信息保存到浏览器

```java
protected void addCookie(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //设置Cookie数据保存到浏览器
        //1. 创建Cookie对象
        Cookie cookie=new Cookie("username","admin");
        //2. 添加到response内
        response.addCookie(cookie);

//        response.getWriter().write("success");

    }
```

- 一旦Cookie数据保存到浏览器了，下次请求将携带这些Cookie

### 2.1.2 服务器如何获取请求中的cookie数据

```java
protected void getCookie(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    System.out.println("getCookie...");
    //获取Cookie
    Cookie[] cookies = request.getCookies();
    if(cookies!=null){
        for (Cookie cookie : cookies) {
            System.out.println(cookie.getName()+"="+cookie.getValue());
        }
    }
}
```

### 2.1.3 cookie数据的其他设置

- 目前的Cookie是会话级别的

  - 关闭浏览器就删除了

  - 可以设置成持久化级别的

    - ```
      //1.1 将Cookie设置为持久化的
      cookie01.setMaxAge(60*60*24*30);//单位：s
      ```

- 设置Cookie的携带条件

  - ```
    //1.2 为Cookie设置携带条件
    cookie01.setPath("/cookieTest/getCookie");
    ```

## 2.2 Session

- 数据保存到服务器端并且服务器会为每个会话的客户端创建一个唯一的session对象

### 2.2.1 如何创建Session对象

```java
protected void createSession(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    //创建Session对象(会话开始了)
    HttpSession session = request.getSession();
    System.out.println("session = " + session);
}
```

### 2.2.2 如何往Session对象中添加、修改、获取、移除数据

- 会话域共享数据(同一个Session对象)
  - setAttribute(String key,Object value)
  - getAttribute(String key)
  - removeAttribute(String key)

### 2.2.4 服务器是如何知晓客户端对应的session对象的？

- 借助Cookie
  - 在第一次调用getSession方法时，会新建HttpSession对象，并且给客户端发送Cookie数据(JSESSIONID)
  - 当客户端再次发请求时，就会携带JSESSIONID数据，然后服务器就可以根据Cookie数据寻找到对应的Session对象

### 2.2.5 会话什么时候结束？

- JSESSIONID的Cookie没了
  - JSESSIONID是一个会话级别的Cookie

- 服务器将Session对象强制失效

  - ```
    <a href="/sessionTest/removeSession">强制Session失效</a>
    ```

- 达到了最大空闲时间

  - 默认是30分钟

  - 可以设置

    - ```
      //设置最大空闲时间
      session.setMaxInactiveInterval(40);//单位：s
      ```

### 2.2.6 getSession方法的原理

- 判断请求中是否有JSESSIONID的Cookie
  - 有，进行下一步
  - 没有，创建新的Session对象，并且设置JSESSIONID这个Cookie给客户端

- 根据JSESSIONID的value值寻找Session对象
  - 找到了，直接返回
  - 找不到，创建新的Session对象，并且设置JSESSIONID这个Cookie给客户端



# 3.作用域对象

- 请求域
- 会话域
- 应用域

# 4.过滤器

- 生活中的过滤器
  - 口罩、高考、烟嘴、净水器、安检...

- 程序中的过滤器
  - 过滤请求

## 4.1 过滤器的HelloWorld

- 创建一个类

- 实现接口Filter

- 实现接口中的所有抽象方法

- 设置过滤器的过滤路径

  - ```java
    @WebFilter("/user")
    public class FirstFilter implements Filter {
        @Override
        public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
            System.out.println("FirstFilter...");
        }
    }
    ```

  ```xml
  <!--为FirstFilter设置过滤路径-->
  <filter>
      <filter-name>FirstFilter666</filter-name>
      <filter-class>com.atguigu.filter.FirstFilter</filter-class>
  </filter>
  <filter-mapping>
      <filter-name>FirstFilter666</filter-name>
      <url-pattern>/user</url-pattern>
  </filter-mapping>
  ```

## 4.2 过滤器的生命周期

- web项目加载时创建对象，并初始化
- 当有请求发送时执行doFilter方法
- 当web项目卸载的时候销毁

## 4.3 过滤器链

- 一个请求有多级过滤

- 如果有过滤器没有放行，则前面放行的过滤器要执行放行后代码

- 多个过滤器如何控制顺序问题

  - ```
    xml配置：过滤器的执行顺序和filter-mapping的上下位置有关
    注解：通过类名大小控制(单体项目)
    ```

# 5.监听器

- 生活中的监听器
  - 烟感报警器、声控灯、地震仪、语音助手、雷达、防空导弹....

- 程序中的监听器

  - 监听三个作用域对象的创建和销毁

    - ```
      ServletContextListener  ★
      HttpSessionListener
      ServletRequestListener
      ```

  - 经停三个作用域对象中数据的添加、修改、移除

    - ```
      ServletContextAttributeListener
      HttpSessionAttributeListener
      ServletRequestAttributeListener
      ```

  - 监听某种对象在session中的添加或移除

    - HttpSessionBindingListener  

  - 监听session中的某种对象的钝化和活化

    - HttpSessionActivationListener  

- 监听器的创建

  - 创建一个类

  - 实现一个接口

  - 重写你需要的方法

  - 注册监听器

  - ```java
    //@WebListener
    public class MyListenter implements ServletContextListener, HttpSessionListener, ServletRequestListener, ServletContextAttributeListener {
        @Override
        public void contextInitialized(ServletContextEvent sce) {
            System.out.println("ServletContext对象创建了...");
        }
    
        @Override
        public void contextDestroyed(ServletContextEvent sce) {
            System.out.println("ServletContext对象销毁了...");
        }
    }
    ```

  - ```xml
    <!--注册Listener-->
    <listener>
        <listener-class>com.atguigu.listener.MyListenter</listener-class>
    </listener>
    ```

# 6.日程管理第三期

- 保持用户的登录状态

  - 登录成功后将当前登录对象添加到session内

  - ```java
    protected void login(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("username");
        String userPwd = request.getParameter("userPwd");
    
        SysUser login = userService.login(username);
        if(login!=null){
            if(login.getUserPwd().equals(MD5Util.encrypt(userPwd))){
                //保持登录状态
                //将当前登录人的信息，存储到session中
                HttpSession session = request.getSession();
                session.setAttribute("loginUser",login);
                response.sendRedirect(request.getContextPath()+"/showSchedule.html");
            }else{
                response.sendRedirect(request.getContextPath()+"/loginUserPwdError.html");
            }
        }else{
            response.sendRedirect(request.getContextPath()+"/loginUsernameError.html");
        }
    }
    ```

- 当用户访问日程管理首页(showSchedule.html),要求他必须登录

- ```java
  import java.io.IOException;
  @WebFilter("/showSchedule.html")
  public class LoginFilter implements Filter {
      @Override
      public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
          HttpServletRequest request=(HttpServletRequest)servletRequest;
          HttpServletResponse response=(HttpServletResponse)servletResponse;
          //检查是否登录
          HttpSession session = request.getSession();
          Object loginUser = session.getAttribute("loginUser");
          if(loginUser!=null){
              filterChain.doFilter(request,response);
          }else{
              response.sendRedirect(request.getContextPath()+"/login.html");
          }
  
      }
  }
  ```









