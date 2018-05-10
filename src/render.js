import miniTpl from 'mini-tpl';
import state from './state';
import icons from './lib/icons';

const tplContainer = require('./tpl/container.html');
const tplHeader = require('./tpl/header.html');

class Render {
    /**
     * 渲染容器
     *
     * @memberof Render
     */
    renderContainer() {
        state.el.innerHTML = tplContainer;
        this.renderHeader();
    }

    renderHeader() {
        const content = miniTpl(tplHeader, Object.assign({}, state, icons));
        state.el.getElementsByClassName('git-comment-header-wrap')[0].innerHTML = content;
    }
}

export default new Render();
