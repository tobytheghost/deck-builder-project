import { useRef } from 'react'
import { Button } from '@deck-app/ui'
import QRCode from 'qrcode.react'
import styles from './qr.module.scss'

interface QRTypes {
  imageName: string
  qrTitle?: string
}

export const QR = ({ qrTitle, imageName }: QRTypes) => {
  const QRRef = useRef<HTMLDivElement>(null)
  const downloadQR = () => {
    const canvas = QRRef.current && QRRef.current.querySelector('canvas')
    if (!canvas) return
    return convertQR(canvas, imageName)
  }
  return (
    <div className={styles['qr']} ref={QRRef}>
      {qrTitle ? <h3>{qrTitle}</h3> : ''}
      <QRCode value={window.location.href} />
      <Button size={'small'} onClick={downloadQR}>Download QR</Button>
    </div>
  )
}

const convertQR = (canvas: HTMLCanvasElement | null, imageName: string) => {
  if (!canvas) return
  const pngUrl = canvas
    .toDataURL('image/png')
    .replace('image/png', 'image/octet-stream')
  const downloadLink = document.createElement('a')
  downloadLink.href = pngUrl
  downloadLink.download = `${imageName}.png`
  document.body.appendChild(downloadLink)
  downloadLink.click()
  document.body.removeChild(downloadLink)
}
