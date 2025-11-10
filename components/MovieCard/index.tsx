
import styles from './MovieCard.module.css';

interface MovieCardProps {
  title: string;
  posterPath: string;
  overview: string;
  releaseDate: string;
}

export default function MovieCard({ title, posterPath, overview, releaseDate }: MovieCardProps) {
  const imageUrl = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : '/no-image.png'; // fallback

  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.poster} />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p><strong>Release:</strong> {releaseDate}</p>
        <p>{overview}</p>
      </div>
    </div>
  );
}