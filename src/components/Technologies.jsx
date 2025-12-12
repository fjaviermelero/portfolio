// src/components/Tecnologias.jsx
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaHtml5,
  FaIndustry,
  FaCogs,
  FaProjectDiagram,
  FaServer,
  FaTable,
  FaLeanpub,
  FaChartPie,
  FaEye,
} from "react-icons/fa";
import {
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiTableau,
  SiJavascript,
  SiDocker,
  SiGit,
  SiExpress,
  SiSelenium,
  SiLinux,
  SiMongodb,
  SiApacheairflow,
  SiApachespark,
  SiGooglecloud,
  SiFastapi,
} from "react-icons/si";

export default function Technologies() {
  const categorias = {
    "Data & Visualization": [
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      { name: "Pandas", icon: <SiPandas className="text-white" /> },
      { name: "NumPy", icon: <SiNumpy className="text-blue-400" /> },
      { name: "Scikit Learn", icon: <SiScikitlearn className="text-orange-400" /> },
      { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
      { name: "PySpark", icon: <SiApachespark className="text-orange-500" /> },
      { name: "SQL", icon: <FaDatabase className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "Airflow", icon: <SiApacheairflow className="text-red-400" /> },
      { name: "Tableau", icon: <SiTableau className="text-blue-500" /> },
      { name: "Power BI", icon: <FaChartPie className="text-yellow-500" /> },
      { name: "Looker", icon: <FaEye className="text-pink-400" /> },
    ],
    "Industrial Engineering": [
      { name: "IIOT and Sensors", icon: <FaIndustry className="text-orange-400" /> },
      { name: "PLC / Automation", icon: <FaCogs className="text-green-400" /> },
      { name: "Lean Manufacturing", icon: <FaLeanpub className="text-purple-400" /> },
      { name: "Six Sigma", icon: <FaTable className="text-green-500" /> },
      { name: "Project Management", icon: <FaProjectDiagram className="text-pink-400" /> },
      { name: "SAP", icon: <FaServer className="text-blue-400" /> },
    ],
    "Web & DevOps": [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "React", icon: <FaReact className="text-sky-400" /> },
      { name: "Fast API", icon: <SiFastapi className="text-green-500" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "Github & Gitlab", icon: <SiGit className="text-red-500" /> },
      { name: "Selenium", icon: <SiSelenium className="text-green-400" /> },
      { name: "Linux", icon: <SiLinux className="text-yellow-500" /> },
      { name: "GCP", icon: <SiGooglecloud className="text-blue-400" /> },
    ],
  };

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <section className="py-16 px-6 bg-gray-900 text-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-12">
        Technologies & Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Object.entries(categorias).map(([categoria, items], index) => (
          <motion.div
            key={categoria}
            className="bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-blue-300 mb-4">{categoria}</h3>
            <ul className="space-y-3">
              {items.map((item, i) => (
                <motion.li
                  key={item.name}
                  className="flex items-center space-x-3 bg-gray-700 rounded-lg px-3 py-2 hover:bg-gray-600 transition-colors"
                  custom={i}
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgba(59,130,246,0.8)" }}
                >
                  <motion.span
                    className="text-2xl"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  >
                    {item.icon}
                  </motion.span>
                  <span>{item.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
