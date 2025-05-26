import reactionIcon from "../assets/images/icon-reaction.svg"
import memoryIcon from "../assets/images/icon-memory.svg";
import verbalizeIcon from "../assets/images/icon-verbal.svg";
import visualizeIcon from "../assets/images/icon-visual.svg";
import ListItem from "./ListItem"

const data = [
 {
  icon: reactionIcon,
  label: "Reaction",
  score: 80,
  bgColor: "bg-red-50",
  textColor: "text-red-700",
 },
 {
  icon: memoryIcon,
  label: "Memory",
  score: 92,
  bgColor: "bg-yellow-50",
  textColor: "text-yellow-700",
 },
 {
  icon: verbalizeIcon,
  label: "Verbal",
  score: 61,
  bgColor: "bg-green-50",
  textColor: "text-green-700",
 },
 {
  icon: visualizeIcon,
  label: "Visual",
  score: 73,
  bgColor: "bg-blue-50",
  textColor: "text-blue-700",
 }
]

function List() {
 return (
  <ul className="w-full flex flex-col gap-4 my-4">
   {data.map((item, index) => (
    
    <ListItem key={ index} {...item} />
   ))}
  </ul>
 )
}

export default List
