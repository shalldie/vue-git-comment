// import * as issue from './lib/issue';

const auth = {
    client_id: '3a657823527f57a63864',
    client_secret: '80714a6e5a35b36043a5dfbd15d43795e95aaa9b'
};


// issue.getFirstIssue('shalldie', 'gitment-store', 'gc-key')
//     .then(info => console.log(info));

// issue.getIssue('shalldie', 'gitment-store', 1).then(n => console.log(n));

// issue.getRateLimit().then(n => console.log(n));


// import github from './lib/github';

// github.login(auth.client_id);

import gitComment from './git-comment';

gitComment.config(auth);

if (!gitComment.state.ifLogin) {
    // gitComment.login();
}
else {
    gitComment.getUserInfo();
}

window.gitComment = gitComment;
console.log(gitComment);
