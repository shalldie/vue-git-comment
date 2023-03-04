# vue-git-comment

[![npm][npm_image]][npm_url]
[![gzip][gzip_image]][gzip_url]
[![Github Actions][actions_image]][actions_url]
[![license][license_image]][npm_url]

这是一个基于 `github issues` 和 `vue` 的纯前端评论组件，不需要服务端。

## Live Demo

Have a look at [Demo](https://shalldie.github.io/demos/vue-git-comment/)

## Installation

link:

```html
<script src="lib/vue.js"></script>

<script src="dist/vue-git-comment.umd.min.js"></script>
```

npm:

```js
npm install vue-git-comment --save
```

## Usage

```js
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
                clientID: 'clientID',
                clientSecret: 'clientSecret',
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

| Name         |     Type      | Required |     Default      | Description                                   |
| :----------- | :-----------: | :------: | :--------------: | :-------------------------------------------- |
| clientID     |   `string`    |  `true`  |                  | 申请的 client_id                              |
| clientSecret |   `string`    |  `true`  |                  | 申请的 client_secret                          |
| owner        |   `string`    |  `true`  |                  | issue 所在仓库的所有者                        |
| repo         |   `string`    |  `true`  |                  | 仓库名称                                      |
| uuid         |   `string`    |  `true`  |                  | 用于区分文章的唯一标识，每个评论间不能重复    |
| title        |   `string`    | `false`  | `document.title` | issue 使用的标题，选填。 默认使用当前页面标题 |
| language     | `en \| zh-CN` | `false`  |       `en`       | 国际化语言，选填。 默认使用 `en`              |
| proxy        |   `string`    | `false`  |     `见下方`     | 获取 accessToken 的代理                       |

默认代理使用 `https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token`

## Similar Project

同类作品有： [gitment](https://github.com/imsun/gitment) 、 [gitalk](https://github.com/gitalk/gitalk)

## Why make this ?

    Q：已经有2个类似的了，为啥还要再弄个轮子呢？

最开始我用的是 gitment ，蛮好的，ui 也非常喜欢，我的这个项目在 ui 方面也是参考了 gitment，体积也不大，赞。
但是慢慢找到如下缺点：

    1.  作者自己搭了个服务去转发获取 token，我生怕哪一天...

        这里我用的是 [cros-anywhere](https://cors-anywhere.herokuapp.com) 去转发，
        哪怕有一天 anywhere 也挂了，也可以通过自定义 proxy 来调整。

    2.  在移动端上稍微不太友好。
    3.  不能倒序。
    4.  不少请求都存在缓存，数据更新不及时。
    5.  作者很久没有维护了。

gitalk 我也特地去了解了一哈，也是非常优秀的一个项目。但是，

    1.  体积蛮大，gzip 后 60k，这个用了 preact 没办法。
    2.  没有分页。
    3.  登陆后用的 `graphql` 去查询，这个能省好多流量。但是实际速度并没有提升。

综上所述，在学习了 2 个项目的部分代码之后，决定自己搞个。

    1.  通过一些算法实现倒序分页。
    2.  利用一些方式避免了 options 请求，加快速度。
    3.  体积不大，对于 vue 项目来说能省不少。
    4.  想要更稳定、成熟的方案，建议去用 gitment 或 gitalk。

## Enjoy it! >\_<#@!

[npm_image]: https://img.shields.io/npm/v/vue-git-comment.svg?logo=npm&style=flat-square
[npm_url]: https://www.npmjs.com/package/vue-git-comment
[actions_image]: https://img.shields.io/github/workflow/status/shalldie/vue-git-comment/ci?label=build&logo=github&style=flat-square
[actions_url]: https://github.com/shalldie/vue-git-comment/actions
[gzip_image]: https://img.badgesize.io/https://cdn.jsdelivr.net/npm/vue-git-comment@0.0.16/dist/vue-git-comment.umd.min.js?compression=gzip&style=flat-square
[gzip_url]: https://cdn.jsdelivr.net/npm/vue-git-comment@0.0.16/dist/vue-git-comment.umd.min.js
[license_image]: https://img.shields.io/npm/l/vue-git-comment.svg?style=flat-square
