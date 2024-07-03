export const Video = ({
    src
  }: {
    src: string
    caption?: string | undefined
  }) => (
    <>
      <picture>
        <video src={src} autoPlay playsInline muted loop controls  />
      </picture>
      
    </>);