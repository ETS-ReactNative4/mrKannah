export function navbarReducer(state, action) {
  switch (action.type) {
    case '@navigation/ToggleViewMode':
      return Object.assign({}, state, {mobileView: action.payload});
    default:
      return state ? state : {mobileView: window.innerWidth < 600}
  }
}
