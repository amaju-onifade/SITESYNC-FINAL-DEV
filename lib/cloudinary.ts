import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function uploadToCloudinary(
  file: Buffer,
  folder: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder, resource_type: 'auto', transformation: { quality: 'auto', fetch_format: 'auto' } },
      (error, result) => {
        if (error) return reject(error)
        resolve(result!.secure_url)
      }
    )
    uploadStream.end(file)
  })
}

export async function uploadFromUrl(
  url: string,
  folder: string,
  publicId?: string
): Promise<string> {
  const result = await cloudinary.uploader.upload(url, {
    folder,
    public_id: publicId,
    resource_type: 'image',
  })
  return result.secure_url
}

export { cloudinary }
