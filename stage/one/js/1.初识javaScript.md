 ## JS
 
 JavaScript 是允许你在网页中实现复杂事情的一门编程语言

 JavaScript 语言的核心之上的功能: **应用程序编程接口 [Application Programming Interfaces (APIs)]**

 ### 浏览器安全
 
 每个浏览器标签本身就是一个用来运行代码的分离的容器（这些容器用专业术语称为“运行环境”）——这意味着在大多数情况中，每个标签中的代码是完全分离地运行，而且在一个标签中的代码不能直接影响在另一个标签中的代码——或者在另一个网站中的。
 
 ### JavaScript 运行顺序
 
 当浏览器遇到一块 JavaScript 代码时，它通常会按顺序运行这代码块，从上往下。
 
 ### 解释代码 vs 编译代码
 
 在编程环境中，你或许听说过这两个术语 **解释 [interpreted]** 和 **编译 [compiled]**。JavaScript 是一个解释语言——代码从上到下运行，而运行的结果会马上被返回。在浏览器运行代码前，你不必先把它转化为其他形式。
 
 另一方面来说，编译语言则需要在运行前转化为另一种形式。比如说 C/C++ 则要先被编译成汇编语言，然后再由电脑运行。
 
 ### 服务器端代码 vs 客户端代码
 
 客户端代码是在用户的电脑上运行的代码——当浏览一个网页时，这个网页的客户端代码就会被下载，然后由浏览器来运行和展示。
 
 服务器端代码则在服务器上运行，然后它的结果会由浏览器进行下载和展示。
 
 ### 内部的 JavaScript
 
 ```
 {
    <script>
    
      // JavaScript goes here
    
    </script>
 }
 ```
 
 ### 外部的 JavaScript
 
 ```
  {
     <script src="script.js"></script>
  }
 ```
 
 ### 内联 JavaScript 处理器
 
 ```
   {
      <button onclick="createParagraph()">Click me!</button>
   }
 ```
 不要将click写在HTML中
 
 ```
    {
       var buttons = document.querySelectorAll('button');
       
       for(var i = 0; i < buttons.length ; i++) {
         buttons[i].addEventListener('click', createParagraph);
       }
    }
 ```
  
  ### 注释
  
  * 个单行注释书写在一个双正斜杠后 (//)
  
  ```
      {
         // I am a comment
      }
  ```
  
  * 个单行注释书写在一个双正斜杠后 (//)
  
  ```
        {
           /*
             I am also
             a comment
           */
        }
  ```
  