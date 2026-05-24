export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-beige-50">
      <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center animate-pulse">
        <span className="text-white font-bold font-poppins text-xl">N</span>
      </div>
      <p className="font-poppins font-semibold text-emerald-700 animate-pulse">
        Loading...
      </p>
    </div>
  );
}
