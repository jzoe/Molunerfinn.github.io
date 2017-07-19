title: WIN8.1下安装CentOS7.1
id: 199
categories:
  - Linux
  - 日志
date: 2015-06-09 00:30:06
tags:
---

##这是篇记录，自觉得不能算是教程
稍微记录一下安装的过程。早先给电脑硬盘分区的时候专门留给了Linux一块空间，但是当时因为重装系统备份文件之类的事情，一直没动过Linux盘。最近正好在学Python，前端等东西，于是就考虑着给电脑装上Linux系统。之前在Win8下用VM虚拟机装过CentOS6.5，满以为正常安装是同样简单的。然而其实并不是这样的。
</br>
另外这篇文章的第一版并没有附图，因为这是在刚装完的CentOS下写的，所以并没有图文准备，以后更新会加上。

##采用U盘安装CentOS7.1
####空间准备
因为之前装WINDOWS系统的缘故，习惯性地采用了U盘安装。当然硬盘安装也是没问题的。本文只记录U盘安装的过程。
首先先留出一块空闲的分区，大小自己定吧，我是留了100GB。格式化该盘。至于NTFS文件系统还是FAT32文件系统，我的情况是这个分区只能被格式化成NTFS。不过无伤大雅。右键计算机-选择管理-磁盘管理，将你格式化的这个盘，右键-删除分区。OK这下在WINDOWS系统下我们就看不到这个盘了。准备安装的空间就腾出来了。
####Linux系统准备
没有采用乌邦图而用了CentOS主要是手头上就有CentOS7的镜像。安装Centos7和6.5版本我觉得应该是差不多的。这里我用C7的版本是'CentOS-7.0-1503-x86_64-DVD.iso',当然你用的是1406的版本也没有问题。下载这些镜像可以去CentOS官网下载，也可以去网易或者阿里的镜像站下载。我是在校园网的BT站里下的。总之，我们得有一个Linux系统镜像在手上。
####U盘安装盘准备
我们得准备一下这个软件：UltraISO（用来制作U盘启动）。百度的第一条，9.6.2.3059版本（2.2MB）的就可以。其余版本我并没有尝试，但是貌似听说会出问题，所以就用9.6.2.3059版本的就行。OK，download下来后，准备一个大于或者等于8GB的U盘，备份里面的所有资料，因为制作安装盘的时候会删除里面的所有资料。打开UltraISO，选择启动光盘，选择镜像，选择U盘，采用USB-HDD+2的方式进行写入操作。静候十来分钟左右，便会安装完毕。这个时候U盘就准备好了。
####BIOS启动项更改
这个时候重启系统，插入U盘。进入BIOS（这一步不同电脑按键不一样，注意查一下自己电脑进入BIOS的按键），找到BOOT选项，将USB BOOT选项提到优先级最高，F10（不一样电脑按键不一样注意看右侧提示）保存并退出。
####更改CentOS的镜像找寻的目录
这一步是我安装CentOS7花费了最多时间的地方，无数次的尝试以及百度才最终解决。这里也是对自己盲目尝试表示了遗憾。其实早想到方法的话就不必折腾这么久了。
</br>
进入正题。在修改了BOOT选项后，我们采用了U盘启动。（所以我们必须要插入U盘。。）这个时候会出现三个选项：

*   Install CentOS7
*   Test this Media &amp;install centos7
*   Troubleshooting

</br>

这个时候重点就来了。因为我的电脑是EFI引导，所以在这一步的时候与一般我们百度到的情况不一样，他们是在Install CentOS7 这一项按'TAB'键进行修改目录路径。而我是在这一项按键盘'e'键，进入修改。将'vmlinuz initrd.stage2=hd:LABEL=CentOS\x207\x20x86_64 quiet' 改为：'vmlinuz initrd.stage2=hd:/dev/sdc1 quite',一定要留意两个点，'quite'前有一个空格；最重要的来了，这也是我一直没装成功的地方，'/dev/sdc1/'这个地方里的sdc1并不是每个人都是sdc1,跟你的电脑所装的硬盘数量有关。通常情况下是sdb4，但是也有例外，例如我就是例外。所以我当时一直觉得我的情况应该也是大众情况为什么用sdb4不行呢？？犯了想当然的错误。如果你知道自己的U盘是sd几那最好。如果不知道的话可以采用以下步骤：直接执行 install Centos7，那么会报错并进入dracut系统，这个时候在'dracut:#'后输入 'cd dev',进入dev 目录后，输入'ls'，列出目录下的东西。这个时候注意看，sda-sdd不等，你找到如果某个sdx下只有一个sdx加上数字，那么就很有可能是你的U盘。当然这是定性地看，如果要定量地看还得查看每个盘符的大小从而确定你的U盘。
</br>
找到U盘后，在'dracut:#'后输入'reboot'重启。重启后把目录改好。按'ctrl与x'键执行。这个时候就能出现CentOS7的安装界面了。

####安装CentOS7
能够进入图形安装界面那么就安装成功了一半。我们不必去选择安装源，因为UltraISO已经帮我们做好了（网络上有的教程说做完安装盘要把package文件夹删去并将镜像拷贝进U盘根目录的说法不靠谱，用UISO做完就可以了，不必管其他的东西。）选择安装的类型，最小化（没有图形界面），Gnome界面啊，开发者工作站啊之类的，根据自己需求来选。然后进入安装目录，选择你当初删除分区的那个硬盘，应该是会在下面显示剩馀有效空间，如我的就是显示FREE 100GB。所以选择好这个盘符，选择自己分区，然后按照自己的喜好分区吧。我是采用了LVM默认的自动分配。然后分配完就可以执行安装了。安装的时候，可以注册一个用户名以及指定ROOT密码，这个日后有用。然后就是静待安装结束后出现的CENTOS7的界面吧。