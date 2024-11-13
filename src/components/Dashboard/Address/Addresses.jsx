import ListAddress from "./ListAddress"
import NewAddresses from "./NewAddresses"

function Addresses() {
  return (
    <>
    <div className="flex flex-col w-full h-screen">
    <ListAddress />
    <NewAddresses />
    </div>
        
    </>
  )
}

export default Addresses