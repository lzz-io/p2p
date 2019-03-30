### 配置 NPM 镜像源

### taobao镜像

> #### 通过 `cnpm` 使用

```sh
npm install -g cnpm --registry=https://registry.npm.taobao.org

# 使用
cnpm install -g @vue/cli
```

> 
>
> #### 临时使用

```sh
npm --registry https://registry.npm.taobao.org install -g @vue/cli
```

> #### 持久使用

```shell
# 默认的源为：https://registry.npmjs.org
npm config set registry https://registry.npm.taobao.org

# 配置后可通过下面方式来验证是否成功
npm config get registry
# 或
npm info @vue/cli
```



# 升级模块

## 模块检查更新/升级

```sh
npm outdated

npm update
```

~~===貌似npm update也能升级到最新，下面没啥用。~~

### 高效升级插件npm-check-updates

#### 安装方法

```
npm install -g npm-check-updates
```

#### 查看最新的版本

```
npm-check-updates
ncu
```

#### 升级

这说明有些包需要升级 这时候我们使用

```
ncu -u
```

就可以全部升级了。