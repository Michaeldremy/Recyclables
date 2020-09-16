import React, { useState, useEffect } from "react";

import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import Screen from "./app/components/Screen";

export default function App() {
  const [imageUris, setImageUris] = useState([]);
  
  const handleAdd = uri => {
    setImageUris([...imageUris, uri])
  }

  const handleRemove = uri => {
    setImageUris(imageUris.filter(imageUri => imageUri !== uri))
  }

  return (
    <Screen>
      <ImageInputList 
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}/>
    </Screen>
  );
}
