export default function Dashboard() {
  return (
    <div className="p-6">
      
      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-sm text-blue-500 uppercase">
          Mentor Overview
        </p>

        <h2 className="text-2xl font-bold mt-2">
           No Active Subscription 
        </h2>

        <p className="text-gray-500 mt-2">
          You currently do not have an active plan. Choose a plan to start using the software.
        </p>
      </div>

    </div>
  );
}