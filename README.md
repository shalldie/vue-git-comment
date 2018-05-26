# vue-git-comment

[![npm](https://img.shields.io/npm/v/vue-git-comment.svg)](https://www.npmjs.com/package/vue-git-comment) ![Github file size](https://img.shields.io/github/size/shalldie/vue-git-comment/dist/vue-git-comment.js.svg)

Fork from [GitHub](https://github.com/shalldie/vue-git-comment)

Have a look at [Demo](https://shalldie.github.io/demos/vue-git-comment/)

## Description

这是一个基于 `github issues` 和 `vue` 的纯前端评论组件，不需要后端。

## Install

link:

```html
<script src="lib/vue.js"></script>

<link href="dist/vue-git-comment.css"  rel="stylesheet">
<script src="dist/vue-git-comment.js"></script>
```

npm:

```js
npm install vue-git-comment --save
```

## Usage

```js
import 'vue-git-comment/dist/vue-git-comment.css';
import VueGitComment from 'vue-git-comment';

// var VueGitComment = window.VueGitComment;  // window
// const VueGitComment = require('VueGitComment'); // commonjs
```

```js
// regist 注册组件

Vue.use(VueGitComment); // global

new Vue({
    el: 'body',
    components: { VueGitComment } // local
});
```

```js
<template>
    <vue-git-comment :options="options" />
</template>

<script>
export default {
    data() {
        return {
            options: {
                client_id: 'client_id',
                client_secret: 'client_secret',
                owner: '仓库所有者',
                repo: '仓库名称',
                uuid: '唯一标识，用于区分不同文章'
            }
        };
    }
};
</script>
```

## Options

评论系统基于 `github api` ， 需要 [去申请](https://github.com/settings/applications/new) 一个 `OAuth application`。

| Name          |   Type   | Required | Description                                |
| :------------ | :------: | :------: | :----------------------------------------- |
| client_id     | `String` |  `true`  | 申请的 client_id                           |
| client_secret | `String` |  `true`  | 申请的 client_secret                       |
| owner         | `String` |  `true`  | issue 所在仓库的所有者                     |
| repo          | `String` |  `true`  | 仓库名称                                   |
| uuid          | `String` |  `true`  | 用于区分文章的唯一标识，每个评论间不能重复 |

## Similar Project

同类作品有： [gitment](https://github.com/imsun/gitment) 、 [gitalk](https://github.com/gitalk/gitalk)

## Why make this ?

    Q：已经有2个类似的了，为啥还要再弄个轮子呢？

最开始我用的是 gitment ，蛮好的，ui 也非常喜欢，我的这个项目在 ui 方面也是参考了 gitment，体积也不大，赞。  
但是慢慢找到如下缺点：

    1.  作者自己搭了个服务去转发获取 token，我生怕哪一天...

        这里我用的是 [cros-anywhere](https://cors-anywhere.herokuapp.com) 去转发，
        哪怕有一天 anywhere 也挂了，我既然明白这个问题也能迅速定位。

    2.  在移动端上稍微不太友好。
    3.  不能倒序。
    4.  作者好像没有精力去维护了。

gitalk 我也特地去了解了一哈，也是非常优秀的一个项目。但是，

    1.  体积蛮大，gzip 后 60k，这个用了 preact 没办法。
    2.  没有分页。
    3.  登陆后用的 `graphql` 去查询，这个能省好多流量！

        然后我就要说“但是”了 hh。 实际上测试，这个并不能加快速度。
        graphql 的速度跟 restful 接口的速度差不多，但是会有个 options 请求，也就是说请求时间会 `x2`。
        而 `restful` 有办法可以避免。  
        并不是说 `graphql` 不好，只是我需要分页，所以用这个并不是最优解。

综上所述，在学习了 2 个项目的部分代码之后，决定自己搞个。

    1.  通过一些算法实现倒序分页。
    2.  利用一些方式避免了 options 请求，加快速度。
    3.  体积不大，对于 vue 项目来说能省不少。
    4.  想要更稳定、成熟的方案，建议去用 gitment 和 gitalk 吧。

        毕竟这个项目刚做好，这么优秀的项目，就让我一个人用好了 0_o

## Enjoy it! >\_<#@!
