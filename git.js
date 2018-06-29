/**
 * =======================================================
 *
 * git 或 git help  查看git命令帮助信息
 *
 * git help -a 显示出 git所有命令
 *
 * git help -g 查看git使用手册
 *
 * git help [命令]   查看命令详细内容
 *
 *
 * git 配置
 * 		system 系统范围
 * 		global 用户范围
 * 		[]     项目范围
 * 	git config --global user.name "名称"
 * 	git config --global user.email "xxx@xx.com"
 *
 *
 * 	查看git配置信息
 * 		git config --list
 *
 * 	重置git配置信息
 * 		git config --unset --global user.name
 *
 *  git输出带有颜色
 *  	git config --global color.ui true
 *
 *
 *  git的配置信息会放在用户的主目录下的.gitconfig文件中
 *  查看这个配置文件：
 *  	cat ~/.gitconfig
 *
 *
 *  git config --global alias.<别名> checkout  给checkout添加别名
 *
 *  系统上设置命令的别名
 *  vim ~/.bash_profile
 *  	alias <命令别名>="<执行的命令>"
 *
 *
 *
 *  git config --global core.excludesfile ~/.gitignore_global   全局范围内要忽略的文件配置
 *  地址：github.com/github/gitignore   // 可忽略文件配置模板
 *
 *  git init 初始化项目
 *
 *
 *  git status 查看当前项目状态 (查看当前分支)
 *
 *
 *  git add < . 表示添加所有文件> | <直接输入要添加的文件名称>  git添加暂存区
 *
 *  git commit -m "<提交的描述信息>"   git提交
 *  git commit -am "<提交的描述信息>"   添加并提交
 *
 *  git log  查看提交历史
 *  		--oneline  查看提交历史，一行显示
 *  		--oneline --decorate   详细一些
 *  		--all  查看所有分支的提交日志
 *  		--author="<作者>"  查看指定作者的提交日志
 *  		-5   查看最近5条提交的日志
 *  		--grep="<包含的信息>"   查看包含的信息的提交
 *  		--before="<指定日期>"   查看指定日期和指定日期之前的提交
 *  		--before="1 week"      查看一周前的提交
 *  		--before="3 days"      查看三天前的提交
 *  		--graph   加上图形效果
 *
 *
 *  git diff [文件名称]  比较工作目录和暂存区的差异，不带文件名比较全部工作目录和暂存区的差异
 *
 *  git diff --staged
 *  git diff --cached  查看已经暂存起来的文件和上次提交时的快照之间（HEAD）的差异
 *  					显示的是下一次commit时会提交到HEAD的内容（不带-a情况下）
 *  git diff <分支名>..<分支名>  查看两个分支提交的区别
 *  git diff <分支名>..<分支名> <文件名>  查看不同分支上的某个文件的区别
 *
 * 	git rm <删除的文件名 | 路径+文件名>  git删除文件 多个文件空格隔开
 * 	git rm -r <目录名>   git删除目录
 *
 * 	git mv <重命名文件> <新的文件名>   git重命名
 * 	git mv <[文件|目录]名称> <文件移动目录>       git移动文件
 *
 *
 *  git checkout HEAD -- <文件名>  恢复文件到最近的一次提交记录
 *  git checkout HEAD^ -- <文件名>  恢复文件到最近一次提交的上一次记录， 两个^^表示上两次
 *
 *
 *  git revert 撤销 某次操作，此次操作之前和之后的commit和history都会保留，并且把这次撤销
 *             作为一次最新的提交
 *  git revert <提交的ID>  撤销指定id的提交
 *  git revert HEAD       撤销前一次 commit
 *  git revert HEAD^      撤销前前一次 commit
 *
 *
 * 	git reset <commit id>
 * 			--soft 软提交 不会重置工作区和暂存区
 * 		    --hard  重置工作区和暂存区
 * 		    --mixed(默认)  暂存区撤销到指定状态, 指针指向这次提交
 *
 *  git revert 和 git reset的区别
 *     1. git revert是用一次新的commit来回滚之前的commit，git reset是直接删除指定的commit。
 *     2. 在回滚这一操作上看，效果差不多。但是在日后继续merge以前的老版本时有区别。
 *     		因为git revert是用一次逆向的commit“中和”之前的提交，因此日后合并老的branch时，
 *     		导致这部分改变不会再次出现，
 *     		但是git reset是之间把某些commit在某个branch上删除，
 *     		因而和老的branch再次merge时，这些被回滚的commit应该还会被引入。
 *     3. git reset 是把HEAD向后移动了一下，而git revert是HEAD继续前进，
 *     		只是新的commit的内容和要revert的内容正好相反，能够抵消要被revert的内容。
 *
 *
 *
 *  git branch  查看项目所有分支
 *
 *  git branch -r 查看远程库的分支
 *
 *  git branch <分支名称>  创建分支
 *
 *  git branch -m <当前分支名> <新分支名>  重命名分支名称
 *
 *  git branch -d <分支名称>   删除分支
 *
 *  git checkout <分支名称>   切换分支
 *
 *  git merge <合并分支名称>  将分支合并到当前分支
 *
 *
 *
 *  git stash save "<描述>"   保存当前工作进度到git栈
 *
 *  git stash list  查看保存工作进度的列表
 *
 *  git stash show -p <工作进度代号(stash@{0})>  查看指定git栈与当前工作进度的区别
 *
 *  git stash apply <工作进度代号>   恢复指定工作进度,git栈中任然存在
 *  git stash pop <工作进度代号>     恢复指定工作进度, git栈中该工作进度消失
 *
 *  git stash drop <工作进度代号>   删除指定的工作进度
 *
 *
 *  git remote
 *  git remote add origin <远程库地址>   推送本地项目到远程库
 *
 *  git remote rm   移除远程地址
 *
 *
 *  git push -u origin <分支名>  推送到远程版本库  -u 参数会跟踪远程分支库的变化
 *
 *
 *  git clone <远程版本库地址> <目录名称> 克隆远程项目到本地
 *
 * 	git fetch  从其它远程版本库提取更新
 *
 * =======================================================
 */