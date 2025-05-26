
function ListItem({icon, label, score, textColor, bgColor}) {
 return (
   <li className={`flex justify-between items-center p-4 gap-2 rounded-lg ${bgColor}`}>
     <div className="flex items-center gap-2">
       <img src={icon} alt={`${label} icon`} className="w-5 h-5" />
       <span className={`font-medium ${textColor}`}>{label}</span>
     </div>
     <p className="text-gray-700 font-bold">
       {score} <span className="text-gray-400 font-normal">/ 100</span>
     </p>
   </li>
 );
}

export default ListItem
