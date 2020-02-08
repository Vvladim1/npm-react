const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";



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
        { id: 1, message: "Hi!" },
        { id: 2, message: "How are your it-kamasutra?" },
        { id: 3, message: "Yo!!" }
      ],
      newMessageBody: '',
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state chenged");
  },

  subscribe(observer) {
    // pattern
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_NEW_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCounte: 0
      };
      if (newPost.message != "") {
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
      }
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({id: 4, message: body});
      this._callSubscriber(this._state);
    }
  }
};

export const addPostActionCreator = () => ({ type: ADD_NEW_POST });

export const updateNewPostTextActionCreator = text =>({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextCreator = body =>({
  type: UPDATE_NEW_MESSAGE_TEXT,
  body: body
});


export default store;
window.store = store;
