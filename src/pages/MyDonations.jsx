import BookCard from "../components/BookCard";

const MyDonations = () => (
  <div className="max-w-2xl mx-auto py-16 px-4">
    <h2 className="text-3xl font-bold mb-6 text-center">Check Your Donations</h2>
    <form className="space-y-4 text-center">
      <input type="text" placeholder="Enter Your Phone Number" className="w-full p-3 rounded border" />
      <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Search</button>
    </form>
    <div className="mt-8">
      <BookCard title="Math - Class 10" classLevel="10th" board="CBSE" image="https://via.placeholder.com/150" />
    </div>
  </div>
);

export default MyDonations;
