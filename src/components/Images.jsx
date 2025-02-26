import { useState, useEffect } from "react";
import menu from "../../data/menuItems.js";

function Images() {
  const [currentDonut, setCurrentDonut] = useState(menu[0]?.name);
  const [currentImage, setCurrentImage] = useState(menu[0]?.image);

  useEffect(() => {
    const currentImage = menu[currentDonut]?.image;
    setCurrentImage(currentImage);
    // onDonutChange(currentDonut, currentImage);
  }, [currentImage]);

  return (
    <div>
      <div className="image">
        <h2
          style={{
            fontSize: "500%",
            textShadow: "1px 1px white",
            marginTop: "10px",
            marginBottom: "250px",
          }}
        >
          {menu[currentDonut]?.name}
        </h2>
      </div>
    </div>
  );
}

export default Images;
