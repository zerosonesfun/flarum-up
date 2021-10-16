import { extend } from 'flarum/common/extend';
import ForumApplication from 'flarum/forum/ForumApplication';

import Up from './components/Up';

app.initializers.add('zerosonesfun/flarum-up', () => {
    extend(ForumApplication.prototype, 'mount', () => {
        const footer = document.createElement('div');

        m.mount(document.body.appendChild(footer), Up);
    });
});