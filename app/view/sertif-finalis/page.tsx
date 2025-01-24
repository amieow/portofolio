import Typography from "@/component/atoms/ui/typography"

export default function Home() {
  return (
    <div className="min-h-screen flex-col flex items-center justify-center pt-28 pb-8">
      <div className="container relative flex flex-col-reverse gap-4 md:justify-between md:flex-row h-[50vh] sm:h-[80vh]">
        <iframe
          src="https://drive.google.com/file/d/1x0l6qPpcIaMDCMDd_keDe0QSCeduhKCm/preview"
          className="w-full h-full border-none flex-1"
          allow="autoplay"
        />
      </div>
    </div>
  )
}