import reducerPost, { addPostAC, deletePost } from "./profile_reducer";

let state = {
   postsData: [
      { id: 1, message: "Hi, how are you?", likesCounts: 15 },
      { id: 2, message: "It's my first post.", likesCounts: 10 },
      { id: 3, message: "I love React.", likesCounts: 5 },
      { id: 4, message: "And hate motor.", likesCounts: 1 }
   ]
}

test('renders learn react link', () => {

   // 1 test data
   let action = addPostAC("Vadim pes")

   // 2 action

   let newState = reducerPost(state, action)

   // 3 expectation 
   expect(newState.postsData.length).toBe(5);

})

test('new post should be correct', () => {

   // 1 test data
   let action = addPostAC("Vadim pes")

   // 2 action

   let newState = reducerPost(state, action)

   // 3 expectation 
   expect(newState.postsData[4].message).toBe("Vadim pes");
})

test('after deliting length  of data should be decrement', () => {

   // 1 test data
   let action = deletePost(1)

   // 2 action

   let newState = reducerPost(state, action)

   // 3 expectation 
   expect(newState.postsData.length).toBe(3);
})

test('after deliting length shouldn`t be decrement if id is incorrect', () => {

   // 1 test data
   let action = deletePost(1000)

   // 2 action

   let newState = reducerPost(state, action)

   // 3 expectation 
   expect(newState.postsData.length).toBe(4);
})