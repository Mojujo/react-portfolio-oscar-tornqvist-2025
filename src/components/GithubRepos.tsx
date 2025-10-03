import React, { useEffect, useState } from "react";
import styles from "./GithubRepos.module.css"

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
};

type Props = {
  username: string;
};

const GitHubRepos: React.FC<Props> = ({ username }) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
          throw new Error(`Error fetching repos: ${response.statusText}`);
        }
        const data: Repo[] = await response.json();
        setRepos(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  if (loading) return <p>Loading repos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul className={styles.repoList}>
      {repos.map((repo) => (
        <li className={styles.list} key={repo.id}>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default GitHubRepos;