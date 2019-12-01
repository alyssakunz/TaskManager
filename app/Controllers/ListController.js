import ListService from "../Services/ListService.js";
import store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  console.log("drawn");
  let lists = store.State.lists;
  let template = ""
  lists.forEach(list => {
    template += list.Template});
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems

  addList(){
    let rawList = {
      title: "title"
    }
    ListService.addList(rawList);
_drawLists();
  }

  removeList(){
    ListService.removeList();
    _drawLists();
  }

  addListItem(){
    ListService.addListItem();
_drawLists();
  }

  removeListItem(){
    ListService.removeListItem();
    _drawLists();
  }
}
