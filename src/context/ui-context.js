import { createContext, useReducer } from "react";

const darkModeValue = localStorage.getItem('darkMode');

export const uiContext = createContext();

const initialState = {
   showDrawer: false,
   showSnackbar: false,
   snackbarMessage: '',
   loading: false,
   darkMode: darkModeValue || false
}

const uiReducer = (state, action) => {
   switch (action.type) {
      case 'TOGGLE_DRAWER':
         return {
            ...state,
            showDrawer: !state.showDrawer
         }
      case 'SHOW_SNACKBAR':
         return {
            ...state,
            showSnackbar: action.value.value,
            snackbarMessage: action.value.text
         }
      case 'LOADING':
         return {
            ...state,
            loading: action.value
         }
      case 'DARKMODE':
         return {
            ...state,
            darkMode: !state.darkMode
         }
      default:
         return {
            ...state
         }
   }
}

export const UIContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(uiReducer, initialState);

   const toggleDrawer = () => {
      dispatch({ type: 'TOGGLE_DRAWER' });
   };

   const setShowSnackbar = (value) => {
      dispatch({ type: 'SHOW_SNACKBAR', value: value });
   };

   const setLoading = (value) => {
      dispatch({ type: 'LOADING', value: value });
   };

   const toggleDarkmode = () => {
      dispatch({ type: 'DARKMODE' });
   };

   const createContext = {
      showDrawer: state.showDrawer,
      showSnackbar: state.showSnackbar,
      snackbarMessage: state.snackbarMessage,
      loading: state.loading,
      darkMode: state.darkMode,
      toggleDrawer: toggleDrawer,
      setShowSnackbar: setShowSnackbar,
      setLoading: setLoading,
      toggleDarkmode: toggleDarkmode
   }

   return (
      <uiContext.Provider value={createContext}>
         {children}
      </uiContext.Provider>
   );
}