// let rerenderEntireTree = () => {
//   console.log("state chenged");
// };

// let state = {
//   profilePage: {
//     posts: [
//       { id: 1, message: "Hello!", likesCounte: 15 },
//       { id: 2, message: "how are you!", likesCounte: 20 },
//       { id: 3, message: "Very vell!", likesCounte: 18 }
//     ],
//     newPostText: "it-lesson"
//   },

//   dialogsPage: {
//     dialogs: [
//       { id: 1, name: "Dimych" },
//       { id: 2, name: "Andrey" },
//       { id: 3, name: "Sveta" },
//       { id: 4, name: "Sasha" },
//       { id: 5, name: "Victor" },
//       { id: 6, name: "Valera" }
//     ],
//     messages: [
//       { message: "Hi!" },
//       { message: "How are your it-kamasutra?" },
//       { message: "Yo!!" }
//     ]
//   }
// };

// window.state = state;

// export const addNewPost = () => {
//   let newPost = {
//     id: 5,
//     message: state.profilePage.newPostText,
//     likesCounte: 0
//   };
//   if (newPost.message != "") {
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = "";
//     rerenderEntireTree();
//   }
// };

// export const upDateNewPostText = newText => {
//   state.profilePage.newPostText = newText;
//   rerenderEntireTree();
// };

// export const subscribe = observer => {
//   // pattern
//   rerenderEntireTree = observer;
// };

// export default state;



let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hello!", likesCounte: 15 },
        { id: 2, message: "how are you!", likesCounte: 20 },
        { id: 3, message: "Very vell!", likesCounte: 18 }
      ],
      newPostText: "it-lesson"
    },
  
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Victor" },
        { id: 6, name: "Valera" }
      ],
      messages: [
        { message: "Hi!" },
        { message: "How are your it-kamasutra?" },
        { message: "Yo!!" }
      ]
    }
  },
  getState () {
    return this._state;
  },
  _callSubscriber () {
    console.log("state chenged");
  },

  subscribe (observer) {
    // pattern
    this._callSubscriber = observer;
  },

  dispath (action) {
    if (action.type === 'ADD-NEW-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCounte: 0
      };
      if (newPost.message != "") {
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber();
      } 
    }
      else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber();
      }
  
}



  // addNewPost () {
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likesCounte: 0
  //   };
  //   if (newPost.message != "") {
  //     this._state.profilePage.posts.push(newPost);
  //     this._state.profilePage.newPostText = "";
  //     this._callSubscriber();
  //   }
  // },

  // upDateNewPostText (newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber();
  // },


  
}

export default store;
window.store = store;








