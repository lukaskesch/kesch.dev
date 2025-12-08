export default function FlexPage() { 
  return (
    <div className="flex flex-row gap-4 justify-center content-end flex-wrap">
      <div className="w-10 h-10 bg-red-500"/>
      <div className="w-20 h-10 bg-blue-500"/>
      <div className="w-10 h-20 bg-green-500"/>
      <div className="w-20 h-20 bg-yellow-500"/>
      <div className="w-10 h-10 bg-purple-500"/>
      <div className="w-20 h-10 bg-orange-500"/>
      <div className="w-10 h-20 bg-pink-500"/>
      <div className="w-20 h-20 bg-gray-500"/>
    </div>
  );
}