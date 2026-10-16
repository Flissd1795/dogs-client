export function getFriendlyErrorMessage(err) {
    if (!err.status) {
      return "We couldn't connect to the server. Please check your connection and try again.";
    }
  
    switch (err.status) {
      case 400:
        return err.message || "Please check the information you entered.";
      case 401:
        return "The email or password you entered is incorrect. Please try again.";
      case 403:
        return "You don't have permission to do that.";
      case 404:
        return "We couldn't find what you were looking for.";
      case 409:
        return "An account with this email already exists. Try logging in instead.";
      default:
        if (err.status >= 500) {
          return "Something went wrong on our side. Please try again in a moment.";
        }
  
        return "Something went wrong. Please try again.";
    }
  }