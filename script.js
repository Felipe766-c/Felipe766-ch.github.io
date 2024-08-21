let likeCount = localStorage.getItem('likeCount') ? parseInt(localStorage.getItem('likeCount')) : 0;
let dislikeCount = localStorage.getItem('dislikeCount') ? parseInt(localStorage.getItem('dislikeCount')) : 0;

document.getElementById('likeCount').innerText = likeCount + ' Likes';
document.getElementById('dislikeCount').innerText = dislikeCount + ' Dislikes';

document.getElementById('likeButton').addEventListener('click', function() {
    likeCount++;
    localStorage.setItem('likeCount', likeCount);
    document.getElementById('likeCount').innerText = likeCount + ' Likes';
});

document.getElementById('dislikeButton').addEventListener('click', function() {
    dislikeCount++;
    localStorage.setItem('dislikeCount', dislikeCount);
    document.getElementById('dislikeCount').innerText = dislikeCount + ' Dislikes';
});