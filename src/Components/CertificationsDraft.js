import { LinkIcon } from "@heroicons/react/outline"

const products = [
  {
    id: 1,
    name: 'Google IT Support',
    color: 'by Google',
    href: '#',
    imageSrc: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~5DF9AVY29D5F/CERTIFICATE_LANDING_PAGE~5DF9AVY29D5F.jpeg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  {
    id: 1,
    name: 'Zip Tote Basket',
    color: 'White and black',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  {
    id: 1,
    name: 'Zip Tote Basket',
    color: 'White and black',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  {
    id: 1,
    name: 'AI for Everyone',
    color: 'by DeepLearnin.AI',
    href: '#',
    imageSrc: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~GB5RDEBTXBHG/CERTIFICATE_LANDING_PAGE~GB5RDEBTXBHG.jpeg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  
  // More products...
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
              <div className="mt-6">
                <a
                  href={product.href}
                  className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  <LinkIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">See Credential</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
