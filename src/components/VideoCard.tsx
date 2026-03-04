import type { Video } from '../types'

interface VideoCardProps {
  video: Video
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <article className="video-card">
      <figure>
        <img src={video.thumbnail} alt={`${video.title} thumbnail`} loading="lazy" />
        <button type="button" className="video-card__play" aria-label={`Play ${video.title}`}>
          ▶
        </button>
      </figure>
      <div className="video-card__content">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
        <span>{video.duration}</span>
      </div>
    </article>
  )
}
