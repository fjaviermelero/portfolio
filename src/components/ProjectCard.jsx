import { Link } from "react-router-dom";

export default function ProjectCard({ title, image, link }) {
  return (
    <Link
      to={link}
      className="w-96 bg-gray-800 text-gray-100 rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl mx-auto"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">
          Haz click para ver más
        </p>
      </div>
    </Link>
  );
}
