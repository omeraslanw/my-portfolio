import React, { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/omeraslanw/repos")
      .then((res) => {
        setRepos(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section
      id="projects"
      className="bg-gray-700 text-gray-900 py-16 px-8 min-h-[60vh]"
    >
      <h2 className="text-white text-4xl font-bold mb-4 text-center">Projelerim</h2>
      {loading ? (
        <div className="text-center text-lg">Yükleniyor...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
              <p className="text-gray-700 mb-4 line-clamp-3">
                {repo.description || "Açıklama yok."}
              </p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-teal-600 hover:text-teal-800 font-medium transition-colors"
              >
                GitHub'da Görüntüle
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;