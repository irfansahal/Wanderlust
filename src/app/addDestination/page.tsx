import AddingForm from "@/components/addingForm";

const AddDestination = () => {
  
  return (
    <div className="min-h-screen bg-white p-6 text-black">
       <div className="mx-auto w-full max-w-xl">
  <h1 className="mb-6 font-['Lato',sans-serif] text-4xl font-light tracking-tight text-black sm:text-5xl">
    Add New Travel Package
  </h1>
      <AddingForm/>
  </div>
    </div>
  );
};

export default AddDestination;