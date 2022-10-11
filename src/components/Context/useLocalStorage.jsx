import React from "react";

//We can create a Custom React Hook for managing our localStorage code.
//Custom Hooks must be named with "use" prefix.
//Custom hooks must be invoked into either components or other custom hooks;
//no invoke them into normal functions 
function useLocalStorage(itemName, initialValue) {

    //Let´s simulate the performance when requesting an API:
    //Creat states for "loading" and "error" status:
    const[error, setError] = React.useState(false);
    const[loading, setLoading] = React.useState(true);
    //State declaration to take advantage of useLocalStorage Hook:
    const[item, setItem] = React.useState(initialValue);
  
    //Implementing useEffect() Hook:
    React.useEffect(() => {
      //Simulating load delay:
      setTimeout(() => {
        //Managing errors through try-catch:
        try {
          //Handle stored Todo´s:
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
              
          if(!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          };
          setItem(parsedItem);
        } catch(error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }, 2000);
    });
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch {
        setError(error);
      }
    };
  
    //We can return objetcs instead of arrays when have much return data:
    return {
      item,
      saveItem,
      loading,
      error
    };
  
  }

  export { useLocalStorage };