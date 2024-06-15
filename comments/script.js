const comments = [
    {
        text: "Happy New Year folks! What are your resolutions this year?",
        replies: [
            {
                text: "Same to you. I am planning to join a gym.",
                replies: [
                    {
                        text: "I tried last year and gave up.",
                        replies: [
                            {
                                text: "Good on you, nothing is more important than good health.",
                                replies: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        text: "Happy new year! I am learning to cook.",
        replies: [
            {
                text: "So, when are you inviting us to dinner?",
                replies: [
                    {
                        text: "That is a risk I am not willing to take.",
                        replies: []
                    }
                ]
            },
            {
                text: "I bet you are gonna cook tasty stuff.",
                replies: []
            }
        ]
    }
];



function renderComments(comments, container) {
    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        const commentId = `c-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        commentDiv.id = commentId;

        commentDiv.innerHTML = `
            <p>${comment.text}</p>
            <div class="actions">
                <button onclick="showReplyInput('${commentId}')">Add a reply</button>
            </div>
            <div class="replies"></div>
        `;

        container.appendChild(commentDiv);

        if (comment.replies.length > 0) {
            renderComments(comment.replies, commentDiv.querySelector('.replies'));
        }
    });
}

function showReplyInput(commentId) {
    let existingReplyInput = document.querySelector(`#reply-input-${commentId}`);
    if (existingReplyInput) {
        existingReplyInput.remove();
    }

    const replyInput = document.createElement('div');
    replyInput.classList.add('reply');
    replyInput.id = `reply-input-${commentId}`;

    replyInput.innerHTML = `
        <input type="text" placeholder="Add a reply...">
        <button onclick="addComment('${commentId}')">Submit</button>
    `;

    const comment = document.getElementById(commentId);
    const repliesContainer = comment.querySelector('.replies');
    repliesContainer.appendChild(replyInput);
}

function addComment(parentId = null) {
    const inputField = parentId ? document.querySelector(`#reply-input-${parentId} input`) : document.getElementById('comment-input');
    const commentText = inputField.value.trim();

    if (commentText === "") {
        alert("Comment cannot be empty");
        return;
    }

    const comment = {
        text: commentText,
        replies: []
    };

    if (parentId) {
        const parentComment = document.getElementById(parentId);
        const repliesContainer = parentComment.querySelector('.replies');
        renderComments([comment], repliesContainer);
        document.getElementById(`reply-input-${parentId}`).remove();
    } else {
        comments.push(comment);
        renderComments([comment], document.getElementById('comments'));
        inputField.value = "";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderComments(comments, document.getElementById('comments'));
});
