import Component from 'flarum/common/Component';

export default class Up extends Component {
    oninit(vnode) {
        super.oninit(vnode);
    }

    view() {
        return (
            <div id="Up">
                <div class="elevator-button"><i class="fas fa-arrow-up"></i></div>
            </div>
        );
    }
}