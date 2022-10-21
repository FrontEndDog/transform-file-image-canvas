export default function (file: File): Promise<HTMLElement> {
  return new Promise((resolve, reject) => {
    const image = new Image()
    const URL = window.webkitURL || window.URL
    if (!URL) reject()
    const url = URL.createObjectURL(file)
    image.onload = function () {
      resolve(image)
      URL.revokeObjectURL(url)
    }
    image.src = url
  })
}
