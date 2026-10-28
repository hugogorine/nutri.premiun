import { cn } from '@/lib/utils'

type ImageSlotProps = {
  /** Nome do arquivo esperado em /public/images (ver IMAGENS.md). */
  file: string
  alt: string
  /** Proporção CSS, ex.: '4 / 5'. */
  ratio: string
  className?: string
  /** Mostra o nome do arquivo dentro do placeholder. */
  label?: boolean
}

/**
 * Placeholder com proporção fixa até a imagem gerada por IA chegar.
 * Para trocar: coloque o arquivo em public/images e substitua este bloco por
 * <img src={`/images/${file}`} alt={alt} loading="lazy" ... /> mantendo a proporção.
 */
export function ImageSlot({ file, alt, ratio, className, label = true }: ImageSlotProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      data-image-slot={file}
      className={cn(
        'relative overflow-hidden bg-surface',
        'bg-[radial-gradient(120%_80%_at_20%_15%,color-mix(in_srgb,var(--emerald)_38%,transparent),transparent_60%),linear-gradient(160deg,var(--surface),var(--bg))]',
        className,
      )}
      style={{ aspectRatio: ratio }}
    >
      {label ? (
        <span className="absolute inset-x-0 bottom-0 p-4 text-xs text-ink-2">
          {file} · {ratio.replace(/\s/g, '')}
        </span>
      ) : null}
    </div>
  )
}
