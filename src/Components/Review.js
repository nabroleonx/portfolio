const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    {skill:'Python', rating: 5, count: 1300 },
    {skill:'React.js', rating: 4, count: 1150 },
    {skill:'Next.js', rating: 1, count: 1100 },
    {skill:'GraphQL', rating: 3, count: 1000 },
    {skill:'Tailwind', rating: 2, count: 1056 },
  ],
}

export default function Review() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customer Reviews</h2>

          <div className="mt-3 flex items-center">
            <div>
              <p className="sr-only">{reviews.average} out of 5 stars</p>
            </div>
            <p className="ml-2 text-sm text-gray-900">Based on {reviews.totalCount} reviews</p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Review data</h3>

            <dl className="space-y-3">
              {reviews.counts.map((count) => (
                <div key={count.rating} className="flex items-center text-sm">
                  <dt className="flex-1 flex items-center">
                    <p className="w-16 font-medium text-gray-900">
                      {count.skill}
                    </p>
                    <div aria-hidden="true" className="ml-1 flex-1 flex items-center">
                      <div className="ml-3 relative flex-1">
                        <div className="h-3 bg-gray-100 border border-gray-200 rounded-full" />
                        {count.count > 0 ? (
                          <div
                            className="absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full"
                            style={{ width: `calc(${count.count} / ${reviews.totalCount} * 100%)` }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>

        
      </div>
    </div>
  )
}
