
export const saveArticle = (article) => {
    localStorage.setItem("savedArticle", article);
  };
  
  // Function to retrieve the saved article from localStorage
  export const getSavedArticle = () => {
    return localStorage.getItem("savedArticle") || "default"; // fallback to 'default' if not found
  };
  
  // Function to remove the saved article
  export const removeSavedArticle = () => {
    localStorage.removeItem("savedArticle");
  };