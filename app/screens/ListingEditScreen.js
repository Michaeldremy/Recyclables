import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms/index";
import ListingsApi from "../api/listings";
import Screen from "../components/Screen";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "floor-lamp" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "shoe-heel" },
  { label: "Camera", value: 3, backgroundColor: "orange", icon: "camera" },
  {
    label: "Gaming",
    value: 4,
    backgroundColor: "blue",
    icon: "gamepad-variant-outline",
  },
  { label: "Books", value: 5, backgroundColor: "lightgreen", icon: "book" },
  {
    label: "Office",
    value: 6,
    backgroundColor: "magenta",
    icon: "office-building",
  },
  { label: "Outdoors", value: 7, backgroundColor: "pink", icon: "campfire" },
  {
    label: "Boating",
    value: 8,
    backgroundColor: "dodgerblue",
    icon: "ship-wheel",
  },
  { label: "Sports", value: 9, backgroundColor: "yellow", icon: "football" },
];

function ListingEditScreen() {
  const location = useLocation();

  const [uploadVisible, SetUploadVisible] = useState(false);
  const [progress, SetProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    SetProgress(0)
    SetUploadVisible(true)
    const result = await ListingsApi.addListing(
      { ...listing, location },
      (progress) => SetProgress(progress)
    );

    if (!result.ok) {
      SetUploadVisible(false);
      return alert("Could not save the listing.");
    }
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen onDone={() => SetUploadVisible(false)} progress={progress} visible={uploadVisible} />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width="35%"
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
