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
      ],
      newMessageText: "Yes!"
    }
  },

  _rerenderEntireTree() {
    console.log("state chenged");
  },

  subscribe(observer) {
    // pattern
    this._rerenderEntireTree = observer;
  },

  getState() {
    return this._state;
  },

  dispatch(action) {
    if ((action.type = "ADD-NEW-POST")) {
        let newPost = {
          id: 5,
          message: this._state.profilePage.newPostText,
          likesCounte: 0
        };
        if (newPost.message != "") {
          this._state.profilePage.posts.push(newPost);
          // this._state.profilePage.newPostText = "";
          this._rerenderEntireTree(this._state);
        }
      }
    else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._rerenderEntireTree(this._state);
    } 
    else if (action.type === "ADD-NEW-MESSAGE") {
      let newMessage = {
        message: this._state.dialogsPage.newMessageText
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._rerenderEntireTree(this._state);
    } 
    else if (action.type === "UPDATE-NEW-MESSAGE--TEXT") {
      this._state.dialogsPage.newMessageText = action.newText;
      this._rerenderEntireTree(this._state);
    }
  }
};

export default store;
window.store = store;

// addNewPost() {
//   let newPost = {
//     id: 5,
//     message: this._state.profilePage.newPostText,
//     likesCounte: 0
//   };
//   if (newPost.message != "") {
//     this._state.profilePage.posts.push(newPost);
//     this._state.profilePage.newPostText = "";
//     this._rerenderEntireTree(this._state);
//   }
// },
// upDateNewPostText(newText) {
//   this._state.profilePage.newPostText = newText;
//   this._rerenderEntireTree(this._state);
// },
// addNewMessage(text) {
//   let newMessage = {
//     message: this._state.dialogsPage.newMessageText
//   };
//   this._state.dialogsPage.messages.push(newMessage);
//   this._state.dialogsPage.newMessageText = "";
//   this._rerenderEntireTree(this._state);
// },

// upDateNewMessageText(newText) {
//   this._state.dialogsPage.newMessageText = newText;
//   this._rerenderEntireTree(this._state);
// },
