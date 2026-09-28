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
            fgColor="#0b1110"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white rounded-xl px-3 py-2 shadow-md border border-[var(--color-border)]">
              <span className="font-semibold tracking-tight text-[var(--color-bg)] text-sm">
                RootMate
              </span>
            </div>
          </div>
        </div>
        <p className="text-[var(--color-text-muted)] text-sm">{hint}</p>
        <button
          type="button"
          onClick={onClose}
          className="text-sm px-4 py-2 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-primary-500 transition-colors"
        >
          {closeLabel}
        </button>
      </div>
    </div>
  )
}
