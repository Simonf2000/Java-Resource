# Java程序编译运行常见问题

## 一、编译问题

**Windows 系统上的常见错误消息**

1. ```
   'javac' 不是内部或外部命令，也不是可运行的程序或批处理文件
   ```

   如果收到此错误，Windows 找不到编译器 (javac)

   这是告诉 Windows 在哪里可以找到 javac 的一种方法。假设您在 C:\jdk1.8.0 中安装了 JDK。在提示符下，您将键入以下命令并按 Enter：

   ```
   C:\jdk1.8.0\bin\javac HelloWorldApp.java
   ```

   如果选择此选项，则每次编译或运行程序时都必须在 javac 和 java 命令之前使用 C:\jdk1.8.0\bin\。为避免这种额外的输入，需要配置JDK环境变量。

   

2. ```
   类名称“HelloWorldApp”仅在明确请求注释处理时才被接受
   ```
   
   如果您收到此错误，则您在编译程序时忘记包含 .java 后缀。请记住，命令是 `javac HelloWorldApp.java` 而不是 `javac HelloWorldApp`

**语法错误**

如果您错误输入程序的一部分，编译器可能会发出语法错误。该消息通常显示错误的类型、检测到错误的行号、该行上的代码以及错误在代码中的位置。这是由于在语句末尾省略分号 (;) 导致的错误：

```
Testing.java:8: error: ';' expected
            count++
                   ^
1 error
```

如果您看到任何编译器错误，那么您的程序没有成功编译，并且编译器没有创建 .class 文件。仔细验证程序，修复您检测到的任何错误，然后重试

**语义错误**

除了验证您的程序在语法上是否正确之外，编译器还会检查其他基本正确性。例如，每次使用未初始化的变量时，编译器都会警告您：

```
Testing.java:8: error: variable count might not have been initialized
            count++;
            ^
Testing.java:9: error: variable count might not have been initialized
        System.out.println("Input has " + count + " chars.");
                                          ^
2 errors
```

同样，您的程序没有成功编译，并且编译器没有创建 .class 文件。修复错误并重试。

## 二、运行问题

**Windows 系统上的错误消息**

```
Exception in thread "main" java.lang.NoClassDefFoundError: HelloWorldApp
```

如果您收到此错误，则 java 找不到您的字节码文件 HelloWorldApp.class。

java 试图找到您的 .class 文件的地方之一是您的当前目录。因此，如果您的 .class 文件在 C:\java 中，您应该将当前目录更改为该目录。要更改目录，请在提示符下键入以下命令并按 Enter：

```
cd c:\java
```

如果在提示符下输入 dir，您应该会看到 .java 和 .class 文件。现在再次输入 `java HelloWorldApp`运行程序。

如果仍有问题，则可能需要更改 CLASSPATH 变量。要查看是否有必要，请尝试使用以下命令破坏类路径。

```
set CLASSPATH=
```

现在再次输入 java HelloWorldApp。如果程序现在可以运行，则必须更改 CLASSPATH 变量。要设置此变量，请参阅 JDK 8 安装说明中的更新 PATH 变量部分。 CLASSPATH 变量以相同的方式设置

```
无法找到或加载主类 HelloWorldApp.class
```

初学者程序员常犯的一个错误是尝试在编译器创建的 .class 文件上运行 java 启动器。例如，如果您尝试使用 `java HelloWorldApp.class` 而不是 `java HelloWorldApp` 运行您的程序，则会收到此错误。请记住，参数是您要使用的类的名称，而不是文件名。

```
`Exception in thread "main" java.lang.NoSuchMethodError: main`
```

JVM 要求您使用它执行的类有一个 main 方法，可以在该方法上开始执行您的应用程序。

