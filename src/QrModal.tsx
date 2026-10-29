import { QRCodeSVG } from 'qrcode.react'

export default function QrModal({
  url,
  hint,
  closeLabel,
  onClose,
}: {
  url: string
  hint: string
  closeLabel: string
  onClose: () => void
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col items-center gap-6"
      >
        <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
          <QRCodeSVG
            value={url}
            size={320}
            level="H"
            bgColor="#ffffff"
            fgColor="#1c1c1e"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white rounded-2xl p-1.5 shadow-md">
              <img src="/logo.png" alt="Rootmate" width={44} height={44} />
            </div>
          </div>
        </div>
        <p className="text-white/80 text-sm">{hint}</p>
        <button
          type="button"
          onClick={onClose}
          className="text-sm px-4 py-2 rounded-full border border-white/30 text-white/80 hover:text-white hover:border-white transition-colors"
        >
          {closeLabel}
        </button>
      </div>
    </div>
  )
}
