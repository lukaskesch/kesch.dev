export default function GridPage() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 grid-flow-dense auto-rows-[80px] m-4">
      <div className="bg-red-500"/>
      <div className="bg-blue-500 col-span-2"/>
      <div className="bg-green-500 row-span-2"/>
      <div className="bg-yellow-500"/>
      <div className="bg-purple-500 col-span-2 row-span-2"/>
      <div className="bg-orange-500"/>
      <div className="bg-pink-500"/>
      <div className="bg-gray-500"/>
    </div>
  )
}

