import { useState } from "react";
import {
  Description,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Select,
  Textarea,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { Button } from "@headlessui/react";

function Addresses() {
  const [addressInput, setAddressInput] = useState(true);
  const [streetAddressLine1, setstreetAddressLine1] = useState('')
  const [streetAddressLine2, setstreetAddressLine2] = useState('')
  const [city, setCity] = useState('')
  const [county, setCounty] = useState('')
  const [country, setCountry] = useState('')
  const [pinCode, setPinCode] = useState('')
  const [addlInfo, setAddlInfo] = useState('')

  

  const handleAddAnAddress = (e) => {
    e.preventDefault();
    setAddressInput(true);
  };

  const saveNewAddress = async (e) => {
    e.preventDefault()

    setAddressInput(false)
  }

  return (
    <>
      <div className="w-full h-screen overflow-auto">
        <div className="flex flex-row items-center justify-center w-full">
          <button
            onClick={handleAddAnAddress}
            className="btn text-black bg-customYellow shadow-md p-2 text-lg font-semibold rounded-lg border-none hover:bg-yellow-500"
          >
            Add an address
          </button>
        </div>
        <div className="flex flex-row justify-center items-center w-full my-2">
          {addressInput && (
            <div className=" w-full max-w-lg p-4">
              <Fieldset className="space-y-6 rounded-xl bg-black/5 p-6 sm:p-10">
                <Legend className="text-base/7 font-semibold text-black">
                  Enter your new address
                </Legend>
                <Field>
                  <Label className="text-sm/6 font-medium text-black">
                    Street address line 1
                  </Label>
                  <Input
                    value={streetAddressLine1}
                    onChange={(e) => {
                      setstreetAddressLine1(e.target.value)
                    }}
                    placeholder="Enter your street, apartment, landmarks, etc"
                    className={clsx(
                      "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
                    )}
                  />
                </Field>
                <Field>
                  <Label className="text-sm/6 font-medium text-black">
                    Street address line 2
                  </Label>
                  <Input
                  value={streetAddressLine2}
                  onChange={(e) => {
                    setstreetAddressLine2(e.target.value)
                  }}
                  placeholder="Enter your street, apartment, landmarks, etc"
                    className={clsx(
                      "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
                    )}
                  />
                </Field>
                <Field>
                  <Label className="text-sm/6 font-medium text-black">
                    City/District
                  </Label>
                  <Input
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value)
                  }}
                  placeholder="Mumbai, Tokyo, New York, etc"
                    className={clsx(
                      "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
                    )}
                  />
                </Field>
                <Field>
                  <Label className="text-sm/6 font-medium text-black">
                    County/State
                  </Label>
                  <Input
                  value={county}
                  onChange={(e) => {
                    setCounty(e.target.value)
                  }}
                  placeholder="Enter your county, state, or any other."
                    className={clsx(
                      "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
                    )}
                  />
                </Field>
                <Field>
                  <Label className="text-sm/6 font-medium text-black">
                    Country
                  </Label>
                  <div className="relative">
                    <Select
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value)
                    }}
                      className={clsx(
                        "mt-3 block w-full appearance-none rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black",
                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25",
                        // Make the text of each option black on Windows
                        "*:text-black"
                      )}
                    >
                      <option>Canada</option>
                      <option>Mexico</option>
                      <option>United States</option>
                      <option>Germany</option>
                      <option>France</option>
                      <option>Switzerland</option>
                      <option>Spain</option>
                      <option>United Kingdom</option>
                      <option>Denmark</option>
                      <option>Singapore</option>
                      <option>Malaysia</option>
                      <option>Indonesia</option>
                      <option>Japan</option>
                      <option>India</option>
                    </Select>
                    <ChevronDownIcon
                      className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-black/60"
                      aria-hidden="true"
                    />
                  </div>
                </Field>
                <Field>
                  <Label className="text-sm/6 font-medium text-black">
                    Pin code/Postal code
                  </Label>
                  <Input
                  value={pinCode}
                  onChange={(e) => {
                    setPinCode(e.target.value)
                  }}
                  placeholder="Your Pin code or Postal code goes here!"
                    maxLength={6}
                    className={clsx(
                      "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
                    )}
                  />
                </Field>
                <Field>
                  <Label className="text-sm/6 font-medium text-black">
                    Additional information
                  </Label>
                  <Description className="text-sm/6 text-black/50">
                    You can write instructions to reach your location here.
                  </Description>
                  <Textarea
                  value={addlInfo}
                  onChange={(e) => {
                    setAddlInfo(e.target.value)
                  }}
                  placeholder="You can give any additional information here."
                    className={clsx(
                      "mt-3 block w-full resize-none rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
                    )}
                    rows={3}
                  />
                </Field>
                <Field>
                  <Button onClick={saveNewAddress} className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                    Save Address
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

export default Addresses;
