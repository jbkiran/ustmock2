import { useState } from "react";

const AddToCartButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
  }
  return <button onClick={()=>handleClick()}>{isLoading ? "Adding..." : "Add to Cart"}</button>;
};

export default AddToCartButton;
