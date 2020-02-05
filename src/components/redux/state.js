let rerenderEntireTree = () => {
  console.log("state chenged");
};

let state = {
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
};

window.state = state;

export const addNewPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCounte: 0
  };
  if (newPost.message != "") {
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
  }
};
export const upDateNewPostText = newText => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const addNewMessage = text => {
  let newMessage = {
    message: state.dialogsPage.newMessageText
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderEntireTree(state);
};

export const upDateNewMessageText = newText => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
};

export const subscribe = observer => {
  // pattern
  rerenderEntireTree = observer;
};

export default state;

let store = {
  _rerenderEntireTree() {
    console.log("state chenged");
  },

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

  getState() {
    return this._state;
  },

  subscribe(observer) {
    // pattern
    this._rerenderEntireTree = observer;
  },
  addNewPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCounte: 0
    };
  },
  upDateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    rerenderEntireTree(this._state);/////////////////
  },
  addNewMessage() {
    let newMessage = {
      message: this._state.dialogsPage.newMessageText
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    rerenderEntireTree(state);
  },

  upDateNewMessageText(newText) {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
  }
};

// export default store;
