const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").actions;
const iceCreamReducer = require("./features/icecream/iceCreamSlice").actions;

console.log("initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

store.dispatch(iceCreamReducer.ordered());
store.dispatch(iceCreamReducer.ordered());
store.dispatch(iceCreamReducer.ordered());
store.dispatch(iceCreamReducer.restocked(15));

unsubscribe();
