# NTC
makecode 的 NTC温度传感器 microbit 软件包

作者: shaoziyang  
日期: 2018.Mar  


## 使用方法

打开 makecode 编辑器，在项目中选择添加软件包，然后在地址栏输入下面网址  

https://github.com/microbit-makecode-packages/NTC_cn  

搜索后就可以添加并使用本软件包了。


## API

- **设置系数**(B: NTC_B)  
B 是 NTC 传感器的系数，这里可以选择 3380 或 3950。  

- **获取温度**(d: number)  
d 是模拟输入转换后的数值，返回值是按照摄氏度为单位的温度。  

## 演示

![](https://raw.githubusercontent.com/microbit-makecode-packages/NTC_cn/master/demo.jpg)

## 授权方式

MIT

microbit/micropython 中文社区版权所有 (c) 2018  

## 支持硬件

* for PXT/microbit


[来自 microbit/micropython 中文社区](http://www.micropython.org.cn) 