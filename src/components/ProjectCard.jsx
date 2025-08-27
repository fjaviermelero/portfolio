import { Link } from "react-router-dom";

export default function ProjectCard({ title, image, link }) {
  return (
    <Link to={link} className="w-72 bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-full h-44 object-cover"/>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">Haz click para ver más</p>
      </div>
    </Link>
  );
}
