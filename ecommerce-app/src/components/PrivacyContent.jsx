const privacySections = [
  {
    title: 'Information We Collect',
    description:
      'We collect personal information that helps us process orders, provide support, and improve your shopping experience. This may include your name, email, shipping address, phone number, payment details, and browsing activity on our website.',
  },
  {
    title: 'How We Use Your Data',
    description:
      'Your information is used to manage purchases, confirm deliveries, personalize product recommendations, prevent fraud, and communicate important updates such as order status, promotions, and policy changes.',
  },
  {
    title: 'Your Rights',
    description:
      'You may request access, correction, or deletion of your personal data at any time. You can also choose to unsubscribe from marketing communications or update your account preferences whenever needed.',
  },
]

const PrivacyContent = () => {
  return (
    <div className="px-6 py-16 sm:px-10 sm:py-24 lg:px-15">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <span className="mb-6 inline-block rounded-lg bg-(--secondary-color) px-4 py-2 text-lg font-semibold text-(--primary-color)">
            Privacy Policy
          </span>
          <h2 className="Recoleta mb-6 text-5xl font-black text-(--primary-color) sm:text-6xl lg:text-7xl">
            Your privacy matters to us.
          </h2>
          <p className="text-lg leading-8 text-(--text-color)">
            At Sneaker House, we are committed to protecting your personal information and
            creating a safe, transparent shopping experience. This policy explains how we
            collect, use, and protect data when you visit our store or make a purchase.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {privacySections.map((section) => (
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
          <h3 className="Recoleta mb-6 text-4xl font-bold text-white">What data we process</h3>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <ul className="space-y-4 text-base leading-7 text-stone-200">
                <li>• Account details such as your name, email address, and password.</li>
                <li>• Shipping and billing information required for order fulfillment.</li>
                <li>• Payment information handled securely and not stored directly by us.</li>
                <li>• Device and browser information used to optimize website performance.</li>
              </ul>
            </div>
            <div>
              <p className="text-base leading-7 text-stone-200">
                We may also collect information when you contact our support team, leave a
                review, subscribe to updates, or participate in campaigns. This helps us
                respond faster, improve service quality, and deliver a better customer
                experience.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 space-y-8">
          <div>
            <h3 className="Recoleta mb-4 text-3xl font-bold text-(--primary-color)">
              Cookies and website analytics
            </h3>
            <p className="text-base leading-7 text-(--text-color)">
              We use cookies and similar technologies to understand how visitors use our
              website, remember your preferences, and improve page performance. You can
              manage cookie settings in your browser at any time, although some features may
              be limited if cookies are disabled.
            </p>
          </div>

          <div>
            <h3 className="Recoleta mb-4 text-3xl font-bold text-(--primary-color)">
              Security and retention
            </h3>
            <p className="text-base leading-7 text-(--text-color)">
              We use reasonable technical and organizational safeguards to protect your
              personal data from unauthorized use, loss, or disclosure. We retain data only
              as long as necessary for business, legal, and security obligations.
            </p>
          </div>

          <div>
            <h3 className="Recoleta mb-4 text-3xl font-bold text-(--primary-color)">
              Contact us
            </h3>
            <p className="text-base leading-7 text-(--text-color)">
              If you have questions about this Privacy Policy or want to update your personal
              information, please contact our support team at hello@sneakerhouse.com. We will
              be happy to assist you.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyContent
