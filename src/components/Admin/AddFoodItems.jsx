import { useState } from "react";
import {
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Textarea,
} from "@headlessui/react";
import clsx from "clsx";
import { Button } from "@headlessui/react";
import { db } from "../../firebase/firebase";

import { addDoc, collection } from "firebase/firestore";

function AddFoodItems() {
  const [foodItemInput, setFoodItemInput] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  // const [allergens, setAllergens] = useState([]);
  const [review, setReview] = useState("");
  const [servingSize, setServingSize] = useState("");
  // const [tags, setTags] = useState([]);
  const [available, setAvailable] = useState(false);
  const [allergensInput, setAllergensInput] = useState(""); // Raw input for allergens
  const [tagsInput, setTagsInput] = useState(""); // Raw input for tags
  const [allergens, setAllergens] = useState([]); // Array of allergens words
  const [tags, setTags] = useState([]); // Array of tags words

  const handleAddAnItem = async (e) => {
    e.preventDefault();

    setFoodItemInput(true);
  };

  const saveNewItem = async (e) => {
    e.preventDefault();

    const newFoodItem = {
      name,
      description,
      price: parseFloat(price), // Convert price to a number if needed
      category,
      image,
      allergens,
      review: parseFloat(review), // Convert review to a number if needed
      servingSize,
      tags,
      available,
    };

    try {
      // Add the object to Firestore with a unique ID
      await addDoc(collection(db, "foodItems"), newFoodItem);
      alert("Food item added successfully!");

      // Optionally reset form fields after successful submission
      setName("");
      setDescription("");
      setPrice("");
      setCategory("");
      setImage("");
      setAllergens([]);
      setReview("");
      setServingSize("");
      setTags([]);
      setAvailable(false);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to add food item.");
    }

    setFoodItemInput(false);
  };

  const handleAllergensInputChange = (e) => {
    setAllergensInput(e.target.value); // Update only the allergens input field
  };

  const handleTagsInputChange = (e) => {
    setTagsInput(e.target.value); // Update only the tags input field
  };

  const handleAllergensSubmit = () => {
    // Process allergens input when the user is done typing
    const array = allergensInput
      .split(" ")
      .map((item) => item.trim())
      .filter((item) => item !== "");
    setAllergens(array); // Update allergens array
    setAllergensInput([]); // Clear allergens input field after processing
  };

  const handleTagsSubmit = () => {
    // Process tags input when the user is done typing
    const array = tagsInput
      .split(" ")
      .map((item) => item.trim())
      .filter((item) => item !== "");
    setTags(array); // Update tags array
    setTagsInput([]); // Clear tags input field after processing
  };

  return (
    <>
      <div className="">
        <div className="flex flex-row items-center justify-center w-full">
          <button
            onClick={handleAddAnItem}
            className="btn text-black bg-customYellow shadow-md p-2 text-lg font-semibold rounded-lg border-none hover:bg-yellow-500"
          >
            Add an Item
          </button>
        </div>
        <div className="flex flex-row justify-center items-center w-full my-2">
          {foodItemInput && (
            <div className="w-full max-w-lg p-4">
              <Fieldset className="space-y-6 rounded-xl bg-black/5 p-6 sm:p-10">
                <Legend className="text-base font-semibold text-black">
                  Enter New Food Item Details
                </Legend>

                {/* Name */}
                <Field>
                  <Label className="text-sm font-medium text-black">Name</Label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Food item name"
                    className={clsx(
                      "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm text-black",
                      "focus:outline-none"
                    )}
                  />
                </Field>

                {/* Description */}
                <Field>
                  <Label className="text-sm font-medium text-black">
                    Description
                  </Label>
                  <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description of the food item"
                    className={clsx(
                      "mt-3 block w-full resize-none rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm text-black",
                      "focus:outline-none"
                    )}
                    rows={3}
                    maxLength={100}
                  />
                </Field>

                {/* Price */}
                <Field>
                  <Label className="text-sm font-medium text-black">
                    Price
                  </Label>
                  <Input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter price in $"
                    className={clsx(
                      "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm text-black",
                      "focus:outline-none"
                    )}
                  />
                </Field>

                {/* Category */}
                <Field>
                  <Label className="text-sm font-medium text-black">
                    Category
                  </Label>
                  <Input
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="e.g., Main Course, Appetizer"
                    className={clsx(
                      "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm text-black",
                      "focus:outline-none"
                    )}
                  />
                </Field>

                {/* Image URL */}
                <Field>
                  <Label className="text-sm font-medium text-black">
                    Image URL
                  </Label>
                  <Input
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Link to food item image"
                    className={clsx(
                      "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm text-black",
                      "focus:outline-none"
                    )}
                  />
                </Field>

                <div className="relative">
                  {/* Allergens Field */}
                  <label className="text-sm font-medium text-black">
                    Allergens
                  </label>
                  <div className="relative mt-3">
                    <input
                      type="text"
                      value={allergensInput}
                      onChange={handleAllergensInputChange}
                      placeholder="e.g., dairy, nuts, gluten"
                      className={clsx(
                        "block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm text-black",
                        "focus:outline-none"
                      )}
                    />
                    <button
                      type="button"
                      onClick={handleAllergensSubmit}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-md px-2 py-1 text-xs hover:bg-blue-600"
                    >
                      Add
                    </button>
                  </div>
                </div>

                {/* Review */}
                <Field>
                  <Label className="text-sm font-medium text-black">
                    Review (Rating)
                  </Label>
                  <Input
                    type="number"
                    step="0.1"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Enter review score (e.g., 4.8)"
                    className={clsx(
                      "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm text-black",
                      "focus:outline-none"
                    )}
                  />
                </Field>

                {/* Serving Size */}
                <Field>
                  <Label className="text-sm font-medium text-black">
                    Serving Size
                  </Label>
                  <Input
                    value={servingSize}
                    onChange={(e) => setServingSize(e.target.value)}
                    placeholder="e.g., 350g"
                    className={clsx(
                      "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm text-black",
                      "focus:outline-none"
                    )}
                  />
                </Field>

                <div className="relative">
                  {/* Tags Field */}
                  <label className="text-sm font-medium text-black">Tags</label>
                  <div className="relative mt-3">
                    <input
                      type="text"
                      value={tagsInput}
                      onChange={handleTagsInputChange}
                      placeholder="e.g., non-vegetarian, spicy"
                      className={clsx(
                        "block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm text-black",
                        "focus:outline-none"
                      )}
                    />
                    <button
                      type="button"
                      onClick={handleTagsSubmit}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-md px-2 py-1 text-xs hover:bg-blue-600"
                    >
                      Add
                    </button>
                  </div>
                </div>

                {/* Available */}
                <Field>
                  <Label className="text-sm font-medium text-black">
                    Available
                  </Label>
                  <input
                    type="checkbox"
                    checked={available}
                    onChange={(e) => setAvailable(e.target.checked)}
                    className="ml-2"
                  />
                </Field>

                {/* Save Button */}
                <Field>
                  <Button
                    onClick={saveNewItem}
                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none"
                  >
                    Save Item
                  </Button>
                </Field>
              </Fieldset>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AddFoodItems;
