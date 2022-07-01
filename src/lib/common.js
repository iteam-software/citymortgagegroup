export function isLocalTo(to) {
    if (typeof to !== "string") {
      throw new Error(`"to" is not a string.`);
    }
  
    return (
      to.startsWith("#") ||
      to.startsWith("mailto") ||
      to.startsWith("/")
    );
  }