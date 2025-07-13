const Donate = () => (
  <div className="max-w-xl mx-auto py-16 px-4">
    <h2 className="text-3xl font-bold mb-6 text-center">Donate a Book</h2>
    <form className="space-y-4">
      <input type="text" placeholder="Your Name" className="w-full p-3 rounded border" />
      <input type="text" placeholder="Phone Number" className="w-full p-3 rounded border" />
      <input type="text" placeholder="Book Title" className="w-full p-3 rounded border" />
      <select className="w-full p-3 rounded border">
        <option>Select Class Level</option>
        <option>Nursery</option>
        <option>1st to 5th</option>
        <option>6th to 8th</option>
        <option>9th to 12th</option>
        <option>College</option>
      </select>
      <input type="file" className="w-full p-3 rounded border" />
      <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Submit</button>
    </form>
  </div>
);

export default Donate;
