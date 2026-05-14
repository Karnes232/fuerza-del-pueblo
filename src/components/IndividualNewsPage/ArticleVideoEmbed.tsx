const YOUTUBE_ID_REGEX =
  /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/

const getYouTubeId = (url: string): string | null => {
  const match = url.match(YOUTUBE_ID_REGEX)
  return match ? match[1] : null
}

export const ArticleVideoEmbed = ({ url }: { url: string }) => {
  const videoId = getYouTubeId(url)
  if (!videoId) return null

  return (
    <div className="mt-8 aspect-video w-full overflow-hidden rounded-lg shadow-md">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title="Video del artículo"
        className="w-full h-full"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}
