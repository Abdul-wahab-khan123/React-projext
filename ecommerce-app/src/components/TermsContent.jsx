const termsSections = [
  {
    title: 'Acceptance of Terms',
    description:
      'By accessing or purchasing from Sneaker House, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website or place an order.',
  },
  {
    title: 'Orders and Payment',
    description:
      'All orders are subject to product availability, confirmation of payment, and verification of shipping details. We reserve the right to refuse or cancel any order at our discretion if we suspect fraud, misuse, or inaccurate information.',
  },
  {
    title: 'Shipping and Delivery',
    description:
      'Order delivery times may vary depending on the destination, courier, and selected shipping method. We make every effort to provide accurate delivery estimates, but delays caused by logistics providers or unforeseen circumstances may occur.',
  },
]

const TermsContent = () => {
  return (
    <div className="px-6 py-16 sm:px-10 sm:py-24 lg:px-15">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <span className="mb-6 inline-block rounded-lg bg-(--secondary-color) px-4 py-2 text-lg font-semibold text-(--primary-color)">
            Terms & Conditions
          </span>
          <h2 className="Recoleta mb-6 text-5xl font-black text-(--primary-color) sm:text-6xl lg:text-7xl">
            Clear rules for a smooth shopping experience.
          </h2>
          <p className="text-lg leading-8 text-(--text-color)">
            These terms outline the responsibilities of both our customers and our brand when
            using our website, placing orders, and receiving support. Please read them carefully.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {termsSections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-stone-200 bg-stone-50 p-8 shadow-[0_12px_40px_rgba(52,38,23,0.04)]"
            >
              <h3 className="Recoleta mb-4 text-3xl font-bold text-(--primary-color)">
                {section.title}
              </h3>
              <p className="text-base leading-7 text-(--text-color)">{section.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] bg-(--primary-color) p-8 text-white sm:p-10 lg:p-12">
          <h3 className="Recoleta mb-6 text-4xl font-bold text-white">Important policies</h3>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <ul className="space-y-4 text-base leading-7 text-stone-200">
                <li>• Product descriptions are provided as accurately as possible, but minor differences in color, texture, or size may occur.</li>
                <li>• Returns and exchanges are accepted for eligible products within the stated return period.</li>
                <li>• We are not liable for delays caused by weather, courier issues, or events outside our control.</li>
                <li>• Users must not misuse the website, copy content, or attempt to interfere with service operations.</li>
              </ul>
            </div>
            <div>
              <p className="text-base leading-7 text-stone-200">
                We reserve the right to update these Terms & Conditions at any time. Continued use
                of the website after changes are published means you accept the revised terms. Any
                dispute arising from these terms will be governed by the applicable laws of the
                jurisdiction where our company operates.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-8">
          <div>
            <h3 className="Recoleta mb-4 text-3xl font-bold text-(--primary-color)">
              Returns and refunds
            </h3>
            <p className="text-base leading-7 text-(--text-color)">
              Refunds or exchanges may be processed for damaged, defective, or incorrect items, as
              long as the request is made within the eligible return window and all required details
              are provided. Refunds are typically issued to the original payment method after review.
            </p>
          </div>

          <div>
            <h3 className="Recoleta mb-4 text-3xl font-bold text-(--primary-color)">
              Intellectual property
            </h3>
            <p className="text-base leading-7 text-(--text-color)">
              All designs, content, text, logos, images, and brand materials on this website are the
              property of Sneaker House unless otherwise stated. Reproduction or unauthorized use of
              these materials is prohibited without our written permission.
            </p>
          </div>

          <div>
            <h3 className="Recoleta mb-4 text-3xl font-bold text-(--primary-color)">
              Contact us
            </h3>
            <p className="text-base leading-7 text-(--text-color)">
              For questions regarding these Terms & Conditions, please reach out to our support team
              at hello@sneakerhouse.com. We are here to help resolve issues quickly and clearly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsContent
