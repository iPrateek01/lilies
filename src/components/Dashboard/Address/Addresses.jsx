import { Helmet } from "react-helmet";
import ListAddress from "./ListAddress";
import NewAddresses from "./NewAddresses";

function Addresses() {
  return (
    <>
      <div className="flex flex-col w-full h-screen overflow-auto">
        <Helmet>
          <title>Lilies - Addresses</title>
        </Helmet>
        <ListAddress />
        <NewAddresses />
      </div>
    </>
  );
}

export default Addresses;
