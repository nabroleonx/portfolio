import { LinkIcon } from "@heroicons/react/outline"

const products = [
  {
    id: 1,
    name: 'Google IT Support',
    color: 'by Google',
    href: 'https://www.coursera.org/account/accomplishments/professional-cert/ZFUPSKPR5ZQE',
    imageSrc: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~ZFUPSKPR5ZQE/CERTIFICATE_LANDING_PAGE~ZFUPSKPR5ZQE.jpeg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
  },
  {
    id: 1,
    name: 'The Complete Full-Stack JavaScript Course!',
    color: 'by Joseph Delgadillo /Udemy/',
    href: 'https://www.udemy.com/certificate/UC-be2d5c01-c625-496b-b39a-28f2d0df0e93/',
    imageSrc: 'https://udemy-certificate.s3.amazonaws.com/image/UC-be2d5c01-c625-496b-b39a-28f2d0df0e93.jpg?v=1633264899000',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
  },
  {
    id: 1,
    name: 'Automate the Boring Stuff with Python Programming',
    color: 'by Al Sweigart /Udemy/',
    href: 'https://www.udemy.com/certificate/UC-5f63e86c-331f-4ca2-b5da-5166bc5d2cce/',
    imageSrc: 'https://udemy-certificate.s3.amazonaws.com/image/UC-5f63e86c-331f-4ca2-b5da-5166bc5d2cce.jpg?v=1617624321000',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
  },
  {
    id: 1,
    name: 'AI for Everyone',
    color: 'by DeepLearnin.AI',
    href: 'https://www.coursera.org/account/accomplishments/verify/GB5RDEBTXBHG',
    imageSrc: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~GB5RDEBTXBHG/CERTIFICATE_LANDING_PAGE~GB5RDEBTXBHG.jpeg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
  },
]

export default function Certifications() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-1 px-4 sm:py-1 sm:px-6 lg:max-w-7xl lg:px-8">

        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="relative">
                <div className="relative w-full h-72 rounded-lg overflow-hidden">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-scale-down"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <div className="relative text-lg font-semibold text-white">
                  <a
                  href={product.href}
                  className="relative border-transparent"
                >
                  <LinkIcon className="w-5 h-5" aria-hidden="true" />
                </a></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
