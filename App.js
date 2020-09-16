import React, { useState, useEffect } from "react";

import ImageInput from "./app/components/ImageInput";
import Screen from "./app/components/Screen";

export default function App() {
  const [imageUrI, setImageUri] = useState();

  return (
    <Screen>
      <ImageInput
        onChangeImage={(uri) => setImageUri(uri)}
        imageUri={imageUrI}
      />
    </Screen>
  );
}
