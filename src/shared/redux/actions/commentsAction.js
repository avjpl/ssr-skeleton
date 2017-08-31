import request from 'axios';

export function fetchComments() {
  return {
    type: 'FETCH_COMMENTS',
    promise: request.get('https://jsonplaceholder.typicode.com/comments/1'),
  };
}